<template lang="">
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Feature, Map, StyleSpecification, NavigationControl, GeoJSONFeature, MapLayerEventType } from "maplibre-gl";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MapboxDraw from "mapbox-gl-draw";
import "mapbox-gl-draw/dist/mapbox-gl-draw.css";

import { drawAnno, markCurrentPos, addFlatGeoBuf, addTestGeoJson } from "../common/MaplibreUtil"
import * as mapUtil from "map-gl-utils"

// 挂载时初始化地图
onMounted(() => {
  const map = initMap();
  addControllers(map);

  // 地图加载时，添加 geojson 数据
  map.on("load", async () => {
    addTestGeoJson(map);
    // addPbfLayer(map);
    // const response = await fetch("./data/fgb.fgb").then((res) =>
    //   addFlatGeoBuf(res.body, map)
    // );

    markCurrentPos(map);

    console.log(map);

    // map.setLayoutProperty('testGeoJson', 'text-color', "#ff0000");
  });

  // 点击地图时，获取点击位置的要素
  map.on("click", (e) => {
    console.log(e);
    let feas = map.queryRenderedFeatures(e.point, {});
    console.log(feas);
  });

});

/**
 * 初始化地图
 */
function initMap(): Map {
  // 创建空白图层样式，用于地图初始化
  const blankStyle: StyleSpecification = {
    version: 8,
    name: "BlankMap",
    sources: {},
    glyphs:"./data/glyphs/{fontstack}/{range}.pbf",
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
  var map = new Map({
    container: "map", // container id
    // style: "https://demotiles.maplibre.org/style.json", // style URL
    // style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    style: blankStyle,
    center: [113.46, 22.88], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  return map;
}

/**
 * 添加控件
 * @param map 
 */
function addControllers(map: Map) {
  // 添加常用地图控件
  map.addControl(new NavigationControl({}));
  // 添加地图绘制控件
  const draw = new MapboxDraw();
  map.addControl(draw, "top-left");
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
