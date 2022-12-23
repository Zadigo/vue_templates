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
          
          <div class="d-flex gap-2 justify-content-around align-items-center">
            <base-select id="modal-size" v-model="modalOptions.size" :items="['sm', 'md', 'lg', 'xl', 'fullscreen']" />      
            <base-select id="modal-position" v-model="modalOptions.position" :items="['center', 'top-left', 'top-right', 'bottom-right', 'bottom-left', 'top', 'bottom']" />      
          </div>
           
          <div class="py-4">
            <base-checkbox id="invasive" :bigger="true" label="Non invasive" @update:initial="modalOptions.nonInvasive = !modalOptions.nonInvasive" />
          </div>   
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
import BaseSelect from '@/layouts/bootstrap/BaseSelect.vue'
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import BaseModal from '@/layouts/bootstrap/BaseModal.vue'
import BaseOffcanvas from '@/layouts/bootstrap/BaseOffcanvas.vue'

export default {
  components: {
    BaseButton,
    BaseSelect,
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
        size: 'sm'
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
