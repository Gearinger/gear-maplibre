import { geojson } from "flatgeobuf";
import { bbox } from "@turf/turf";
import type { GeoJSONSource } from "maplibre-gl";
import { map } from "./MapUtil";
import type { LayerBounds, ManagedLayer, WorkspaceLayer } from "../types/workspace";
import {
    add3DTilesDeckLayer,
    addModelDeckLayer,
    removeDeckLayer,
    reorderDeckLayers,
    setDeckLayerOpacity,
    setDeckLayerVisibility,
} from "./DeckOverlayService";
import {
    cogUrl,
    ensureCogProtocol,
    getCogBounds,
    openPmtilesArchive,
} from "./SpatialProtocols";

function getFeatureCount(data: GeoJSON.GeoJSON) {
    return "features" in data ? data.features.length : 1;
}

function getBounds(data: GeoJSON.GeoJSON): LayerBounds | undefined {
    const bounds = bbox(data);
    return bounds.every(Number.isFinite)
        ? [bounds[0], bounds[1], bounds[2], bounds[3]]
        : undefined;
}

/**
 * 将 FlatGeoBuf 数据添加到地图上
 * @param fgb FlatGeobuf
 * @param map 地图
 */
export async function addFlatGeoBuf(
    fgb: string | Uint8Array | ReadableStream,
    sourceName = "flatgeobuf"
): Promise<ManagedLayer> {
    const fc: GeoJSON.FeatureCollection = { type: "FeatureCollection", features: [] };
    let i = 0;

    for await (const f of geojson.deserialize(fgb)) {
        fc.features.push({ ...f, id: i++ });
    }

    const managed = await addGeoJson(sourceName, fc);
    return {
        ...managed,
        type: "FlatGeobuf",
        url: typeof fgb === "string" ? fgb : undefined,
    };
}

/**
 * 添加geojson数据到地图上
 */
export async function addGeoJson(
    sourceName: string,
    json: GeoJSON.GeoJSON | string,
    annoField: string = ""
): Promise<ManagedLayer> {
    if (map.getSource(sourceName)) {
        throw new Error(`数据源已存在：${sourceName}`);
    }

    map.addSource(sourceName, {
        type: "geojson",
        data: json,
        generateId: true,
    });

    try {
        map.addLayer({
            id: `${sourceName}-fill`,
            type: "fill",
            source: sourceName,
            filter: ["match", ["geometry-type"], ["Polygon", "MultiPolygon"], true, false],
            paint: {
                "fill-color": "#088",
                "fill-opacity": 0.8,
                "fill-outline-color": "red",
            },
        });
        map.addLayer({
            id: `${sourceName}-line`,
            type: "line",
            source: sourceName,
            filter: ["match", ["geometry-type"], ["LineString", "MultiLineString"], true, false],
            paint: {
                "line-color": "#ff6b35",
                "line-width": 2,
            },
        });
        map.addLayer({
            id: `${sourceName}-point`,
            type: "circle",
            source: sourceName,
            filter: ["match", ["geometry-type"], ["Point", "MultiPoint"], true, false],
            paint: {
                "circle-color": "#ff6b35",
                "circle-radius": 5,
            },
        });

        if (annoField) {
            map.addLayer({
                id: `${sourceName}-label`,
                type: "symbol",
                source: sourceName,
                layout: {
                    "text-field": `{${annoField}}`,
                    "text-size": 11,
                    "text-offset": [0, 0.8],
                },
            });
        }

        if (typeof json !== "string") {
            const bounds = bbox(json);
            if (bounds.every(Number.isFinite)) {
                map.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], { padding: 40 });
            }
        }
    } catch (error) {
        for (const styleLayer of map.getStyle().layers ?? []) {
            if ("source" in styleLayer && styleLayer.source === sourceName && map.getLayer(styleLayer.id)) {
                map.removeLayer(styleLayer.id);
            }
        }
        if (map.getSource(sourceName)) {
            map.removeSource(sourceName);
        }
        throw error;
    }

    const styleLayerIds = [
        `${sourceName}-fill`,
        `${sourceName}-line`,
        `${sourceName}-point`,
        ...(annoField ? [`${sourceName}-label`] : []),
    ];

    return {
        id: sourceName,
        type: "GeoJSON",
        source: sourceName,
        styleLayerIds,
        data: typeof json === "string" ? undefined : json,
        url: typeof json === "string" ? json : undefined,
        featureCount: typeof json === "string" ? undefined : getFeatureCount(json),
        bounds: typeof json === "string" ? undefined : getBounds(json),
    };
}

/**
 * 添加pbf数据到地图上
 */
export async function addPbfLayer(
    layerName: string,
    vectorTileUrl: string,
    paint?: Record<string, unknown>
): Promise<ManagedLayer> {
    const source = "source-" + layerName;
    if (map.getSource(source) || map.getLayer(layerName)) {
        throw new Error(`图层已存在：${layerName}`);
    }

    map.addSource(source, vectorTileUrl.includes("{z}")
        ? { type: "vector", tiles: [vectorTileUrl] }
        : { type: "vector", url: vectorTileUrl });
    try {
        map.addLayer({
            id: layerName,
            type: "circle",
            source,
            "source-layer": layerName,
            ...(paint ? { paint } : {}),
        });
    } catch (error) {
        map.removeSource(source);
        throw error;
    }

    return {
        id: layerName,
        type: "Vector Tile",
        source,
        styleLayerIds: [layerName],
        url: vectorTileUrl,
    };
}

/**
 * 添加瓦片底图
 * @param map 
 * @param url 
 */
export async function addTileLayer(layerName: string, url: string): Promise<ManagedLayer> {
    // 添加影像底图
    const source = "source-" + layerName;
    if (map.getSource(source) || map.getLayer(layerName)) {
        throw new Error(`图层已存在：${layerName}`);
    }
    map.addSource(source, {
        type: "raster",
        tiles: [url],
        tileSize: 256
    });
    try {
        map.addLayer({
            id: layerName,
            type: "raster",
            source: source
        });
    } catch (error) {
        map.removeSource(source);
        throw error;
    }

    return {
        id: layerName,
        type: "XYZ-Tile",
        source,
        styleLayerIds: [layerName],
        url,
    };
}

export function setManagedLayerVisibility(layer: ManagedLayer, visible: boolean) {
    if (layer.engine === "deck") {
        setDeckLayerVisibility(layer.id, visible);
        return;
    }
    if (layer.type === "Terrain") {
        if (!visible) {
            map.setTerrain(null);
        } else if (map.getSource(layer.source)) {
            map.setTerrain({ source: layer.source, exaggeration: 1.2 });
        }
    }
    for (const layerId of layer.styleLayerIds) {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
        }
    }
}

export function setManagedLayerOpacity(layer: ManagedLayer, opacity: number) {
    const value = Math.min(1, Math.max(0, opacity));
    if (layer.engine === "deck") {
        setDeckLayerOpacity(layer.id, value);
        return;
    }
    for (const layerId of layer.styleLayerIds) {
        const styleLayer = map.getLayer(layerId);
        if (!styleLayer) continue;

        switch (styleLayer.type) {
            case "fill":
                map.setPaintProperty(layerId, "fill-opacity", value);
                break;
            case "line":
                map.setPaintProperty(layerId, "line-opacity", value);
                break;
            case "circle":
                map.setPaintProperty(layerId, "circle-opacity", value);
                break;
            case "raster":
                map.setPaintProperty(layerId, "raster-opacity", value);
                break;
            case "symbol":
                map.setPaintProperty(layerId, "icon-opacity", value);
                map.setPaintProperty(layerId, "text-opacity", value);
                break;
        }
    }
}

export function applyManagedLayerStyle(layer: WorkspaceLayer) {
    if (layer.engine === "deck") return;
    for (const layerId of layer.styleLayerIds) {
        const styleLayer = map.getLayer(layerId);
        if (!styleLayer) continue;

        switch (styleLayer.type) {
            case "fill":
                map.setPaintProperty(layerId, "fill-color", layer.style.color);
                map.setPaintProperty(layerId, "fill-outline-color", layer.style.color);
                break;
            case "line":
                map.setPaintProperty(layerId, "line-color", layer.style.color);
                map.setPaintProperty(layerId, "line-width", layer.style.lineWidth);
                break;
            case "circle":
                map.setPaintProperty(layerId, "circle-color", layer.style.color);
                map.setPaintProperty(layerId, "circle-radius", layer.style.pointRadius);
                break;
            case "symbol":
                map.setPaintProperty(layerId, "text-color", layer.style.color);
                break;
        }
    }
}

export function applyManagedLayerOrder(orderedLayers: WorkspaceLayer[]) {
    reorderDeckLayers(
        orderedLayers
            .filter((layer) => layer.engine === "deck")
            .map((layer) => layer.id)
    );
    // Workspace order is top-to-bottom; MapLibre draws later layers above earlier ones.
    for (const layer of [...orderedLayers].reverse()) {
        for (const layerId of layer.styleLayerIds) {
            if (map.getLayer(layerId)) map.moveLayer(layerId);
        }
    }
}

export function fitManagedLayer(layer: ManagedLayer) {
    if (layer.coordinates) {
        map.flyTo({
            center: [layer.coordinates[0], layer.coordinates[1]],
            zoom: Math.max(map.getZoom(), 15),
            pitch: 50,
        });
        return true;
    }
    if (!layer.bounds) return false;
    map.fitBounds(
        [[layer.bounds[0], layer.bounds[1]], [layer.bounds[2], layer.bounds[3]]],
        { padding: 60, maxZoom: 16 }
    );
    return true;
}

export function updateManagedGeoJson(layer: ManagedLayer, data: GeoJSON.GeoJSON) {
    const source = map.getSource(layer.source) as GeoJSONSource | undefined;
    if (!source || typeof source.setData !== "function") {
        throw new Error("当前图层不是可更新的 GeoJSON 数据源");
    }
    source.setData(data);
    layer.data = data;
    layer.featureCount = getFeatureCount(data);
    layer.bounds = getBounds(data);
}

export function removeManagedLayer(layer: ManagedLayer) {
    if (layer.engine === "deck") {
        removeDeckLayer(layer.id);
        return;
    }
    if (layer.type === "Terrain" && map.getTerrain()?.source === layer.source) {
        map.setTerrain(null);
    }
    for (const layerId of layer.styleLayerIds) {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
    }
    if (map.getSource(layer.source)) map.removeSource(layer.source);
}

export async function addPmtilesLayer(
    layerName: string,
    tileUrl: string
): Promise<ManagedLayer> {
    const source = `source-${layerName}`;
    if (map.getSource(source) || map.getLayer(layerName)) {
        throw new Error(`图层已存在：${layerName}`);
    }

    const { archive, protocolUrl } = await openPmtilesArchive(tileUrl);
    const [header, metadata] = await Promise.all([
        archive.getHeader(),
        archive.getMetadata(),
    ]);
    const bounds: LayerBounds = [
        header.minLon,
        header.minLat,
        header.maxLon,
        header.maxLat,
    ];
    const styleLayerIds: string[] = [];

    if (header.tileType === 1) {
        const vectorLayers = (
            metadata as { vector_layers?: Array<{ id?: string }> }
        )?.vector_layers;
        const sourceLayer = vectorLayers?.[0]?.id ?? layerName;
        map.addSource(source, {
            type: "vector",
            url: protocolUrl,
        });
        for (const [suffix, type, paint] of [
            ["fill", "fill", { "fill-color": "#38bdf8", "fill-opacity": 0.45, "fill-outline-color": "#38bdf8" }],
            ["line", "line", { "line-color": "#38bdf8", "line-width": 1.5 }],
            ["point", "circle", { "circle-color": "#38bdf8", "circle-radius": 4 }],
        ] as const) {
            const id = `${layerName}-${suffix}`;
            map.addLayer({
                id,
                type,
                source,
                "source-layer": sourceLayer,
                paint,
            } as never);
            styleLayerIds.push(id);
        }
    } else if ([2, 3, 4, 5].includes(header.tileType)) {
        map.addSource(source, {
            type: "raster",
            url: protocolUrl,
            tileSize: 256,
        });
        map.addLayer({
            id: layerName,
            type: "raster",
            source,
        });
        styleLayerIds.push(layerName);
    } else {
        throw new Error(`暂不支持该 PMTiles 类型：${header.tileType}`);
    }

    return {
        id: layerName,
        type: "PMTiles",
        source,
        styleLayerIds,
        url: tileUrl,
        bounds,
    };
}

export async function addGeoTiffLayer(
    layerName: string,
    tileUrl: string
): Promise<ManagedLayer> {
    const source = `source-${layerName}`;
    if (map.getSource(source) || map.getLayer(layerName)) {
        throw new Error(`图层已存在：${layerName}`);
    }
    await ensureCogProtocol();
    let bounds: LayerBounds | undefined;
    try {
        bounds = await getCogBounds(tileUrl);
    } catch (error) {
        console.warn("Unable to read COG bounds:", error);
    }
    map.addSource(source, {
        type: "raster",
        url: cogUrl(tileUrl),
        tileSize: 256,
    });
    map.addLayer({
        id: layerName,
        type: "raster",
        source,
    });
    return {
        id: layerName,
        type: "GeoTIFF",
        source,
        styleLayerIds: [layerName],
        url: tileUrl,
        bounds,
    };
}

export async function addTerrainLayer(
    layerName: string,
    terrainUrl: string,
    encoding: "mapbox" | "terrarium" = "terrarium"
): Promise<ManagedLayer> {
    const source = `source-${layerName}`;
    const hillshadeId = `${layerName}-hillshade`;
    if (map.getSource(source) || map.getLayer(hillshadeId)) {
        throw new Error(`地形已存在：${layerName}`);
    }
    const isCog = /\.tiff?(?:[?#].*)?$/i.test(terrainUrl);
    if (isCog) await ensureCogProtocol();
    map.addSource(source, {
        type: "raster-dem",
        url: isCog ? cogUrl(terrainUrl, true) : terrainUrl,
        tileSize: 256,
        encoding: isCog ? "mapbox" : encoding,
    });
    map.addLayer({
        id: hillshadeId,
        type: "hillshade",
        source,
        paint: {
            "hillshade-exaggeration": 0.35,
        },
    });
    map.setTerrain({ source, exaggeration: 1.2 });
    return {
        id: layerName,
        type: "Terrain",
        source,
        styleLayerIds: [hillshadeId],
        url: terrainUrl,
        terrainEncoding: isCog ? "mapbox" : encoding,
    };
}

export async function add3DTilesLayer(
    layerName: string,
    tilesetUrl: string
): Promise<ManagedLayer> {
    await add3DTilesDeckLayer(map, layerName, tilesetUrl);
    return {
        id: layerName,
        type: "3D Tiles",
        source: layerName,
        styleLayerIds: [],
        url: tilesetUrl,
        engine: "deck",
    };
}

export async function addModelLayer(
    layerName: string,
    modelUrl: string,
    coordinates: [number, number, number],
    scale = 1
): Promise<ManagedLayer> {
    await addModelDeckLayer(map, layerName, modelUrl, coordinates, scale);
    return {
        id: layerName,
        type: "Model",
        source: layerName,
        styleLayerIds: [],
        url: modelUrl,
        coordinates,
        modelScale: scale,
        engine: "deck",
    };
}
