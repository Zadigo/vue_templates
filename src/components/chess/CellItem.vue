<template>
  <div :id="cellAddress" :class="{ 'bg-light': colouredCells.includes(index) }" class="cell border" @click="$emit('update:move', [item, cellAddress])">
    {{ cellAddress }}
    <component :is="cell.currentPiece" />
  </div>
</template>

<script>
import { inject } from 'vue'
import DameItem from '@/components/chess/DameItem.vue'
export default {
  components: {
    DameItem
  },
  props: {
    cell: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: {
    'update:move' () {
      return true
    }
  },
  setup () {
    const colouredCells = inject('colouredCells')
    return {
      colouredCells
    }
  },
  computed: {
    cellAddress () {
      return `${this.cell.column}${this.cell.row}`
    },
    isWhiteStartingCell () {
      return this.index >= 49
    },
    isBlackStartingCell () {
      return this.index >= 16
    }
  }
}
</script>
