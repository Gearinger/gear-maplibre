import { createApp } from 'vue'
import App from './App.vue'
import maplibregl from "maplibre-gl"

import Ant from "ant-design-vue";
import { router } from './router';
// import "ant-design-vue/dist/antd.css";

let app = createApp(App);
app.use(Ant);
app.use(router);
app.mount('#app')
app.config.globalProperties.$maplibregl = ()=>maplibregl
