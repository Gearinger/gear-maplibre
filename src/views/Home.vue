<template>
    <Map class="map"></Map>
    <TopMenu :name="123" />
    <LayerManager></LayerManager>
</template>

<script setup lang="ts">
import Map from "../components/Map.vue";
import TopMenu from "../components/TopMenu.vue";
import LayerManager from "../components/LayerManager.vue";

</script>

<style scoped>
.map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
