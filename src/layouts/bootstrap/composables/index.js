import _ from 'lodash'
import { computed, ref, defineEmits } from 'vue'

export function useLists (items) {
  const _items = items
  const selectedIds = ref([])

  const emit = defineEmits({
    'list-click' () {
      return true
    }
  })

  function selectionManager (item) {
    if (selectedIds.value.includes(item)) {
      const index = _.indexOf(selectedIds.value, item)
      selectedIds.value.splice(index, 1)
    } else {
      selectedIds.value.push(item)
    }
    // return items
  }

  const selected = computed(() => {
    return selectedIds.value.map((id) => {
      return _items[id]
    })
  })

  function selectItem (index) {
    selectionManager(index)
    emit('list-click', selected.value)
  }
  
  return {
    selected,
    selectedIds,
    selectItem
  }
}
