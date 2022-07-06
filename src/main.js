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
import { createLocalStorage, createVueSession } from './plugins/vue-storages'

loadFonts()

const app = createApp(App)
const session = createVueSession({
  sessionKey: 'past-passions',
  initial: {
    'user': 'Gooogles'
  }
})
const localstorage = createLocalStorage({

})

app.use(router)
app.use(session)
app.use(localstorage)
app.component('nav-item-vue', NavItemVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
