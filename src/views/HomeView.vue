<docs></docs>

<template>
  <section>
    <!-- Navbar -->
    <!-- style="height: 100px;" -->
    <base-navbar :fixed-top="true" nav-brand="Vue Templates">
      <base-mega-dropdown :items="megamenu" />
      <base-side-dropdown />
    </base-navbar>

    <!-- Intro -->
    <div :style="`background-image: url(${require('@/assets/hero1.jpg')})`" class="intro intro-100 bg-image mb-4 shadow text-center">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 display-3 fw-bold">Vue Template</h1>
            <h4 class="mb-3 fw-light">A simple VueJS projects for template demonstrations</h4>
            <router-link :to="{ name: 'cards_view' }" class="btn btn-primary btn-lg">
              Bootstrap templates
            </router-link>
            <!-- <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> -->
            <!-- <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <base-dropdown-button-vue :items="drops" :show-active="false" button-name="Dropown button" animation="scale" @dropdown-click="action" />
              <router-link :to="{ name: 'cards_view' }" class="btn btn-primary">
                Bootstrap templates
              </router-link>
            </div> -->
          </div>
        </div>
      </div>

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
import BaseMegaDropdown from '../layouts/bootstrap/nav/BaseMegaDropdown.vue'
import BaseSideDropdown from '../layouts/bootstrap/nav/BaseSideDropdown.vue'
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseNavbar from '@/layouts/bootstrap/nav/BaseNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    // BaseDropdownButtonVue,
    BaseFooter,
    BaseMegaDropdown,
    BaseSideDropdown,
    BaseNavbar
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
</style>
