<script setup lang="ts">
import { ref } from "vue";
import { disableTileGrid, enableTileGrid } from "../common/MapTileGridUtil";

var tileGridable = ref(false);

function switchTileGrid() {
  if (tileGridable.value) {
    disableTileGrid();
  } else {
    enableTileGrid();
  }
  tileGridable.value = !tileGridable.value;
}

</script>

<template>
  <div class="map-menu">
    <button disabled title="请使用左侧图层面板导入">导入</button>
    <button disabled title="导出功能尚未实现">导出</button>
    <button @click="switchTileGrid()">TileGrid</button>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/main.less";

.map-menu {
  position: absolute;
  left: 320px;
  margin: 20px;
  padding: 0px;
  text-shadow: 1px 1px 5px black;
  background-color: transparent;
  border-radius: 0.2rem;
  display: flex;

  * {
    border: transparent;
    background-color: @global_bg_color;
    color: @global_front_color;
    border-radius: 0.2rem;
    font-size: 12px;
    margin: 0px 10px;
    transition: all 0.3s ease;
  }
}

button {
  padding: 2px 8px;

  cursor: pointer;

  &:hover {
    background-color: @global_front_color;
    color: @global_bg_color;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
}
</style>
