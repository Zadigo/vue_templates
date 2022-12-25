<template>
  <select v-model="value" class="form-select">
    <option v-for="(item, i) in items" :key="i">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    items: {
      type: Array
    },
    modelValue: {
      type: String
    }
  },
  emits: {
    'update:modelValue' () {
      return true
    }
  },
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        return this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
</style>
