<template>
  <div :class="{ active: cellSelected || rowSelected || selectAllRows }" :aria-label="task" class="task-cell d-flex justify-content-between" @click.stop="select(header, task)">
    <span :for="header">{{ task }}</span>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'DynamicTableCell',
  props: {
    task: {
      type: [String, Number],
      default: null
    },
    header: {
      type: String,
      required: true
    }
  },
  emits: {
    'update:selection' () {
      return true
    }
  },
  setup () {
    const rowSelected = inject('rowSelected')
    const selectAllRows = inject('selectAllRows')
    const cellSelected = ref(false)
    return {
      cellSelected,
      rowSelected,
      selectAllRows
    }
  },
  methods: {
    select (header, task) {
      this.cellSelected = !this.cellSelected
      this.$emit('update:selection', [header, task])
    }
  }
}
</script>
