<template>
  <div :class="{ selected }" class="cell" @click="cellSelected">
    <input v-if="editing" type="text" class="form-control" @keypress.enter="editing = false">
    <span v-else>{{ content }}</span>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: {
    content: {
      type: [Number, String, Object],
      required: true
    }
  },
  emits: {
    'cell-selected' () {
      return true
    }
  },
  setup () {
    const selectedCell = inject('selectedCell')
    return {
      selectedCell
    }
  },
  data () {
    return {
      selected: false,
      editing: false,
      clicks: 0,
      timer: null
    }
  },
  watch: {
    selectedCell (current) {
      if (this.selectedCell.id !== current) {
        this.selected = false
        this.editing = false
      }
    }
  },
  methods: {
    cellSelected () {
      this.selected = !this.selected
      this.editing = true
      // this.$refs.input.focus()
      this.$emit('cell-selected', { id: this.content })
    },
    handleClick () {
      const self = this
      this.clicks++
      if (this.clicks === 1) {
        this.timer = setTimeout(() => {
          self.selected = !self.selected
          self.$emit('cell-selected', {id: this.content})
          // this.result.push(event.type)
          this.clicks = 0
        }, 700)
      } else {
        clearTimeout(this.timer)
        // this.result.push('dblclick');
        this.clicks = 0
      }        
    }
  }
}
</script>
