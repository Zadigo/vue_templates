<template>
  <section>
    <!-- Navbar -->
    <base-navbar-vue />

    <!-- Intro -->
    <div class="intro bg-image mb-4 shadow text-center" :style="`background-image: url(${require('@/assets/hero1.jpg')})`">
      <!-- <div class="mask-gradient"> -->
      <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);"></div> -->
      <div class="text-white m-5">
        <h1 class="display-5 fw-bold">
          Welcome page
        </h1>

        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            A simple VueJS projects for template demonstrations
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <base-dropdown-button-vue :items="drops" :button-name="'Dropown button'" />
            <!-- <button class="btn btn-lg btn-secondary mx-2" @click="showModal = !showModal">Open modal</button> -->
            <!-- <button class="btn btn-lg btn-dark" @click="showOffcanvas = !showOffcanvas">Open offcanvas</button> -->
          </div>
        </div>

        <teleport to="body">
          <base-modal-vue :show="showModal" :centered="false" :static-backdrop="true" position="" size="md" @close="showModal = false" />
        </teleport>

        <teleport to="body">
          <base-offcanvas-vue :show="showOffcanvas" @close="showOffcanvas = false" />
        </teleport>
      </div>
      <!-- <div class="d-flex justify-content-center align-items-center">
      </div> -->
    </div>

    <!-- Main -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="form-check form-switch">
            <input id="dark-mode" class="form-check-input" type="checkbox" role="switch" @change="toggleDarkMode">
            <label class="form-check-label" for="dark-mode">
              Dark mode
            </label>
          </div>
        </div>

        <!-- <div class="col-12">
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
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import BaseDropdownButtonVue from '../layouts/BaseDropdownButton.vue'
import BaseModalVue from '../layouts/BaseModal.vue'
import BaseOffcanvasVue from '../layouts/BaseOffcanvas.vue'
import BaseNavbarVue from '../layouts/BaseNavbar.vue'
// import BaseNavPillsVue from '../layouts/BaseNavPills.vue'
import navitems from '../data/navitems.json'
import { useDarkMode } from '../composables/darkmode'
import { provide } from 'vue'

export default {
  name: 'TemplatesView',
  components: {
    BaseDropdownButtonVue,
    BaseModalVue,
    BaseOffcanvasVue,
    BaseNavbarVue
    // BaseNavPillsVue
  },
  setup () {
    var { darkMode, toggleDarkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      toggleDarkMode,
      navitems
    }
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
