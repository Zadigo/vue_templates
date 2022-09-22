<template>
  <div class="d-flex flex-column justify-content-start">
    <input v-model="value" :type="inputType" class="form-control" @mouseenter="showLabel" @mouseleave="showLabel">
    <label ref="label" for="a" class="f text-muted">Google</label>
  </div>
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
  // data () {
  //   return {
  //     showLabel: false
  //   }
  // },
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
    showLabel () {
      if (this.$refs.label.classList.contains('show')) {
        this.$refs.label.classList.remove('show')
      } else {
        this.$refs.label.classList.add('show')
      }
    }
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
