<!--
 * @Author: Gearinger 50980099+Gearinger@users.noreply.github.com
 * @Date: 2022-06-21 15:38:17
 * @LastEditors: Gearinger 50980099+Gearinger@users.noreply.github.com
 * @LastEditTime: 2022-06-21 17:07:31
 * @FilePath: \gear-maplibre\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map.vue";

</script>

<template>
  <Map name="maplibre-map"></Map>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
