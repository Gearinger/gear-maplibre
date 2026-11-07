import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/home', redirect: '/' },
    { path: '/geojson', redirect: '/' },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
