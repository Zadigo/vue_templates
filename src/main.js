import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

import NavItemVue from './components/nav/NavItem.vue'
import { loadFonts } from './plugins'

loadFonts()

const app = createApp(App)
app.use(router)
app.component('nav-item-vue', NavItemVue)
app.mount('#app')
