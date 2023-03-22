<template lang="">
  <div id="map"></div>
  <!-- <SideMenu :map="map"/> -->
  <LayerManager :map="map"></LayerManager>
  <MousePos :map="map"></MousePos>
  <FeatureProp :map="map" :visiable="true"></FeatureProp>
  <Draw :map="map"></Draw>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import maplibregl from "maplibre-gl"
import {
  Feature,
  Map,
  StyleSpecification,
  NavigationControl,
  GeoJSONFeature,
  MapLayerEventType,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
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
import MousePos from "./MousePos.vue";
import FeatureProp from "./FeatureProp.vue";
import Draw from "./Draw.vue";
import { IFeature } from "flatgeobuf";

const map = ref<Map>();

var geocoder_api = {
  forwardGeocode: async (config) => {
    const features: any = [];
    try {
      let request =
        'https://nominatim.openstreetmap.org/search?q=' +
        config.query +
        '&format=geojson&polygon_geojson=1&addressdetails=1';
      const response = await fetch(request);
      const geojson = await response.json();
      for (let feature of geojson.features) {
        let center = [
          feature.bbox[0] +
          (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] +
          (feature.bbox[3] - feature.bbox[1]) / 2
        ];
        let point = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: center
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ['place'],
          center: center
        };
        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
    }

    return {
      features: features
    };
  }
};


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
    let feas = (map.value as Map).queryRenderedFeatures(e.point, {});
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

  map.addControl(
    new MaplibreGeocoder(geocoder_api, {
      maplibregl: maplibregl
    })
  );

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
