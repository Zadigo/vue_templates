import _ from 'lodash'
import { useUtilities } from '@/composables/utils'
import { computed, ref } from 'vue'

export function useFiltering () {
  const availableFilters = [
    'Is',
    'Is not',
    'Contains',
    'Does not contain',
    'Starts with',
    'Ends with',
    'Is empty',
    'Is not empty'
  ]
  
  function filterValueOperation(value, operator, constraint) {
    // Use this method to compare a value
    // to a given constraint using a selected
    // comparision operator
    const stringValue = value.toString()
    let result

    switch (operator) {
      case 'Is':
        result = stringValue === constraint
        break
      
      case 'Is not':
        result = stringValue !== constraint
        break
      
      case 'Contains':
        result = stringValue.includes(constraint)
        break
      
      case 'Does not contain':
        result = !stringValue.includes(constraint)
        break
      
      case 'Starts with':
        result = stringValue.startsWith(constraint)
        break

      case 'Ends with':
        result = stringValue.endsWith(constraint)
        break

      case 'Is empty':
        result = stringValue === null || stringValue === ""
        break

      case 'Is not empty':
        result = stringValue !== null || stringValue !== ""
        break

      default:
        result = false
        break
    }
    return result
  }
  return {
    filterValueOperation,
    availableFilters
  }
}

export function useHeaders (headers) {
  const maskedColumns = ref([])
  const { listManager } = useUtilities()

  const visibleColumns = computed(() => {
    // Only show columns that marked
    // as visible by the user. By default
    // all columns are visible
    if (maskedColumns.value.length === 0) {
      return headers
    } else {
      return _.filter(headers, (header) => {
        return !maskedColumns.value.includes(header)
      })
    }
  })

  function handleColumnVisibility (header) {
    listManager(maskedColumns.value, header)
  }

  return {
    handleColumnVisibility,
    visibleColumns,
    maskedColumns
  }
}
