<template>
  <div id="map"></div>
  <!-- <TopMenu :name="123" /> -->
  <!-- <LayerManager></LayerManager> -->
  <MousePos></MousePos>
  <!--<FeatureProp></FeatureProp>-->

  <!--<Draw :map="map"></Draw>-->
  <!-- <tile-grid :map="map"></tile-grid> -->
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from "vue";
import "../common/MapUtil";

import LayerManager from "./LayerManager.vue";
import MousePos from "./MousePos.vue";
import FeatureProp from "./FeatureProp.vue";
import TileGrid from "./TileGrid.vue";
import SingleTileLoad from "./SingleTileLoad.vue";
import TopMenu from "./TopMenu.vue";
import { initMap } from "../common/MapUtil";
import { Map } from "maplibre-gl";
import { DrawHandlers, MapMouseMoveHandlers } from "../common/MapEventUtil";
import { addDrawControl, addGeocoderController, addNavigationControl } from "../common/MapController";


// 挂载时初始化地图
onMounted(() => {
  var map = initMap("map");


  // 地图加载时
  map.on("load", async () => {
    addGeocoderController();
    addNavigationControl();
    // addDrawControl();

    // 添加鼠标位置监听

  });

  // 点击地图时，获取点击位置的要素
  map.on("click", (e) => {
    let feas = map.queryRenderedFeatures(e.point, {});
  });

  map.on("mousemove", (e) => {
    MapMouseMoveHandlers.forEach((handler) => {
      handler(e);
    });
  });

  map.on("draw.create", e => {
    DrawHandlers.forEach(handler => {
      handler(e);
    });
  })
});

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
