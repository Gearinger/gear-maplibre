import { geojson } from "flatgeobuf";
import { map } from "./MapUtil";

/**
 * 将 FlatGeoBuf 数据添加到地图上
 * @param fgb FlatGeobuf
 * @param map 地图
 */
export async function addFlatGeoBuf(fgb: any) {
    const fc = { type: "FeatureCollection", features: [] as any[] };
    let i = 0;

    for await (const f of geojson.deserialize(
        fgb,
        undefined,
        undefined
    ) as AsyncGenerator<any>) {
        fc.features.push({ ...f, id: i });
        i += 1;
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
}

/**
 * 添加geojson数据到地图上
 */
export async function addGeoJson(sourceName: string, json: String | Object, annoField: String = "") {
    map.addSource(sourceName, {
        type: "geojson",
        // data: "http://192.168.10.95:8999/geoserver/nansha/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=nansha%3Afield&maxFeatures=40000&outputFormat=application%2Fjson",
        data: json,
        generateId: true,
    });
    const layerId = sourceName + "-geoJson";
    map.addLayer({
        id: sourceName + "-geoJson",
        type: "fill",
        source: sourceName,
        layout: {},
        paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
            "fill-outline-color": "red",
        },
    });
    if (annoField) {
        map.addLayer({
            id: "geoJsonAnno",
            type: "symbol",
            source: "GeoJson",
            layout: {
                "text-field": `{${annoField}}`,
                "text-size": 11
            },
        });
    }
    map.fitBounds(map.getBounds());
    return map.getLayer(layerId)
}

/**
 * 添加pbf数据到地图上
 */
export async function addPbfLayer(layerName: string, vectorTileUrl: string, paint: any = undefined) {
    console.log(vectorTileUrl);

    map.addSource("source-" + layerName, {
        type: "vector",
        // tiles: ["http://127.0.0.1:9005/business/field/pbfLayer/field/1/{z}/{x}/{y}"],
        url: vectorTileUrl
    });
    map.addLayer({
        id: layerName,
        type: "circle",
        source: "source-" + layerName,
        "source-layer": layerName,
        // "paint": paint,
        // "paint": {
        //     "fill-color": [
        //         "match",
        //         ["get", "name"],
        //         ["0403020000"],
        //         "#CDEBF2",
        //         ["0206000000"],
        //         "#F8CDD0",
        //         ["0201000000"],
        //         "#92D050",
        //         "#F39F72",
        //     ]
        // }
    }).fitBounds(map.getBounds());
    console.log(map.getLayer(layerName));

    return map.getLayer(layerName);
}

/**
 * 添加瓦片底图
 * @param map 
 * @param url 
 */
export async function addTileLayer(layerName: string, url: string) {
    // 添加影像底图
    const source = "source-" + layerName;
    map.addSource(source, {
        type: "raster",
        tiles: [url],
        tileSize: 256
    });
    map.addLayer({
        id: layerName,
        type: "raster",
        source: source
    })
    return map.getLayer(layerName)
}