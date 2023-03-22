<script setup lang="ts">
import { Map, IControl } from 'maplibre-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { ref, watch } from 'vue';

interface Prop {
    map: Map
}

let props = defineProps<Prop>()



const once = ref(true);
watch(
    () => props.map,
    (oldValue, newValue) => {
        if (once.value) {
            let Draw = new MapboxDraw();
            props.map.addControl(Draw, 'top-right');
            once.value = false;
        }
    }
);
</script>

<template>
    <div>

    </div>
</template>