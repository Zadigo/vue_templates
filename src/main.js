import { createApp } from 'vue'
import { loadFonts } from './plugins'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createVueLocalStorage, createVueSession } from './plugins/vue-storages'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'

import 'vuetify/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/fontawesome'
import './assets/style.scss'
import './layouts/bootstrap/css/style.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import router from './router'

loadFonts()

const app = createApp(App)

const pinia = createPinia()
const session = createVueSession()
const localstorage = createVueLocalStorage()
const vuetify = createVuetify({ 
  components, 
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})


app.use(pinia)
app.use(router)
app.use(session)
app.use(localstorage)
app.use(vuetify)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
