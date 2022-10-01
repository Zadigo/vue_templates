<template>
  <input v-model="value" :type="inputType" :class="[darkMode ? 'bg-transparent text-light' : null]" class="form-control" @mouseenter="showLabel" @mouseleave="showLabel">
  <!-- <div class="wrapper">
    <label ref="label" :for="id" class="f text-muted">{{ label }}</label>
  </div> -->
</template>

<script>
import { inject } from 'vue'

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
  setup () {
    const darkMode =  inject('darkMode', false)
    return {
      darkMode
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
  },
  methods: {
    // showLabel () {
    //   if (this.$refs.label.classList.contains('show')) {
    //     this.$refs.label.classList.remove('show')
    //   } else {
    //     this.$refs.label.classList.add('show')
    //   }
    // }
  }
}
</script>

<style scoped>
.form-control {
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  /* padding-top: calc(10px + 16px); */
  padding-top: 6px;
  padding-bottom: 6px;
}
label {
  display: none;
}
.f.show {
  display: block;
  animation: slide .4s ease-in-out;
}
.f {
  animation: inverse-slide .4s ease-in-out;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes inverse-slide {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
