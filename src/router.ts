import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/home', component: () => import('./views/Home.vue') },
    { path: '/geojson', component: () => import('./views/GeojsonMap.vue') },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
