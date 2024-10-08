import { center, flattenReduce, Point } from '@turf/turf'
import { Map, Marker, LngLat, Popup } from "maplibre-gl"
import { geojson } from "flatgeobuf";

/**
 * 将 FlatGeoBuf 数据添加到地图上
 * @param fgb FlatGeobuf
 * @param map 地图
 */
export async function addFlatGeoBuf(fgb: any, map: Map) {
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
export async function addGeoJson(map: Map, sourceName: string, json: String|Object, annoField: String = "") {
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
export async function addPbfLayer(map: Map, layerName: string, vectorTileUrl: string, paint: any = undefined) {
    map.addSource("source-" + layerName, {
        type: "vector",
        // tiles: ["http://127.0.0.1:9005/business/field/pbfLayer/field/1/{z}/{x}/{y}"],
        tiles: [vectorTileUrl],
    });
    map.addLayer({
        id: layerName,
        type: "fill",
        source: "source-" + layerName,
        "source-layer": "default",
        "paint": paint,
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
    });
    map.fitBounds(map.getBounds());
    return map.getLayer(layerName);
}


/**
 * 添加标注
 * @param feature 要素
 * @param map 地图
 * @returns 
 */
export function drawAnno(feature: maplibregl.MapGeoJSONFeature, map: maplibregl.Map): maplibregl.Marker {
    let pos = center(feature.toJSON()).geometry as Point;

    let htmlEle = new HTMLElement();
    htmlEle.innerHTML = pos.coordinates[0] + "," + pos.coordinates[1];
    var marker = new Marker({ element: htmlEle })
        .setLngLat(new LngLat(pos.coordinates[0], pos.coordinates[1]))
        .addTo(map);
    return marker;
}

/**
 * 标记当前所在位置
 * @param map 
 */
export function markCurrentPos(map: maplibregl.Map) {
    navigator.geolocation.getCurrentPosition(e => {

        let htmlEle = document.createElement('button');
        htmlEle.innerHTML = e.coords.longitude + "," + e.coords.latitude;
        var marker = new Marker({ element: htmlEle })
            .setLngLat(new LngLat(e.coords.longitude, e.coords.latitude))
            .addTo(map);
        // var marker = new Marker({ color: "#ff0000" })
        //     // 设置标记位置
        //     .setLngLat(new LngLat(e.coords.longitude, e.coords.latitude))
        //     // 添加弹出框
        //     .setPopup(new Popup().setHTML(e.coords.longitude + "_" + e.coords.latitude + "_" + e.coords.altitude))
        //     .addTo(map);
        // // console.log("当前定位显示了吗？？？");
    }, () => {
        alert("定位失败！");
    });
}

/**
 * 添加瓦片底图
 * @param map 
 * @param url 
 */
export async function addTileLayer(map: maplibregl.Map, layerName: string, url: string) {
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