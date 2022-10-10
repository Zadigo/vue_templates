<template>
  <div :id="id" class="list-group mx-0 w-auto">
    <label v-for="(item, i) in items" :key="i" :class="[darkMode ? 'text-bg-dark' : null]" class="list-group-item d-flex gap-2">
      <input :checked="selectedIds.includes(i)" :disabled="item.disabled" :value="i" class="form-check-input flex-shrink-0" type="checkbox" @click="listManager(selectedIds, i), $emit('list-group-selection', selected)">
      <span>
        {{ item.name }}
        <small class="d-block text-muted">{{ item.subtitle }}</small>
      </span>
    </label>
  </div>
</template>

<script>
import _ from 'lodash'
import { inject } from 'vue'
import { useUtilities } from '@/composables/utils'

export default {
  name: 'BaseListGroupCheckbox',
  props: {
    id: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    // initial: {
    //   type: Array,
    //   default: true
    // }
  },
  emits: {
    'list-group-selection' () {
      return true
    }
  },
  setup () {
    const { listManager } = useUtilities()
    const darkMode = inject('darkMode', false)
    return {
      listManager,
      darkMode
    }
  },
  data () {
    return {
      selectedIds: [],
      refactoredItems: []
    }
  },
  computed: {
    selected () {
      return _.map(this.selectedIds, (id) => {
        return this.items[id]
      })
    }
  }
}
</script>
