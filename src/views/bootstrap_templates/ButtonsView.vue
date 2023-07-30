<template>
  <div class="row">
    <div class="col-12">
      <!-- Buttons -->
      <base-card>
        <template #body>
          <div class="d-flex mb-3 gap-1 justify-content-center align-items-center">
            <!-- Spinner -->
            <base-button id="button-1" color="dark">
              <base-spinner class="me-2" size="sm" grow />
              With spinner
            </base-button>
            
            <!-- Button -->
            <base-button id="button-1" color="danger">
              Simple button
            </base-button>

            <!-- Link -->
            <base-button :to="{ name: 'home_view' }" color="warning">
              Go to home
            </base-button>
          </div>
          
          <!-- <base-dropdown-button id="button-4" :items="items" animation="scale" button-name="Dropdown" /> -->
        </template>
      </base-card>
    </div>

    <!-- Dropdown -->
    <div class="col-12">
      <base-card class="my-3">
        <template #body>
          <div class="d-flex mb-3 justify-content-center align-items-center gap-3">
            <!-- Dropdown button -->
            <base-dropdown-button id="drop-1" v-slot="{show}" link-name="Dropdown">
              <dropdown-menu id="drop-1-menu" :show="show" animation="slideup">
                <dropdown-item-input link-name="Example input" />
                <dropdown-item link-name="Link 1" :active="true" />
                <dropdown-item-header link-name="Example header" />
                <dropdown-item link-name="Link 3" />
                <dropdown-item-divider />
                <dropdown-item link-name="Link 4" />
                <dropdown-item link-name="Link 5" icon="table" @click="handleExampleClick" />
              </dropdown-menu>
            </base-dropdown-button>
            
            <!-- Split dropdown -->
            <base-dropdown-button-split id="drop-2" v-slot="{show}" link-name="Split dropdown">
              <dropdown-menu id="drop-2-menu" :show="show">
                <dropdown-item link-name="Link 5" icon="table" />
              </dropdown-menu>
            </base-dropdown-button-split>
          </div>
        </template>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue'
import BaseDropdownButtonSplit from '@/layouts/bootstrap/buttons/BaseDropdownButtonSplit.vue'
import BaseSpinner from '@/layouts/bootstrap/BaseSpinner.vue';
import DropdownItem from '@/layouts/bootstrap/buttons/DropdownItem.vue'
import DropdownItemDivider from '@/layouts/bootstrap/buttons/DropdownItemDivider.vue'
import DropdownItemInput from '@/layouts/bootstrap/buttons/DropdownItemInput.vue'
import DropdownItemHeader from '@/layouts/bootstrap/buttons/DropdownItemHeader.vue'
import DropdownMenu from '@/layouts/bootstrap/buttons/DropdownMenu.vue'

export default {
  components: {
    BaseButton,
    BaseCard,
    BaseDropdownButton,
    BaseDropdownButtonSplit,
    BaseSpinner,
    
    DropdownItem,
    DropdownItemDivider,
    DropdownItemInput,
    DropdownItemHeader,
    DropdownMenu
  },
  data () {
    return {
      items: [
        {
          name: 'Item 1'
        },
        {
          name: 'Item 3'
        },
        {
          name: 'Item 4'
        }
      ]
    }
  },
  methods: {
    handleExampleClick () {
      console.log('Clicked menu item')
    }
  }
}
</script>
