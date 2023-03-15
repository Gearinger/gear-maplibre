import { createApp } from 'vue'
import App from './App.vue'
import maplibregl from "maplibre-gl"

import Ant from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

let app = createApp(App);
app.use(Ant);
app.mount('#app')
app.config.globalProperties.$maplibregl = ()=>maplibregl
