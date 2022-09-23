<template>
  <!-- bottom-0 end-0 -->
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div :class="{show: state}" class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <!-- <img src="" class="rounded me-2" alt="..."> -->
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseToast',
  props: {
    show: {
      type: Boolean
    }
  },
  emits: {
    close () {
      return true
    }
  },
  data () {
    return {
      modelValue: false
    }
  },
  computed: {
    state: {
      get () {
        return this.modelValue || this.show
      },
      set (value) {
        setTimeout(() => {
          this.modelValue = false
          return this.$emit('close', value)
        }, 3000);
      }
    }
  }
}
</script>
