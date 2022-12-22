<template>
  <div class="task-cell" @click="showHeaderMenu = !showHeaderMenu">
    {{ header }}
    
    <!-- Sorting -->
    <ul :class="{ show: showHeaderMenu }" class="task-cell-menu">
      <li>
        <a href class="task-cell-menu-item" @click.prevent="handleSort(header)">
          <font-awesome-icon icon="fa-solid fa-arrow-up" class="me-1" />
          Sort ascending
        </a>
      </li>

      <li>
        <a href class="task-cell-menu-item" @click.prevent="handleSort(header, 'desc')">
          <font-awesome-icon icon="fa-solid fa-arrow-down" class="me-1" />
          Sort descending
        </a>
      </li>
      
      <li>
        <a href class="task-cell-menu-item" @click.prevent="handleShowQuickFilter">
          <font-awesome-icon icon="fa-solid fa-filter" class="me-1" />
          Filter
        </a>
      </li>
    </ul>

    <!-- Quick filtering -->
    <ul :class="{ show: showQuickFiltering }" class="task-cell-menu">
      <div class="p-2 mb-2">
        {{ header }} 
        <button type="button" class="btn btn-sm btn-light shadow-none">
          Contains
        </button>
      </div>
      <li>
        <base-input id="quick-filtering" v-model="filterValue" type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
// import _ from 'lodash'
import { inject } from 'vue'
import { useFiltering } from './composables/index'

import BaseInput from '../bootstrap/BaseInput.vue'

export default {
  name: 'DynamicTableColumnHeader',
  components: {
    BaseInput
  },
  props: {
    header: {
      type: String,
      required: true
    }
  },
  emits: {
    'update:sorting-rules' (header) {
      header
      return true
    }
  },
  setup () {
    const availableFilters = useFiltering()
    const headers = inject('headers')
    return {
      availableFilters,
      headers
    }
  },
  data () {
    return {
      filterValue: null,
      showHeaderMenu: false,
      showQuickFiltering: false,
      showFilteringOptionsMenu: false
    }
  },
  methods: {
    handleSort (header, method = 'asc') {
      this.$emit('update:sorting-rules', [header, method])
    },
    handleShowQuickFilter () {
      this.showHeaderMenu = false
      this.showQuickFiltering = true
    }
  }
}
</script>

<style>
</style>
