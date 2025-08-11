<script setup lang="ts">
import { Map } from "maplibre-gl";
import { reactive, onMounted, watch, ref } from "vue";
import { MapMouseMoveHandlers } from "../common/MapEventUtil";

const pos = reactive({
  x: "0",
  y: "0",
});


MapMouseMoveHandlers.push((e: any) => {
  pos.x = e.lngLat.lng.toFixed(7);
  pos.y = e.lngLat.lat.toFixed(7);
});

</script>

<template>
  <div class="mouse-pos">
    <span>{{ pos.x }}, {{ pos.y }}</span>
  </div>
</template>

<style lang="less">
@import "../assets/main.less";

.mouse-pos {
  z-index: 999;
  position: absolute;
  right: 50px;
  bottom: 20px;
  color: white;
  text-shadow: 1px 1px 3px black;
}
</style>
