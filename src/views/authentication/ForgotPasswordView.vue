<template>
  <div class="row">
    <div class="col-12">
      <form id="forgot-password" @submit.prevent>
        <base-input id="email" type="email" autocomplete="current-password" />
        <button id="cta-forgot-password" type="submit" class="btn btn-lg btn-dark btn-block btn-rounded mt-5">
          Reset password
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
export default {
  components: {
    BaseInput
  }
}
</script>
