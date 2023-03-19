<template lang="">
  <div id="map"></div>
  <!-- <SideMenu :map="map"/> -->
  <LayerManager :map="map"></LayerManager>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import {
  Feature,
  Map,
  StyleSpecification,
  NavigationControl,
  GeoJSONFeature,
  MapLayerEventType,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import {
  drawAnno,
  markCurrentPos,
  addFlatGeoBuf,
  addGeoJson,
  addTileLayer,
} from "../common/MaplibreUtil";
import { tdt_raster_url } from "../common/Config";

import SideMenu from "./SideMenu.vue";
import LayerManager from "./LayerManager.vue";

const map = ref<Map>();

// 挂载时初始化地图
onMounted(() => {
  map.value = initMap();
  addControllers(map.value);

  // 地图加载时
  map.value.on("load", async () => {
    // addTileLayer(map.value as Map, "Raster", tdt_raster_url);
  });

  // 点击地图时，获取点击位置的要素
  map.value.on("click", (e) => {
    console.log(e);
    let feas = (map.value as Map).queryRenderedFeatures(e.point, {});
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
}
</script>

<style>
#map {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
