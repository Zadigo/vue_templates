<docs>
<!-- <div class="mask-gradient"> -->
      <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);"></div> -->
      <!-- <div class="text-white m-5">
        <h1 class="display-5 fw-bold">
          Welcome page
        </h1>

        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            A simple VueJS projects for template demonstrations
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <base-dropdown-button-vue :items="drops" :button-name="'Dropown button'" @dropdown-click="action" />
          </div>
        </div>
      </div> -->
</docs>

<template>
  <section class="hero">
    <!-- Navbar -->
    <!-- style="height: 100px;" -->
    <base-navbar :fixed-top="true" nav-brand="Vue Templates">    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <base-mega-dropdown :items="megamenu" />
        <base-side-dropdown link-name="Templates" />
        <nav-item :to="{ name: 'home_view' }" link-name="Google" />
      </ul>

      <div class="d-flex align-items-center">
        <router-link :to="{ name: 'login_view' }" class="btn btn-link px-3 me-2">Login</router-link>
        <router-link :to="{ name: 'signup_view' }" class="btn btn-primary me-3">Sign up for free</router-link>
      </div>
    </base-navbar>

    <!-- Intro -->
    <div :style="`background-image: url(${require(`@/assets/hero/hero${heroSettings.image}.jpg`)});`" class="intro intro-100 bg-image mb-4 shadow">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <!-- Center -->
        <div v-if="heroSettings.type === 'center'" class="d-flex justify-content-center align-items-center h-100 text-center">
          <div class="text-white">
            <h1 class="mb-3 display-3 fw-bold">Vue Template</h1>
            <h4 class="mb-3 fw-light">A simple VueJS projects for template demonstrations</h4>
            <router-link :to="{ name: 'buttons_view' }" class="btn btn-primary btn-lg">
              Bootstrap templates
            </router-link>
          </div>
        </div>

        <!-- Left -->
        <div v-else-if="heroSettings.type === 'left'" class="d-flex justify-content-start align-items-center h-100 text-light text-right">
          <div class="col-6 mx-5">
            <h1 class="mb-3 display-4 fw-bold">
              Education costs money. But then so does ignorance
            </h1>
            <p class="mb-3 fw-light fs-5">
              Before cell phones became so popular, watches were much more 
              attractive to carry around because they are the most convenient way 
              to keep track of the time.
            </p>
            <router-link :to="{ name: 'buttons_view' }" class="btn btn-primary btn-lg mt-3">
              Bootstrap templates
            </router-link>
          </div>
        </div>

        <!-- Form -->
        <div v-else-if="heroSettings.type === 'form'" class="d-flex justify-content-left gap-5 mx-5 h-100 align-items-center">
          <div class="col-3 text-light">
            <p class="text-muted fw-bold text-uppercase mb-2">Get started within 2 minutes</p>
            <h1 class="fs-3">Learn How To Bake In 5 Easy Steps</h1>
            <p class="mt-4">In order to discuss the general function of the logo, we must firstly identify and define the environment.</p>
          </div>
          <div class="col-4">
            <base-card class="p-4 bg-dark">
              <template #body>
                <form @submit.prevent>
                  <base-input id="name" class="p-3" />
                  <base-input id="surname" class="my-3 p-3" />
                  <base-input id="email" class="p-3" />
                  <button type="button" class="btn btn-primary btn-block mt-3 p-3">
                    Download E-book now
                  </button>
                  <p class="text-muted mt-4">
                    * We don't share your personal info with anyone. 
                    Check out our <router-link :to="{ name: 'home_view' }">Privacy Policy.</router-link>
                  </p>
                </form>
              </template>
            </base-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings -->
    <div class="settings">
      <base-input id="image" v-model.number="heroSettings.image" />
      <base-input id="image" v-model="heroSettings.type" class="mt-3" />
    </div>

    <!-- Footer -->
    <base-footer class="mt-3" />
  </section>
</template>

<script>
import { useDarkMode } from '../composables/darkmode'
import { useDark, useToggle } from '@vueuse/core'
import { provide } from 'vue'

import megamenu from '../data/megamenu.json'
import navitems from '../data/navitems.json'

// import BaseDropdownButtonVue from '@/layouts/bootstrap/BaseDropdownButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseMegaDropdown from '../layouts/bootstrap/nav/BaseMegaDropdown.vue'
import BaseSideDropdown from '../layouts/bootstrap/nav/BaseSideDropdown.vue'
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseNavbar from '@/layouts/bootstrap/nav/BaseNavbar.vue'
import NavItem from '@/layouts/bootstrap/nav/NavItem.vue'

export default {
  name: 'HomeView',
  components: {
    // BaseDropdownButtonVue,
    BaseCard,
    BaseInput,
    BaseFooter,
    BaseMegaDropdown,
    BaseSideDropdown,
    BaseNavbar,
    NavItem
  },
  setup () {
    var dark = useDark()
    var toggleDark = useToggle(dark)

    var { darkMode, toggleDarkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      d: dark,
      toggleDark,
      darkMode,
      toggleDarkMode,
      navitems,
      megamenu
    }
  },
  data () {
    return {
      heroSettings: {
        image: 12,
        type: 'left'
      },
      drops: [
        {
          name: 'First',
          to: null
        },
        {
          name: 'second',
          to: null
        },
        {
          name: 'Header',
          header: true
        },
        {
          name: 'Third'
        },
        {
          divider: true
        },
        {
          name: 'Fourth'
        }
      ]
    }
  }
}
</script>

<style>
@import url('../assets/style.css');

.hero {
  position: relative;
}

.settings {
  position: fixed;
  top: 30%;
  right: 0;
  border-top-left-radius: .5em;
  border-bottom-left-radius: .5em;
  background-color: #fff;
  height: auto;
  /* min-height: 100px; */
  width: 300px;
  z-index: 1055;
  padding: 1rem;
}
</style>
