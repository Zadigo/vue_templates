import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '',
        name: 'templates_view',
        component: () => import('../views/TemplatesView.vue')
    },
    {
        path: '/youtube',
        name: 'youtube_view',
        component: () => import('../views/YoutubeView.vue')
    },
    {
        path: '/lequipe',
        name: 'lequipe_view',
        component: () => import('../views/LequipeView.vue')
    },
    {
        path: '/spotify',
        name: 'spotify_view',
        component: () => import('../views/SpotifyView.vue')
    },
    {
        path: '/test',
        name: 'test_view',
        component: () => import('../views/TestView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
