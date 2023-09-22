import { createApp } from 'vue'
import { loadFonts } from './plugins'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createVueLocalStorage, createVueSession } from './plugins/vue-storages'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/fontawesome'
import './assets/style.scss'
import './layouts/bootstrap/css/style.css'

import router from './router'


loadFonts()

const app = createApp(App)

const pinia = createPinia()
const session = createVueSession()
const localstorage = createVueLocalStorage()

app.use(pinia)
app.use(router)
app.use(session)
app.use(localstorage)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
