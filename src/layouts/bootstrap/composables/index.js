import _ from 'lodash'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export function useClickOutside (onbefore = () => { }, onafter = () => { }) {
  // Handle menu state when click outside
  const show = ref(false)
  
  function handleButtonClickOutside (e) {
    const target = e.target

    onbefore(e)

    if (target.classList.contains('dropdown-header')) {
      return
    }
    
    if (target.classList.contains('dropdown-input')) {
      return
    }

    if (target.classList.contains('dropdown-divider')) {
      return
    }

    if (!target.classList.contains('dropdown-toggle')) {
      show.value = false
    }
    
    onafter(e)
  }

  function handleClick() {
    show.value = !show.value
  }

  onMounted(() => {
    window.addEventListener('click', handleButtonClickOutside)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', handleButtonClickOutside)
  })

  return {
    show,
    handleClick
  }
}

export function useLists (items, onbefore = () => { }, onafter = () => { }) {
  const _items = items
  const selectedIds = ref([])

  // const emit = defineEmits({
  //   'list-click' () {
  //     return true
  //   }
  // })

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

  function selectItem (e, index) {
    onbefore(e)
    selectionManager(index)
    onafter(e)
    // emit('list-click', selected.value)
  }

  function isSelected (index) {
    return selectedIds.value.includes(index)
  }
  
  return {
    isSelected,
    selected,
    selectedIds,
    selectItem
  }
}

export function useEventListener (el, event, callback) {
  onMounted(() => {
    el?.value?.addEventListener(event, callback)
  })

  onBeforeUnmount(() => {
    el?.value?.removeEventListener(event, callback)
  })
}

export function useUtilities () {
  // Generate a random ID for a component
  // for cases where the user has not
  // provided one
  function generateId (suffix) {
    return `__BID__${Math.random().toString().slice(2, 8)}___B_${suffix}__`
  }

  return {
    generateId
  }
}
