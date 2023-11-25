<template>
  <div></div>
</template>

<script>
import usePieces from '@/composables/chess/pieces.js'

export default {
  setup () {
    const { columnsMaxValues } = usePieces()
    return {
      columnsMaxValues
    }
  },
  data () {
    return {

    }
  }
}
</script>
