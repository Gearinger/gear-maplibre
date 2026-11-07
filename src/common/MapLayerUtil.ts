import { geojson } from "flatgeobuf";
import { bbox } from "@turf/turf";
import type { GeoJSONSource } from "maplibre-gl";
import { map } from "./MapUtil";
import type { LayerBounds, ManagedLayer, WorkspaceLayer } from "../types/workspace";

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

    map.addSource(sourceName, {
        type: "geojson",
        data: fc,
    });
    map.addLayer({
        id: `${sourceName}-fill`,
        type: "fill",
        source: sourceName,
        paint: {
            "fill-color": "#0000FF",
            "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0.5,
            ],
        },
    });
    return {
        id: sourceName,
        type: "FlatGeobuf",
        source: sourceName,
        styleLayerIds: [`${sourceName}-fill`],
        data: fc,
        featureCount: fc.features.length,
        bounds: getBounds(fc),
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
    for (const layerId of layer.styleLayerIds) {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
        }
    }
}

export function setManagedLayerOpacity(layer: ManagedLayer, opacity: number) {
    const value = Math.min(1, Math.max(0, opacity));
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
    // Workspace order is top-to-bottom; MapLibre draws later layers above earlier ones.
    for (const layer of [...orderedLayers].reverse()) {
        for (const layerId of layer.styleLayerIds) {
            if (map.getLayer(layerId)) map.moveLayer(layerId);
        }
    }
}

export function fitManagedLayer(layer: ManagedLayer) {
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
    for (const layerId of layer.styleLayerIds) {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
    }
    if (map.getSource(layer.source)) map.removeSource(layer.source);
}
