<template>
  <div class="task-row">
    <div class="task-cell task-cell-row-select">
      <base-checkbox id="select-row" v-model="rowSelected" label="" :initial="rowSelected" />
    </div>

    <!-- Cell -->
    <dynamic-table-cell v-for="header in headers" :key="header" :task="item[header]" :header="header" @update:selection="updateselection" />
  </div>
</template>

<script>
import { inject, provide, ref } from 'vue'

import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import DynamicTableCell from './DynamicTableCell.vue'

export default {
  name: 'DynamicTableRow',
  components: {
    BaseCheckbox,
    DynamicTableCell
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  emits: {
    'update:row:selection' () {
      return true
    },
    'select-row' () {
      return true
    }
  },
  setup () {
    const rowSelected = ref(false)
    provide('rowSelected', rowSelected)
    const selectAllRows = inject('selectAllRows')
    const headers = inject('headers')
    return {
      selectAllRows,
      rowSelected,
      headers
    }
  },
  watch: {
    selectAllRows (current) {
      this.rowSelected = current
    }
  },
  methods: {
    // selectRow (state) {
    //   this.rowSelected = state
    //   this.$emit('select-row', this.item)
    // },
    updateselection (value) {
      // value -> [header, task]
      this.$emit('update:row:selection', [this.item, ...value])
    }
  }
}
</script>
