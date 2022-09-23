<template>
  <nav :class="navbarClasses" class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand fw-bold text-uppercase" href="#">Navbar</a>

      <button :class="{ collapsed }" type="button" class="navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="collapsed = !collapsed">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- collapse show -->
      <div id="navbarNav" :class="{'collapse show': !collapsed}" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'parallax_view'}" class="nav-link">
              Parallax
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'youtube_view' }" class="nav-link">
              Dashboard
            </router-link>
          </li>

          <base-mega-dropdown-vue :items="megamenu" />
          <base-side-dropdown-vue />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseMegaDropdownVue from '../components/nav/BaseMegaDropdown.vue'
import BaseSideDropdownVue from '../components/nav/BaseSideDropdown.vue'
import megamenu from '../data/megamenu.json'
import { inject } from 'vue'

export default {
  name: 'BaseNavbar',
  components: {
    BaseMegaDropdownVue,
    BaseSideDropdownVue
  },
  props: {
    fixedTop: {
      type: Boolean
    }
  },
  setup () {
    var darkMode = inject('darkMode', () => false)
    return {
      megamenu,
      darkMode
    }
  },
  data () {
    return {
      collapsed: true
    }
  },
  computed: {
    navbarClasses () {
      return [
        this.fixedTop ? 'fixed-top' : null,
        this.darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'
      ]
    }
  }
}
</script>

<style scoped>
.navbar-collapse {
  transition: all .3s ease;
  animation: collapsing .4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes collapsing {
  0% {
    height: 50%;
  }
  
  99% {
    height: 100%;
  }
}
</style>
