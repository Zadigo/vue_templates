<template>
  <section class="hero">
    <!-- Navbar -->
    <base-navbar :fixed-top="true" nav-brand="Vue Templates">
      <navbar-nav>
        <base-mega-dropdown :items="megamenu" />
        <base-side-dropdown link-name="Templates" />
        <nav-item href="#hero-features" link-name="Hero templates" />
        <nav-item :to="{ name: 'contact_view' }" link-name="Contact" />
      </navbar-nav>
      
      <div class="d-flex align-items-center">
        <router-link :to="{ name: 'login_view' }" class="btn btn-link px-3 me-2">Login</router-link>
        <router-link :to="{ name: 'signup_view' }" class="btn btn-primary me-3 btn-rounded">Signup</router-link>
      </div>
    </base-navbar>

    <!-- Header -->
    <slot name="header"></slot>

    <!-- Body -->
    <slot></slot>

    <!-- Footer -->
    <base-footer class="mt-3" :items="footer" brand="Vue Templates" />
  </section>
</template>

<script>
import { useDarkMode } from '../composables/darkmode'
import { useDark, useToggle } from '@vueuse/core'
import { provide } from 'vue'

import megamenu from '../data/megamenu.json'
import navitems from '../data/navitems.json'
import footer from '../data/footer.json'

import BaseMegaDropdown from '../layouts/bootstrap/nav/BaseMegaDropdown.vue'
import BaseSideDropdown from '../layouts/bootstrap/nav/BaseSideDropdown.vue'
import BaseFooter from '@/layouts/bootstrap/BaseFooter.vue'
import BaseNavbar from '@/layouts/bootstrap/nav/BaseNavbar.vue'
import NavItem from '@/layouts/bootstrap/nav/NavItem.vue'
import NavbarNav from './bootstrap/nav/NavbarNav.vue'

export default {
  name: 'BaseSite',
  components: {
    BaseFooter,
    BaseMegaDropdown,
    BaseSideDropdown,
    BaseNavbar,
    NavItem,
    NavbarNav
},
  setup () {
    var dark = useDark()
    var toggleDark = useToggle(dark)

    var { darkMode, toggleDarkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      footer,
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
        type: 'center'
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
