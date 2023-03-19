<script setup lang="ts">
import { Map, MapMouseEvent } from "maplibre-gl";
import { addGeoJson } from "../common/MaplibreUtil";
import { onMounted, onActivated } from "vue";
import { message } from "ant-design-vue";

interface Props {
  map: Map;
  name: String;
}

const props = defineProps<Props>();

async function importGeoJson() {
  console.log(props.map);
  console.log(props.name);

  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();

  const reader = new FileReader();
  reader.addEventListener("load", async () => {
    let txt = reader.result as string;
    let json = JSON.parse(txt);
    await addGeoJson(props.map as Map, json);
  });
  reader.readAsText(file);
}

async function importShpFile() {
  message.warn("未实现该功能！");
}

async function importKMLFile() {
  message.warn("未实现该功能！");
}
</script>

<template>
  <div class="map-menu">
    <a-radio-group size="small" type="text">
      <a-radio-button value="" @click="importGeoJson">GeoJSON</a-radio-button>
      <a-radio-button value="" @click="importShpFile">ShpFile</a-radio-button>
      <a-radio-button value="" @click="importKMLFile">KML</a-radio-button>
    </a-radio-group>

    <h3>LayerManager</h3>
  </div>
</template>

<style lang="less">
.map-menu {
  position: absolute;
  margin: 20px;
  width: 500px;

  * {
    z-index: 9;
  }
}
</style>
