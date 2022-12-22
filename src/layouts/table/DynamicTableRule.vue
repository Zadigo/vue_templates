<template>
  <div class="badge rounded-pill text-bg-info p-2 me-1 d-flex justify-content-around align-items-center">
    <font-awesome-icon icon="fa-solid fa-filter" class="me-2" />
    {{ getRuleText(rule) }}
    <font-awesome-icon icon="fa-solid fa-caret-down" class="ms-2" />
  </div>
</template>

<script>
export default {
  name: 'DynamicTableRule',
  props: {
    // index: {
    //   type: Number,
    //   required: true
    // },
    rule: {
      type: Object,
      required: true
    }
  },
  methods: {
    getRuleText (rule) {
      const constraint = ['Is', 'Contains']
      if (constraint.includes(rule.operator)) {
        return `${rule.column}: ${rule.constraint}`
      } else {
        return `${rule.column}: ${rule.operator} ${rule.constraint}`
      }
    }
  }
}
</script>

<style scoped>
.badge {
  cursor: pointer;
}
</style>
