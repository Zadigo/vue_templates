import { scrollToTop, loadView } from '@/composables/utils'
import { createRouter, createWebHistory } from 'vue-router'

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
        path: '/game',
        name: 'game_view',
        component: loadView('GameView')
    },
    {
        path: '/trello',
        name: 'trello_view',
        component: loadView('TrelloView')
    },
    {
        path: '/test',
        name: 'test_view',
        component: () => import('../views/TestView.vue')
    },
    {
        path: '/parallax',
        name: 'parallax_view',
        component: () => import('../views/ParallaxWebsite.vue')
    },
    {
        path: '/graph',
        name: 'graph_view',
        component: () => import('../views/GraphView.vue')
    },
    {
        path: '/cover',
        name: 'cover_page_view',
        component: loadView('CoverPageView')
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: scrollToTop,
    routes: routes
})

export default router
