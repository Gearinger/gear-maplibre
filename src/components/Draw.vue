<script setup lang="ts">
import type { Map, IControl } from 'maplibre-gl';
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
    (currentMap) => {
        if (!once.value || !currentMap) return;
        const draw = new MapboxDraw() as unknown as IControl;
        currentMap.addControl(draw, 'top-right');
        once.value = false;
    },
    { immediate: true }
);
</script>

<template>
    <div>

    </div>
</template>
