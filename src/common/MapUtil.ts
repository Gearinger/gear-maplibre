import { center } from '@turf/turf'
import { Map, Marker, LngLat } from "maplibre-gl"
import type { MapGeoJSONFeature } from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css";
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';



export var map: Map;

export function destroyMap() {
    map?.remove();
    map = undefined as unknown as Map;
}

/**
 * 初始化地图
 */
export function initMap(containerId: string): Map {
    // 初始化地图
    map = new Map({
        container: containerId, // container id
        style: import.meta.env.VITE_MAP_STYLE_URL || "https://demotiles.maplibre.org/style.json",
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
export function drawAnno(feature: MapGeoJSONFeature): Marker {
    let pos = center(feature.toJSON()).geometry as GeoJSON.Point;

    let htmlEle = document.createElement("div");
    htmlEle.textContent = pos.coordinates[0] + "," + pos.coordinates[1];
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
        htmlEle.textContent = e.coords.longitude + "," + e.coords.latitude;
        var marker = new Marker({ element: htmlEle })
            .setLngLat(new LngLat(e.coords.longitude, e.coords.latitude))
            .addTo(map);
        // var marker = new Marker({ color: "#ff0000" })
        //     // 设置标记位置
        //     .setLngLat(new LngLat(e.coords.longitude, e.coords.latitude))
        //     // 添加弹出框
        //     .setPopup(new Popup().setHTML(e.coords.longitude + "_" + e.coords.latitude + "_" + e.coords.altitude))
        //     .addTo(map);
    }, () => {
        alert("定位失败！");
    });
}


