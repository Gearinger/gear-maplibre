import { center, flattenReduce, Point } from '@turf/turf'
import { Map, Marker, LngLat, Popup, NavigationControl, StyleSpecification } from "maplibre-gl"
import { geojson } from "flatgeobuf";
import MaplibreGeocoder, { MaplibreGeocoderApi, MaplibreGeocoderFeatureResults } from '@maplibre/maplibre-gl-geocoder';
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css";
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';



export var map: Map;

/**
 * 初始化地图
 */
export function initMap(containerId: string): Map {
    // 创建空白图层样式，用于地图初始化
    const blankStyle: StyleSpecification = {
        version: 8,
        name: "BlankMap",
        sources: {},
        glyphs: "./data/glyphs/{fontstack}/{range}.pbf",
        layers: [
            {
                id: "background",
                type: "background",
                paint: {
                    // 'background-color': '#08294A' /* 背景颜色 */
                    "background-color": "rgba(255, 255, 255, 0)" /* 背景颜色-透明 */,
                },
            },
        ],
    };
    // 初始化地图
    map = new Map({
        container: containerId, // container id
        style: "https://demotiles.maplibre.org/style.json", // style URL
        // style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
        // style: blankStyle,
        center: [103, 38], // starting position [lng, lat]
        zoom: 3, // starting zoom
    });
    return map;
}


/**
 * 添加标注
 * @param feature 要素
 * @param map 地图
 * @returns 
 */
export function drawAnno(feature: maplibregl.MapGeoJSONFeature): maplibregl.Marker {
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
export function markCurrentPos() {
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


