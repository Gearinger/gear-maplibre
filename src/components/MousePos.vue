<script setup lang="ts">
import { Map } from "maplibre-gl";
import { reactive, onMounted, watch, ref } from "vue";

interface Prop {
  map: Map;
}
const prop = defineProps<Prop>();
const pos = reactive({
  x: "0",
  y: "0",
});

const once = ref(true);
watch(
  () => prop.map,
  (newValue, oldValue) => {
    if (once.value) {      
      prop.map.on("mousemove", function (e) {
        pos.x = e.lngLat.lng.toFixed(7);
        pos.y = e.lngLat.lat.toFixed(7);
      });
      once.value = false;
    }
  }
);
</script>

<template>
  <div class="mouse-pos">
    <span>{{ pos.x }}, {{ pos.y }}</span>
  </div>
</template>

<style lang="less">
@import "../assets/main.less";

.mouse-pos {
  position: absolute;
  right: 50px;
  bottom: 20px;
  color: @global_front_color;
}
</style>
