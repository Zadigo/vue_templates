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
              <base-dropdown-button-vue :items="drops" :show-active="false" button-name="Dropown button" animation="scale" @dropdown-click="action" />
              <router-link :to="{ name: 'cover_page_view' }" class="btn btn-primary">
                Cover page
              </router-link>
            </div>
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
              <base-select v-model="selectItem" :items="['A', 'B', 'C']" />
              <base-input id="search" v-model="search" aria-label="Google" label="Recherche de votre vie rapidement ici" placeholder="Rechercher" class="my-1 p-3" />
            </div>
          </div>

          <!-- Pagination -->
          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Pagination</h3>
              <base-pagination :pages="15" />
            </div>
          </div>
          
          <!-- Modal -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Modal</h3>
              <button type="button" class="btn btn-md btn-primary" @click="showModal1 = !showModal1">
                Modal 1
              </button>

              <button type="button" class="btn btn-md btn-primary mx-1" @click="showModal3 = !showModal3">
                Modal 3
              </button>

              <hr>
          
              <base-checkbox id="invasive" :bigger="true" label="Non invasive" @update:initial="modalOptions.nonInvasive = !modalOptions.nonInvasive" />
          
              <hr>

              <base-checkbox id="modal-sm" name="modal-size" :initial="true" :inline="true" :is-radio="true" label="sM" @update:initial="modalOptions.size = 'sm'" />
              <base-checkbox id="modal-md" name="modal-size" :initial="true" :inline="true" :is-radio="true" label="MD" @update:initial="modalOptions.size = 'md'" />
              <base-checkbox id="modal-lg" name="modal-size" :inline="true" :is-radio="true" label="LG" @update:initial="modalOptions.size = 'lg'" />
              <base-checkbox id="modal-xl" name="modal-size" :inline="true" :is-radio="true" label="XL" @update:initial="modalOptions.size = 'xl'" />
              <base-checkbox id="modal-fullscreen" name="modal-size" :inline="true" :is-radio="true" label="Fullscreen" @update:initial="modalOptions.size = 'fullscreen'" />
              
              <hr>

              <base-checkbox id="center" name="modal" :initial="true" :inline="true" :is-radio="true" label="Center" @update:initial="modalOptions.position = 'center'" />
              <base-checkbox id="top-left" name="modal" :inline="true" :is-radio="true" label="Top left" @update:initial="modalOptions.position = 'top-left'" />
              <base-checkbox id="top-right" name="modal" :inline="true" :is-radio="true" label="Top right" @update:initial="modalOptions.position = 'top-right'" />
              <base-checkbox id="bottom-right" name="modal" :inline="true" :is-radio="true" label="Bottom right" @update:initial="modalOptions.position = 'bottom-right'" />
              <base-checkbox id="bottom-left" name="modal" :inline="true" :is-radio="true" label="Bottom left" @update:initial="modalOptions.position = 'bottom-left'" />
              <base-checkbox id="top" name="modal" :inline="true" :is-radio="true" label="Top" @update:initial="modalOptions.position = 'top'" />
              <base-checkbox id="bottom" name="modal" :inline="true" :is-radio="true" label="Bottom" @update:initial="modalOptions.position = 'bottom'" />

              <base-modal-vue id="test-modal1" :show="showModal1" :size="modalOptions.size" :non-invasive="modalOptions.nonInvasive" :scrollable="false" :centered="false" :static-backdrop="true" :position="modalOptions.position" @close="showModal1 = false">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat molestias 
                  sit ipsum corporis similique nobis ipsam culpa est molestiae doloremque, natus 
                  quasi aliquam ut veniam tempora aut quaerat repellat.
  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat molestias 
                  sit ipsum corporis similique nobis ipsam culpa est molestiae doloremque, natus 
                  quasi aliquam ut veniam tempora aut quaerat repellat.
  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat molestias 
                  sit ipsum corporis similique nobis ipsam culpa est molestiae doloremque, natus 
                  quasi aliquam ut veniam tempora aut quaerat repellat.
                </p>
                
                <button type="button" class="btn btn-md btn-primary mx-1" @click="showModal3 = !showModal3">
                  Modal 3
                </button>
              </base-modal-vue>
              
              <base-modal-vue id="test-modal3" :show="showModal3" :centered="true" @close="showModal3 = false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat molestias
                sit ipsum corporis similique nobis ipsam culpa est molestiae doloremque, natus
                quasi aliquam ut veniam tempora aut quaerat repellat.
              </base-modal-vue>
            </div>
          </base-template-card>

          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Offcanvas</h3>
              <button type="button" class="btn btn-md btn-primary" @click="showOffcanvas = !showOffcanvas">
                Offcanvas
              </button>
              <base-offcanvas id="test-offcanvas" :show="showOffcanvas" :allow-scroll="false" position="end" @close="showOffcanvas = false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo dolor 
                id temporibus est eius voluptatibus fugit nihil deleniti natus voluptates saepe, 
                repellendus architecto quasi unde doloremque excepturi eum ad.
              </base-offcanvas>
            </div>
          </base-template-card>

          <!-- Toast -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Toast</h3>
              <button type="button" class="btn btn-md btn-primary" @click="toasts.push({ text: 'Google1' })">
                Toast
              </button>

              <base-toast v-for="(item, i) in toasts" :key="i" :item="item" />
            </div>
          </base-template-card>

          <!-- Accordion -->
          <div :class="{'bg-dark': darkMode}" class="card my-3">
            <div class="card-body">
              <h3 class="card-title">Accordion</h3>
              <base-accordion :items="[{id: 1, title: 'A', content: 'A'}, {id: 3, title: 'B', content: 'B'}]" />
            </div>
          </div>

          <!-- Cards -->
          <div class="row">
            <!-- Card -->
            <div v-for="i in 3" :key="i" class="col-sm-12 col-md-4">
              <base-card :image="require('@/assets/hero1.jpg')" :hoverable="false" :overlay="false" image-position="top" title="We can!" class="my-3">
                <template #body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus recusandae earum odio reprehenderit vero velit, 
                  non itaque magnam assumenda maxime nostrum voluptates quasi 
                  delectus ex, dolore exercitationem facilis eius fugiat.
                </template>

                <template #footer>
                  <button type="button" class="btn btn-primary">Add</button>
                </template>
              </base-card>
            </div>        
            
            <!-- Card Group -->
            <base-card-group>
              <base-card v-for="i in 3" :key="i" :image="require('@/assets/hero1.jpg')" :hoverable="true" :overlay="false" image-position="top" title="We can!" class="my-3 shadow-none">
                <template #body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus recusandae earum odio reprehenderit vero velit, 
                  non itaque magnam assumenda maxime nostrum voluptates quasi 
                  delectus ex, dolore exercitationem facilis eius fugiat.
                </template>

                <template #footer>
                  <button type="button" class="btn btn-primary">Add</button>
                </template>
              </base-card>          
            </base-card-group>

            <!-- Card Reveal -->
            <div class="col-4">
              <base-card :image="require('@/assets/hero1.jpg')" title="We can!" class="my-3">
                <base-card-reveal content="Google" />
                <template #body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus recusandae earum odio reprehenderit vero velit,
                  non itaque magnam assumenda maxime nostrum voluptates quasi
                  delectus ex, dolore exercitationem facilis eius fugiat.
                </template>
              </base-card>
            </div>
          </div>

          <!-- Range -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Range</h3>
              <base-range-input v-model="singleRangeValue" :show-track="true" :initial="10" />
              <base-range-input v-model="doubleRangeValue" :is-range="true" class="mt-3" />
            </div>
          </base-template-card>

          <!-- Autocomplete -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Autocomplete</h3>
              <base-autocomplete :items="[{text: 'Facebook'}, {text: 'Google'}]" :clearable="true" :multiple="false">
                <base-input id="search" v-model="search" aria-label="Google" label="Recherche de votre vie rapidement ici" placeholder="Rechercher" class="my-1 p-3" />
                <!-- <input type="text" class="form-control p-2" placeholder="Type here"> -->
              </base-autocomplete>
            </div>
          </base-template-card>

          <!-- Collapse -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Collapse</h3>
              <base-collapse id="collapse-1" v-slot="{darkMode}" button-name="Collapse">
                <div :class="[darkMode ? 'bg-dark text-light' : null]" class="card">
                  <div class="card-body">
                    dark: {{ darkMode }}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsa deserunt odio, suscipit cumque, quaerat voluptas dicta nemo voluptate 
                    obcaecati fugiat voluptates atque illum, optio molestiae dolor veniam? 
                    Consequatur, a aliquid.
                  </div>
                </div>
              </base-collapse>
            </div>
          </base-template-card>

          <!-- Timeline -->
          <base-template-card class="my-3">
            <div class="card-body">
              <h3 class="card-title">Timeline</h3>
              <div class="row">
                <div class="col-12">
                  <base-timeline :items="timeline" />
                </div>

                <div class="col-12">
                  <base-horizontal-timeline :items="timeline" />
                </div>
              </div>
            </div>
          </base-template-card>

          <hr class="my-4">
          
          <base-list-group-item-radio id="google" :items="listgroups" />
          <base-list-group-checkbox id="google1" class="my-3" :items="listgroups" />

          <base-template-card>
            <div class="card-body">
              <!-- <base-video-player-playlist v-slot="{videoUrl}" :playlist="[require('@/assets/hollyG1.mp4'), require('@/assets/video1.mp4')]"> -->
              <base-video-player :video-url="require('@/assets/hollyG1.mp4')" />
              <!-- </base-video-player-playlist> -->
            </div>
          </base-template-card>

          <!-- Group -->
          <base-template-card class="my-3">
            <div class="card-body">
              <base-list-group>
                <base-list-group-item-action v-for="(item, i) in [{text: 'A'}, {text: 'B'}]" :key="i">
                  {{ item.text }}
                </base-list-group-item-action>
              </base-list-group>
            </div>
          </base-template-card>

          <!-- Table -->
          <base-template-card class="my-3">
            <dynamic-table id="table1" :headers="['Firstname', 'Lastname', 'Age']" :items="table" />
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
import table from '@/data/table.json'

import BaseAutocomplete from '@/layouts/bootstrap/BaseAutocomplete.vue'
import BaseAccordion from '@/layouts/bootstrap/BaseAccordion.vue'
import BaseCheckbox from '../layouts/bootstrap/BaseCheckbox.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCardGroup from '@/layouts/bootstrap/cards/BaseCardGroup.vue'
import BaseCardReveal from '@/layouts/bootstrap/cards/BaseCardReveal.vue'
import BaseCollapse from '@/layouts/bootstrap/BaseCollapse.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseDropdownButtonVue from '@/layouts/bootstrap/BaseDropdownButton.vue'
import BaseHorizontalTimeline from '@/layouts/bootstrap/BaseHorizontalTimeline.vue'
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseListGroup from '@/layouts/bootstrap/listgroup/BaseListGroup.vue'
import BaseListGroupItemAction from '@/layouts/bootstrap/listgroup/BaseListGroupItemAction.vue'
// import BaseListGroupItem from '@/layouts/bootstrap/listgroup/BaseListGroupItem.vue'
import BaseModalVue from '../layouts/bootstrap/BaseModal.vue'
import BaseNavbarVue from '@/layouts/bootstrap/nav/BaseNavbar.vue'
import BaseOffcanvas from '../layouts/bootstrap/BaseOffcanvas.vue'
import BasePagination from '@/layouts/BasePagination.vue'
import BaseRangeInput from '@/layouts/BaseRangeInput.vue'
import BaseListGroupItemRadio from '@/layouts/bootstrap/listgroups/BaseListGroupItemRadio.vue'
import BaseSelect from '@/layouts/bootstrap/BaseSelect.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'
import BaseTimeline from '@/layouts/bootstrap/BaseTimeline.vue'
import BaseToast from '@/layouts/bootstrap/BaseToast.vue'
import BaseListGroupCheckbox from '@/layouts/bootstrap/listgroups/BaseListGroupCheckbox.vue'
import BaseVideoPlayer from '@/layouts/bootstrap/players/BaseVideoPlayer.vue'
import DynamicTable from '@/layouts/table/DynamicTable.vue'
// import BaseVideoPlayerPlaylist from '@/layouts/bootstrap/players/BaseVideoPlayerPlaylist.vue'

export default {
  name: 'TemplatesView',
  components: {
    BaseAccordion,
    BaseAutocomplete,
    BaseCheckbox,
    BaseCardReveal,
    BaseCollapse,
    BaseDropdownButtonVue,
    BaseHorizontalTimeline,
    BaseListGroup,
    BaseListGroupItemAction,
    // BaseListGroupItem,
    BaseModalVue,
    BaseNavbarVue,
    BaseOffcanvas,
    BaseListGroupItemRadio,
    BaseSelect,
    BaseInput,
    BasePagination,
    BaseToast,
    BaseFooter,
    BaseCard,
    BaseCardGroup,
    BaseTimeline,
    BaseTemplateCard,
    BaseRangeInput,
    BaseListGroupCheckbox,
    BaseVideoPlayer,
    DynamicTable
    // BaseVideoPlayerPlaylist
},
  setup () {
    var dark = useDark()
    var toggleDark = useToggle(dark)

    var { darkMode, toggleDarkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      table,
      d: dark,
      toggleDark,
      darkMode,
      toggleDarkMode,
      navitems
    }
  },
  data () {
    return {
      selectItem: 'A',
      search: null,
      showModal1: false,
      showModal3: false,
      showOffcanvas: false,
      showToast: false,
      singleRangeValue: 10,
      doubleRangeValue: [10, 50],
      toasts: [
        { text: 'Google' }
      ],
      modalOptions: {
        position: 'center',
        nonInvasive: false
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
      ],
      listgroups: [
        { name: 'First radio', subtitle: 'With support text underneath to add more detail' }, 
        { name: 'Second radio', subtitle: 'With support text underneath to add more detail', disabled: true }, 
        { name: 'Third radio', subtitle: 'With support text underneath to add more detail' }
      ],
      timeline: [
        {
          title: 'Kendall Jenner',
          date: 'Jan 14',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt vel accusantium quidem laboriosam fugit similique sit molestiae! Vel blanditiis vero, non dolor labore reprehenderit. Assumenda repellat asperiores necessitatibus amet vitae.'
        },
        {
          title: 'Kylie Jenner',
          date: 'Jan 14',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt vel accusantium quidem laboriosam fugit similique sit molestiae! Vel blanditiis vero, non dolor labore reprehenderit. Assumenda repellat asperiores necessitatibus amet vitae.'
        }
      ]
    }
  },
  methods: {
    action (value) {
      // if (value[0] === 0) {
      //   this.showModal = true
      // }

      // if (value[0] === 1) {
      //   this.showOffcanvas = true
      // }
      // Action here
      value
    }
  }
}
</script>

<style>
@import url('../assets/style.css');
</style>
