import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/fontawesome'
import router from './router'

import NavItemVue from './components/nav/NavItem.vue'
import { loadFonts } from './plugins'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createVueSession } from './plugins/vue-storages'

loadFonts()

const app = createApp(App)
const session = createVueSession({
  permanent: false
})

app.use(router)
app.use(session)
app.component('nav-item-vue', NavItemVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
