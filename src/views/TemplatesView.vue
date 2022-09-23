<docs>
ifnoinfoienfoeenifoei
</docs>

<template>
  <section>
    <!-- Navbar -->
    <base-navbar-vue style="height: 100px;" />

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
            <base-dropdown-button-vue :items="drops" :button-name="'Dropown button'" @dropdown-click="action" />
          </div>
        </div>

        <teleport to="body">
          <base-modal-vue id="test-modal" :show="showModal" :centered="false" :static-backdrop="true" position="" size="md" @close="showModal = false" />
        </teleport>

        <teleport to="body">
          <base-offcanvas-vue id="test-offcanvas" :show="showOffcanvas" @close="showOffcanvas = false">
            Google
          </base-offcanvas-vue>
        </teleport>
      </div>
    </div>

    <!-- Main -->
    <div class="container">
      <div class="row">
        <section class="my-4">
          <div class="col-12">
            <div :class="{'bg-dark': darkMode}" class="card">
              <div class="card-body">
                <h3 class="card-title">Checkbox</h3>
                <base-checkbox id="dark-mode" :is-switch="true" label="Dark mode" @update:initial="toggleDarkMode" />
              </div>
            </div>
          </div>

          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Form</h3>
              <base-select :items="['A', 'B', 'C']" />
              <base-input placeholder="Rechercher" class="my-1" />
            </div>
          </div>

          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3>Pagination</h3>
              <base-pagination :pages="4" />
            </div>
          </div>

          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3>Toast</h3>
              <button type="button" class="btn btn-md btn-primary" @click="showToast = true">
                Toast
              </button>
              <base-toast :show="showToast" />
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <base-footer class="mt-3" />
  </section>
</template>

<script>
import navitems from '../data/navitems.json'
import { useDarkMode } from '../composables/darkmode'
import { useDark, useToggle } from '@vueuse/core'
import { provide } from 'vue'

import BaseCheckbox from '../layouts/BaseCheckbox.vue'
import BaseInput from '@/layouts/BaseInput.vue'
import BaseDropdownButtonVue from '../layouts/BaseDropdownButton.vue'
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseModalVue from '../layouts/BaseModal.vue'
import BaseNavbarVue from '../layouts/BaseNavbar.vue'
import BaseOffcanvasVue from '../layouts/BaseOffcanvas.vue'
import BasePagination from '@/layouts/BasePagination.vue'
import BaseSelect from '@/layouts/BaseSelect.vue'
import BaseToast from '@/layouts/BaseToast.vue'

export default {
  name: 'TemplatesView',
  components: {
    BaseDropdownButtonVue,
    BaseModalVue,
    BaseOffcanvasVue,
    BaseNavbarVue,
    BaseSelect,
    BaseInput,
    BaseCheckbox,
    BasePagination,
    BaseToast,
    BaseFooter
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
      navitems
    }
  },
  data () {
    return {
      showModal: false,
      showOffcanvas: false,
      showToast: false,
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
    }
  },
  methods: {
    action (value) {
      if (value[0] === 0) {
        this.showModal = true
      }

      if (value[0] === 1) {
        this.showOffcanvas = true
      }
    }
  }
}
</script>

<style>
@import url('../assets/style.css');
</style>
