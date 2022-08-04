import { createApp } from 'vue'
import App from './App.vue'
import maplibregl from "maplibre-gl"

let app = createApp(App);
app.mount('#app')
app.config.globalProperties.$maplibregl = ()=>maplibregl
console.log(app);
