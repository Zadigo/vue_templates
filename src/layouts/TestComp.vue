<template>
  <div class="row">
    <div class="col-5 p-5">
      <button type="button" class="btn btn-dark">Google</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  rounded: Boolean
})
const b = computed(function () {
  return {
    b: 1
  }
})
const emit = defineEmits({
  change () {
    return true
  }
})
props.rounded
b.value
emit('change')
</script>

<!-- <script>
export default {
  setup () {
    const props = defineProps({
      rounded: false
    })
    return {
      props
    }
  }
}
</script> -->
