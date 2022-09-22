<template>
  <input v-model="value" :type="inputType" class="form-control">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    initial: {
      type: String,
    }
  },
  emits: {
    'update:initial'() {
      return true
    }
  },
  computed: {
    value: {
      get () {
        return this.initial
      },
      set (value) {
        this.$emit('update:initial', value)
      }
    }
  }
}
</script>
