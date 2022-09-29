<docs>
ifnoinfoienfoeenifoei
</docs>

<template>
  <section>
    <!-- Navbar -->
    <base-navbar-vue :fixed-top="false" style="height: 100px;" />

    <!-- Intro -->
    <div :style="`background-image: url(${require('@/assets/hero1.jpg')})`" class="intro intro-100 bg-image mb-4 shadow text-center">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 display-3 fw-bold">Vue Template</h1>
            <h4 class="mb-3 fw-light">A simple VueJS projects for template demonstrations</h4>
            <!-- <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> -->
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <base-dropdown-button-vue :items="drops" :button-name="'Dropown button'" @dropdown-click="action" />
            </div>
          </div>
  
          <teleport to="body">
            <base-offcanvas-vue id="test-offcanvas" :show="showOffcanvas" @close="showOffcanvas = false">
              Google
            </base-offcanvas-vue>
          </teleport>
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

    <!-- Main -->
    <div class="container">
      <div class="row">
        <section class="my-4">
          <div class="col-12">
            <!-- Checkbox -->
            <div :class="{'bg-dark': darkMode}" class="card">
              <div class="card-body">
                <h3 class="card-title">Checkbox</h3>
                <base-checkbox id="dark-mode" :is-switch="true" label="Dark mode" @update:initial="toggleDarkMode" />
              </div>
            </div>
          </div>

          <!-- Form -->
          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Form</h3>
              <base-select :items="['A', 'B', 'C']" />
              <base-input placeholder="Rechercher" class="my-1" />
            </div>
          </div>

          <!-- Pagination -->
          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Pagination</h3>
              <base-pagination :pages="4" />
            </div>
          </div>
          
          <!-- Modal -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Modal</h3>
              <button type="button" class="btn btn-md btn-primary" @click="showModal = !showModal">
                Modal
              </button>

              <hr>

              <!-- Checkbox -->
              <base-checkbox id="center" name="modal" :initial="true" :inline="true" :is-radio="true" label="Center" @update:initial="modalOptions.position = null" />
              <base-checkbox id="top-left" name="modal" :inline="true" :is-radio="true" label="Top left" @update:initial="modalOptions.position = 'top-left'" />
              <base-checkbox id="top-right" name="modal" :inline="true" :is-radio="true" label="Top right" @update:initial="modalOptions.position = 'top-right'" />
              <base-checkbox id="bottom-right" name="modal" :inline="true" :is-radio="true" label="Bottom right" @update:initial="modalOptions.position = 'bottom-right'" />
              <base-checkbox id="bottom-left" name="modal" :inline="true" :is-radio="true" label="Bottom left" @update:initial="modalOptions.position = 'bottom-left'" />
              <base-checkbox id="top" name="modal" :inline="true" :is-radio="true" label="Top" @update:initial="modalOptions.position = 'top'" />
              <base-checkbox id="bottom" name="modal" :inline="true" :is-radio="true" label="Bottom" @update:initial="modalOptions.position = 'bottom'" />

              <teleport to="body">
                <base-modal-vue id="test-modal" :show="showModal" :centered="false" :static-backdrop="true" :position="modalOptions.position" size="sm" @close="showModal = false" />
              </teleport>
            </div>
          </base-template-card>

          <!-- Toast -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Toast</h3>
              <button type="button" class="btn btn-md btn-primary" @click="showToast = true">
                Toast
              </button>
              <base-toast :show="showToast" />
            </div>
          </base-template-card>

          <!-- Accordion -->
          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Accordion</h3>
              <base-accordion :items="[{id: 1, title: 'A', content: 'A'}, {id: 3, title: 'B', content: 'B'}]" />
            </div>
          </div>

          <!-- Card -->
          <div class="row">
            <div v-for="i in 3" :key="i" class="col-4">
              <base-card :image="require('@/assets/hero1.jpg')" :hoverable="false" :overlay="false" image-position="top" title="We can!" class="my-3">
                <!-- <template #header>
                  Do great
                </template> -->
                <template #body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus recusandae earum odio reprehenderit vero velit, 
                  non itaque magnam assumenda maxime nostrum voluptates quasi 
                  delectus ex, dolore exercitationem facilis eius fugiat.
                </template>

                <template #footer>
                  <button type="button" class="btn btn-primary">Add</button>
                </template>

                <template #reveal>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore 
                  vitae ratione omnis. Nihil numquam similique velit quidem in perspiciatis fugiat 
                  nesciunt. Aspernatur deserunt enim, fugiat doloremque impedit aut repellendus?
                </template>
              </base-card>
            </div>        

            <base-card-group>
              <base-card v-for="i in 3" :key="i" :image="require('@/assets/hero1.jpg')" :hoverable="true" :overlay="false" image-position="top" title="We can!" class="my-3 shadow-none">
                <!-- <template #header>
                  Do great
                </template> -->
                <template #body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus recusandae earum odio reprehenderit vero velit, 
                  non itaque magnam assumenda maxime nostrum voluptates quasi 
                  delectus ex, dolore exercitationem facilis eius fugiat.
                </template>

                <template #footer>
                  <button type="button" class="btn btn-primary">Add</button>
                </template>

                <template #reveal>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tempore 
                  vitae ratione omnis. Nihil numquam similique velit quidem in perspiciatis fugiat 
                  nesciunt. Aspernatur deserunt enim, fugiat doloremque impedit aut repellendus?
                </template>
              </base-card>          
            </base-card-group>
          </div>

          <!-- Range -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Range</h3>
              <base-range-input />
              <base-range-input :is-range="true" class="mt-3" />
            </div>
          </base-template-card>
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

import BaseAccordion from '@/layouts/BaseAccordion.vue'
import BaseCheckbox from '../layouts/BaseCheckbox.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCardGroup from '@/layouts/bootstrap/cards/BaseCardGroup.vue'
import BaseInput from '@/layouts/BaseInput.vue'
import BaseDropdownButtonVue from '../layouts/BaseDropdownButton.vue'
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseModalVue from '../layouts/BaseModal.vue'
import BaseNavbarVue from '../layouts/BaseNavbar.vue'
import BaseOffcanvasVue from '../layouts/BaseOffcanvas.vue'
import BasePagination from '@/layouts/BasePagination.vue'
import BaseSelect from '@/layouts/BaseSelect.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'
import BaseToast from '@/layouts/BaseToast.vue'
import BaseRangeInput from '@/layouts/BaseRangeInput.vue'

export default {
  name: 'TemplatesView',
  components: {
    BaseAccordion,
    BaseCheckbox,
    BaseDropdownButtonVue,
    BaseModalVue,
    BaseOffcanvasVue,
    BaseNavbarVue,
    BaseSelect,
    BaseInput,
    BasePagination,
    BaseToast,
    BaseFooter,
    BaseCard,
    BaseCardGroup,
    BaseTemplateCard,
    BaseRangeInput
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
      modalOptions: {
        left: null
      },
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
