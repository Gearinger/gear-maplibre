<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from "vue";
import { addMouseMoveHandler } from "../common/MapEventUtil";

const pos = reactive({
  x: "0",
  y: "0",
});


let unsubscribe: (() => void) | undefined;

onMounted(() => {
  unsubscribe = addMouseMoveHandler((event) => {
    pos.x = event.lngLat.lng.toFixed(7);
    pos.y = event.lngLat.lat.toFixed(7);
  });
});

onBeforeUnmount(() => unsubscribe?.());
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
