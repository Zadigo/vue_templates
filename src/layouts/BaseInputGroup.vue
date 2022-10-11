<template>
  <div ref="link" class="input-group">
    <div class="input-group-text">
      <slot name="left" />
    </div>

    <slot />
    
    <div class="input-group-text">
      <slot name="right" />
    </div>
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
