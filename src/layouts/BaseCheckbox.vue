<template>
  <!-- form-check-inline -->
  <div :class="[isSwitch ? 'form-switch' : null]" class="form-check">
    <input :id="id" v-model="value" :role="[ isSwitch ? 'switch' : null]" class="form-check-input" type="checkbox">
    <label :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    isRadio: {
      type: Boolean,
      default: false
    },
    initial: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:initial' () {
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
    },
    checkboxType () {
      if (this.isSwitch && this.isRadio) {
        return 'checkbox'
      } else if (this.isSwitch) {
        return 'checkbox'
      } else if (this.isRadio) {
        return 'radio'
      } else {
        return 'checkbox'
      }
    }
  }
}
</script>
