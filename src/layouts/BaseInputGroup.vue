<template>
  <div ref="link" class="input-group">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: 'BaseInputGroup',
  setup () {
    const inputs = []
    return {
      inputs
    }
  },
  mounted () {
    const items = this.$refs.link.queryselector('input')
    
    if (items.length === 1) {
      // pa
    } else {
      items.forEach((input) => {
        this.inputs.push(input)
      })
    }
  }
}
</script>

<style scoped>
</style>
