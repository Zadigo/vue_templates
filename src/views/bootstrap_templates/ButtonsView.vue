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

            <base-button id="button-1" :to="{ name: 'home_view' }" color="warning">
              Link
            </base-button>
          </div>
          
          <base-dropdown-button id="button-4" :items="items" animation="scale" button-name="Dropdown" />
        </template>
      </base-card>

      <base-card class="my-3">
        <template #body>
          <div class="d-flex gap-3">
            <!-- <test-base-dropdown-button /> -->

            <test-base-dropdown-button v-slot="{show}">
              <base-drop-menu :show="show">
                <dropdown-item link-name="Google" />
              </base-drop-menu>
            </test-base-dropdown-button>
  
            <!-- <test-base-dropdown-button-split v-slot="{show}">
              <base-drop-menu :show="show" />
            </test-base-dropdown-button-split> -->
          </div>
        </template>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseSpinner from '@/layouts/bootstrap/BaseSpinner.vue';
import BaseButton from '../../layouts/BaseButton.vue';
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'

import DropdownItem from '../../layouts/DropdownItem.vue'
import BaseDropMenu from '@/layouts/BaseDropMenu.vue'
import BaseDropdownButton from '@/layouts/bootstrap/BaseDropdownButton.vue'
import TestBaseDropdownButton from '@/layouts/TestBaseDropdownButton.vue'
// import TestBaseDropdownButtonSplit from '@/layouts/TestBaseDropdownButtonSplit.vue'

export default {
  components: {
    BaseButton,
    BaseCard,
    BaseDropdownButton,
    BaseSpinner,
    
    DropdownItem,
    BaseDropMenu,
    TestBaseDropdownButton,
    // TestBaseDropdownButtonSplit
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
