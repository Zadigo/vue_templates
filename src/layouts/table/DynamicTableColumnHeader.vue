<template>
  <div class="task-cell" @click="showHeaderMenu = !showHeaderMenu">
    {{ header }}
  
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
        <a href class="task-cell-menu-item" @click.prevent>
          <font-awesome-icon icon="fa-solid fa-filter" class="me-1" />
          Filter
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import _ from 'lodash'
import { inject } from 'vue'

export default {
  name: 'DynamicTableColumnHeader',
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
      // if (this.headers.includes(header)) {
      //   return true
      // } else {
      //   return false
      // }
    }
  },
  setup () {
    const headers = inject('headers')
    return {
      headers
    }
  },
  data () {
    return {
      showHeaderMenu: false
    }
  },
  methods: {
    handleSort (header, method = 'asc') {
      this.$emit('update:sorting-rules', [header, method])
    }
  }
}
</script>

<style>
</style>
