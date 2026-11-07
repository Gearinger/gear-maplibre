import { geojson } from "flatgeobuf";
import { bbox } from "@turf/turf";
import { map } from "./MapUtil";

export interface ManagedLayer {
    id: string;
    type: string;
    source: string;
}

/**
 * 将 FlatGeoBuf 数据添加到地图上
 * @param fgb FlatGeobuf
 * @param map 地图
 */
export async function addFlatGeoBuf(fgb: string | Uint8Array | ReadableStream) {
    const fc: GeoJSON.FeatureCollection = { type: "FeatureCollection", features: [] };
    let i = 0;

    for await (const f of geojson.deserialize(fgb)) {
        fc.features.push({ ...f, id: i++ });
    }

    map.addSource("counties", {
        type: "geojson",
        data: fc,
    });
    map.addLayer({
        id: "counties-fill",
        type: "fill",
        source: "counties",
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
        id: "counties-fill",
        type: "FlatGeobuf",
        source: "counties",
    } satisfies ManagedLayer;
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

    return {
        id: sourceName,
        type: "GeoJSON",
        source: sourceName,
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
    };
}
