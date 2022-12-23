<template>
  <div class="row">
    <div class="col-10 offset-1">
      <!-- Modal -->
      <base-card class="my-3">
        <template #header>
          <h3 class="card-title">Modals</h3>
        </template>

        <template #body>
          <button type="button" class="btn btn-md btn-primary" @click="showModal1 = !showModal1">
            Modal 1
          </button>
      
          <button type="button" class="btn btn-md btn-primary mx-1" @click="showModal3 = !showModal3">
            Modal 3
          </button>

          <!-- <div class="highlight">
            <pre>
              <code>
                Google
              </code>
            </pre>
          </div> -->
      
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
        </template>
      </base-card>
      
      <!-- Offcanvas -->
      <base-card class="my-3">
        <template #header>
          <h3 class="card-title">Offcanvas</h3>
        </template>

        <template #body>
          <div class="d-flex gap-1">
            <base-button @click="handleOffcanvas('start')">
              start
            </base-button>
  
            <base-button @click="handleOffcanvas('end')">
              End
            </base-button>

            <base-button @click="handleOffcanvas('top')">
              Top
            </base-button>

            <base-button @click="handleOffcanvas('bottom')">
              Bottom
            </base-button>
          </div>
        </template>
      </base-card>      
    </div>

    <!-- Modal -->
    <base-offcanvas id="test-offcanvas" :show="showOffcanvas" :allow-scroll="false" :position="offcanvasOptions.position" @close="showOffcanvas = false">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo dolor
      id temporibus est eius voluptatibus fugit nihil deleniti natus voluptates saepe,
      repellendus architecto quasi unde doloremque excepturi eum ad.
    </base-offcanvas>

    <base-modal id="test-modal1" :show="showModal1" :size="modalOptions.size" :non-invasive="modalOptions.nonInvasive" :scrollable="false" :centered="false" :static-backdrop="true" :position="modalOptions.position" @close="showModal1 = false">
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
    </base-modal>
  
    <base-modal id="test-modal3" :show="showModal3" :centered="true" @close="showModal3 = false">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat molestias
      sit ipsum corporis similique nobis ipsam culpa est molestiae doloremque, natus
      quasi aliquam ut veniam tempora aut quaerat repellat.
    </base-modal>
  </div>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import BaseModal from '@/layouts/bootstrap/BaseModal.vue'
import BaseOffcanvas from '@/layouts/bootstrap/BaseOffcanvas.vue'

export default {
  components: {
    BaseButton,
    BaseCard,
    BaseCheckbox,
    BaseModal,
    BaseOffcanvas
  },
  data () {
    return {
      showModal1: false,
      showModal3: false,
      showOffcanvas: false,
      modalOptions: {
        position: 'center',
        nonInvasive: false,
        size: 'md'
      },
      offcanvasOptions: {
        position: 'end'
      }
    }
  },
  methods: {
    handleOffcanvas (position) {
      this.offcanvasOptions.position = position
      this.showOffcanvas = true
    }
  }
}
</script>

<!-- <style scoped>
.highlight {
  padding: .75rem 1.25rem;
  border-radius: 0.375;
  position: relative;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: .875em;
}
.highlight pre {
  padding: 0;
  margin-top: .625rem;
  margin-right: 1.875rem;
  margin-bottom: .625rem;
  white-space: pre;
  background-color: transparent;
  border: 0;
}

pre code {
  font-size: inherit;
  color: #212529;
  word-wrap: normal;
}
</style>
 -->
