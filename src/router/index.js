import { scrollToTop, loadView, loadLayout } from '@/composables/utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: scrollToTop,
    routes: [
        {
            path: '',
            name: 'home_view',
            component: loadView('HomeView')
        },
        {
            path: '/excel',
            name: 'excel_view',
            component: loadView('ExcelView')
        },
        {
            path: '/test',
            name: 'test_view',
            component: loadView('TestView')
        },
        {
            path: '/contact',
            name: 'contact_view',
            component: loadView('ContactView')
        },
        {
            path: '/authentication',
            component: loadLayout('BaseAuthenticationLayout'),
            children: [
                {
                    path: 'login',
                    name: 'login_view',
                    component: loadView('authentication/LoginView')
                },
                {
                    path: 'signup',
                    name: 'signup_view',
                    component: loadView('authentication/SignupView')
                },
                {
                    path: 'forgot-password',
                    name: 'forgot_password_view',
                    component: loadView('authentication/ForgotPasswordView')
                }
            ]
        },
        {
            path: '/bootstrap',
            component: loadLayout('DashboardLayout'),
            children: [
                {
                    path: 'buttons',
                    name: 'buttons_view',
                    component: loadView('bootstrap_templates/ButtonsView'),
                    meta: {
                        adminLink: true,
                        title: 'Buttons',
                        icon: 'table'
                    }
                },
                {
                    path: 'cards',
                    name: 'cards_view',
                    component: loadView('bootstrap_templates/CardsView'),
                    meta: {
                        adminLink: true,
                        title: 'Cards',
                        icon: 'table'
                    }
                },
                {
                    path: 'table',
                    name: 'table_view',
                    component: loadView('bootstrap_templates/TableView'),
                    meta: {
                        adminLink: true,
                        title: 'Table',
                        icon: 'table'
                    }
                },
                {
                    path: 'timeline',
                    name: 'timeline_view',
                    component: loadView('bootstrap_templates/TimelineView'),
                    meta: {
                        adminLink: true,
                        title: 'Timeline',
                        icon: 'table'
                    }
                },
                {
                    path: 'modals',
                    name: 'modals_view',
                    component: loadView('bootstrap_templates/ModalsView'),
                    meta: {
                        adminLink: true,
                        title: 'Modals',
                        icon: 'list'
                    }
                },
                {
                    path: 'form',
                    name: 'form_view',
                    component: loadView('bootstrap_templates/FormView'),
                    meta: {
                        adminLink: true,
                        title: 'Form',
                        icon: 'list'
                    }
                },
                {
                    path: 'list-group',
                    name: 'list_group_view',
                    component: loadView('bootstrap_templates/ListGroupView'),
                    meta: {
                        adminLink: true,
                        title: 'List Group',
                        icon: 'list'
                    }
                },
                {
                    path: 'collapse',
                    name: 'collapse_view',
                    component: loadView('bootstrap_templates/CollapseView'),
                    meta: {
                        adminLink: true,
                        title: 'Collapse',
                        icon: 'list'
                    }
                },
                {
                    path: 'video',
                    name: 'video_view',
                    component: loadView('bootstrap_templates/VideoView'),
                    meta: {
                        adminLink: true,
                        title: 'Video player',
                        icon: 'list'
                    }
                },
                {
                    path: 'pagination',
                    name: 'pagination_view',
                    component: loadView('bootstrap_templates/PaginationView'),
                    meta: {
                        adminLink: true,
                        title: 'Pagination',
                        icon: 'list'
                    }
                },
                {
                    path: 'carousel',
                    name: 'carousel_view',
                    component: loadView('bootstrap_templates/CarouselView'),
                    meta: {
                        adminLink: true,
                        title: 'Carousel',
                        icon: 'image'
                    }
                }
            ]
        },
        {
            path: '/ecommerce',
            component: loadLayout('EcommerceLayout'),
            children: [
                {
                    path: '',
                    name: 'products_view',
                    component: loadView('ecommerce/ProductsView')
                },
                {
                    path: 'products/:id(\\d+)',
                    name: 'product_view',
                    // component: loadView('ecommerce/ProductView')
                    component: loadView('ecommerce/ProductView2')
                },
                {
                    path: 'checkout',
                    name: 'checkout_view',
                    component: loadView('ecommerce/CheckoutView')
                },
                {
                    path: 'payment',
                    name: 'payment_view',
                    component: loadView('ecommerce/PaymentView')
                }
            ]
        }
        // {
        //     path: '',
        //     name: 'templates_view',
        //     component: loadView('TemplatesView')
        // },
        // {
        //     path: '/youtube',
        //     name: 'youtube_view',
        //     component: loadView('YoutubeView')
        // },
        // {
        //     path: '/lequipe',
        //     name: 'lequipe_view',
        //     component: loadView('LequipeView')
        // },
        // {
        //     path: '/spotify',
        //     name: 'spotify_view',
        //     component: loadView('SpotifyView')
        // },
        // {
        //     path: '/game',
        //     name: 'game_view',
        //     component: loadView('GameView')
        // },
        // {
        //     path: '/trello',
        //     name: 'trello_view',
        //     component: loadView('TrelloView')
        // },
        // {
        //     path: '/test',
        //     name: 'test_view',
        //     component: loadView('TestView.vue')
        // },
        // {
        //     path: '/parallax',
        //     name: 'parallax_view',
        //     component: loadView('ParallaxWebsite')
        // },
        // {
        //     path: '/graph',
        //     name: 'graph_view',
        //     component: loadView('GraphView')
        // },
        // {
        //     path: '/cover',
        //     name: 'cover_page_view',
        //     component: loadView('CoverPageView')
        // }
    ]
})

export default router
