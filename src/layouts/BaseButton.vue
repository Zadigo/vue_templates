<template>
  <router-link v-if="to" :to="to" :class="buttonClasses">
    <slot></slot>
  </router-link>
  
  <button v-else :class="buttonClasses" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'BaseButton',
  props: {
    placeholder: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: [String, Object]
    }
  },
  setup () {
    const target = ref(null)
    return {
      target
    }
  },
  computed: {
    buttonClasses () {
      return [
        'btn',
        {
          [`btn-${this.color}`]: true,
          'disabled': this.placeholder || this.disabled,
          'placeholder': this.placeholder 
        }
      ]
    }
  }
}
</script>
