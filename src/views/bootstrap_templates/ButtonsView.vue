<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-card>
        <template #body>
          <div class="d-flex mb-3 gap-1">
            <base-button id="button-1" color="dark">
              <base-spinner class="me-1" size="sm" grow />
              Button 1
            </base-button>

            <base-button id="button-1" color="danger">
              Button 3
            </base-button>

            <base-button :to="{ name: 'home_view' }" color="warning">
              Link
            </base-button>
          </div>
          
          <base-dropdown-button id="button-4" :items="items" animation="scale" button-name="Dropdown" />
        </template>
      </base-card>

      <!-- Dropdown -->
      <base-card class="my-3">
        <template #body>
          <div class="d-flex gap-3">
            <!-- <test-base-dropdown-button /> -->

            <test-base-dropdown-button id="drop-1" v-slot="{show}">
              <dropdown-menu :show="show" animation="slideup">
                <dropdown-item-input link-name="Example input" />
                <dropdown-item link-name="Link 1" :active="true" />
                <dropdown-item-header link-name="Example header" />
                <dropdown-item link-name="Link 3" />
                <dropdown-item-divider />
                <dropdown-item link-name="Link 4" />
                <dropdown-item link-name="Link 5" icon="table" />
              </dropdown-menu>
            </test-base-dropdown-button>
  
            <base-dropdown-button-split id="drop-2" v-slot="{show}">
              <dropdown-menu :show="show">
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
import BaseSpinner from '@/layouts/bootstrap/BaseSpinner.vue';
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'

import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue'
import BaseDropdownButtonSplit from '@/layouts/bootstrap/buttons/BaseDropdownButtonSplit.vue'
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
  }
}
</script>
