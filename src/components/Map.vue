<template>
  <div id="map"></div>
  <MousePos></MousePos>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import MousePos from "./MousePos.vue";
import { destroyMap, initMap } from "../common/MapUtil";
import type { Map, MapMouseEvent } from "maplibre-gl";
import { DrawHandlers, MapMouseMoveHandlers, type DrawEvent } from "../common/MapEventUtil";
import { addDrawControl, addGeocoderController, addNavigationControl } from "../common/MapController";

let map: Map | undefined;
type DrawEventMap = {
  on(type: "draw.create", listener: (event: DrawEvent) => void): unknown;
  off(type: "draw.create", listener: (event: DrawEvent) => void): unknown;
};

const onMouseMove = (event: MapMouseEvent) => {
  MapMouseMoveHandlers.forEach((handler) => handler(event));
};

const onDrawCreate = (event: DrawEvent) => {
  DrawHandlers.forEach((handler) => handler(event));
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
  (map as unknown as DrawEventMap).on("draw.create", onDrawCreate);
});

onBeforeUnmount(() => {
  if (!map) return;
  map.off("mousemove", onMouseMove);
  (map as unknown as DrawEventMap).off("draw.create", onDrawCreate);
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
