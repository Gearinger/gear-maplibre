<script setup lang="ts">
import { Map, MapMouseEvent } from "maplibre-gl";
import { addGeoJson } from "../common/MaplibreUtil";
import { onMounted, onActivated } from "vue";

interface Props {
    map: Map,
    name: String
}

const props = defineProps<Props>();

async function importGeoJson() {
    console.log(props.map);
    console.log(props.name);


    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        let txt = reader.result as string;
        let json = JSON.parse(txt);
        addGeoJson(props.map as Map, json);
    });
    reader.readAsText(file);
}
</script>

<template>
    <div class="map-menu">
        <a-radio-group size="small" type="text">
            <a-radio-button value="" @click="importGeoJson">GeoJSON</a-radio-button>
            <a-radio-button value="">ShpFile</a-radio-button>
            <a-radio-button value="">KML</a-radio-button>
        </a-radio-group>
    </div>
</template>

<style lang="less">
.map-menu {
    position: absolute;
    margin: 20px;
    width: 500px;

    * {
        position: inherit;
        z-index: 9;
    }
}
</style>
