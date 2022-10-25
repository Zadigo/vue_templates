<template>
  <div :class="{active: selected || rowSelected || selectAllRows}" class="task-cell d-flex justify-content-between" @click.stop="select(task)">
    <span>{{ task.value }}</span>
    <!-- <button type="button" class="btn btn-sm btn-floating btn-light shadow-none">p</button> -->
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  props: {
    task: {
      type: Object,
      default: () => {}
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
    const selected = ref(false)
    return {
      selected,
      rowSelected,
      selectAllRows
    }
  },
  methods: {
    select (task) {
      this.selected = !this.selected
      this.$emit('update:selection', task)
    }
  }
}
</script>
