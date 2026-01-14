import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import GeojsonMap from './views/GeojsonMap.vue'
import Home from './views/Home.vue'
import Supabase from './views/Supabase.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/geojson', component: GeojsonMap },
    { path: '/supabase', component: Supabase },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})