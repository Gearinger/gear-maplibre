<template>
  <div id="map"></div>
  <MousePos></MousePos>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import MousePos from "./MousePos.vue";
import { destroyMap, initMap } from "../common/MapUtil";
import { disposeDeckOverlay } from "../common/DeckOverlayService";
import type { Map, MapMouseEvent } from "maplibre-gl";
import { MapMouseMoveHandlers } from "../common/MapEventUtil";
import { addGeocoderController, addNavigationControl } from "../common/MapController";

let map: Map | undefined;

const onMouseMove = (event: MapMouseEvent) => {
  MapMouseMoveHandlers.forEach((handler) => handler(event));
};

// 挂载时初始化地图
onMounted(() => {
  map = initMap("map");

  const addControls = () => {
    addGeocoderController();
    addNavigationControl();
  };

  if (map.loaded()) {
    addControls();
  } else {
    map.once("load", addControls);
  }

  map.on("mousemove", onMouseMove);
});

onBeforeUnmount(() => {
  if (!map) return;
  map.off("mousemove", onMouseMove);
  disposeDeckOverlay(map);
  destroyMap();
  map = undefined;
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
