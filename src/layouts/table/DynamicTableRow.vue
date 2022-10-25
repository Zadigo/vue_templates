<template>
  <div class="task-row">
    <div class="task-cell task-cell-row-select">
      <base-checkbox id="select-row" label="" :initial="rowSelected" @update:initial="selectRow" />
    </div>
    <dynamic-table-cell v-for="task in item.tasks" :key="task.id" :task="task" @update:selection="updateselection" />
  </div>
</template>

<script>
import { inject, provide, ref } from 'vue'

import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import DynamicTableCell from './DynamicTableCell.vue'

export default {
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
    return {
      selectAllRows,
      rowSelected
    }
  },
  watch: {
    selectAllRows (current) {
      this.rowSelected = current
    }
  },
  methods: {
    selectRow (state) {
      this.rowSelected = state
      this.$emit('select-row', this.item)
    },
    updateselection (value) {
      this.$emit('update:row:selection', value)
    }
  }
}
</script>
