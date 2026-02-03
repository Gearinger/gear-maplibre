<template>
    <Map class="map"></Map>
    <TopMenu :name="123" />
    <LayerManager></LayerManager>
    <MousePos></MousePos>
    <!-- <FeatureProp></FeatureProp> -->
    <!--<Draw :map="map"></Draw>-->
    <!-- <TileGrid></TileGrid> -->
</template>

<script setup lang="ts">
import Map from "../components/Map.vue";
import TopMenu from "../components/TopMenu.vue";
import LayerManager from "../components/LayerManager.vue";
import MousePos from "../components/MousePos.vue";
import FeatureProp from "../components/FeatureProp.vue";
// import Draw from "../components/Draw.vue";
import TileGrid from "../components/TileGrid.vue";

</script>

<style scoped>
.map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
