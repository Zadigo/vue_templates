<template>
  <section>
    <base-navbar-vue />

    <div class="py-5 shadow-sm text-center intro-image"
      style="background-image: url('https://picsum.photos/1400/800');">
      <h1 class="display-5 fw-bold text-white">Centered hero</h1>

      <div class="col-lg-6 mx-auto text-white">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
          popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <base-dropdown-button-vue :items="drops" :button-name="'Dropown button'" />
          <button class="btn btn-lg btn-secondary mx-2" @click="showModal = !showModal">Open modal</button>
          <button class="btn btn-lg btn-dark" @click="showOffcanvas = !showOffcanvas">Open offcanvas</button>
        </div>
      </div>

      <teleport to='body'>
        <base-modal-vue :show="showModal" :centered="false" :static-backdrop="true" position="" size="md" @close="showModal = false" />
      </teleport>

      <base-offcanvas-vue :show="showOffcanvas" @close="showOffcanvas = false" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="dark-mode" @change="toggleDarkMode">
            <label class="form-check-label" for="dark-mode">
              Dark mode
            </label>
          </div>
        </div>

        <div class="col-12">
          <base-nav-pills-vue v-slot="slotProps" :items="navitems">
            <div v-if="slotProps.selected == 0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium aliquam nesciunt repudiandae, enim nam, excepturi voluptatem harum
              itaque earum esse, voluptates ad quaerat voluptas modi dicta id hic?
              Maiores, beatae!
            </div>

            <div v-if="slotProps.selected == 1">
              <img src="http://via.placeholder.com/1200x800" class="img-fluid" alt="Image 5">
            </div>

          </base-nav-pills-vue>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseDropdownButtonVue from '../layouts/BaseDropdownButton.vue'
import BaseModalVue from '../layouts/BaseModal.vue'
import BaseOffcanvasVue from '../layouts/BaseOffcanvas.vue'
import BaseNavbarVue from '../layouts/BaseNavbar.vue'
import BaseNavPillsVue from '../layouts/BaseNavPills.vue'
import navitems from '../data/navitems.json'
import { useDarkMode } from '../composables/darkmode'
import { provide } from 'vue'

export default {
  name: 'TemplatesView',
  setup () {
    var { darkMode, toggleDarkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      toggleDarkMode,
      navitems
    }
  },
  components: {
    BaseDropdownButtonVue,
    BaseModalVue,
    BaseOffcanvasVue,
    BaseNavbarVue,
    BaseNavPillsVue
  },
  data: () => ({
    showModal: false,
    showOffcanvas: false,
    drops: [
      {
        name: 'Open modal',
        to: null
      },
      {
        name: 'Open offcanvas',
        to: null
      }
    ]
  })
}
</script>

<style>
@import url('../assets/style.css');
</style>
