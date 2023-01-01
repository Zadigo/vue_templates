<template>
  <div class="row">
    <div class="col-12">
      <form id="signup" @submit.prevent>
        <base-input id="firstname" type="text" autocomplete="given-name" autocapitalize="true" />
        <base-input id="lastname" type="text" class="my-2" autocomplete="family-name" autocapitalize="true" />
        <base-input id="email" type="email" autocomplete="email" />
        <base-input id="password1" type="password" class="my-2" autocomplete="new-password" />
        <base-input id="password2" type="password" autocomplete="new-password" />
        <button id="cta-signup" type="submit" class="btn btn-lg btn-dark btn-block btn-rounded mt-5">
          Signup
        </button>
        <p class="text-muted mt-4">Already have an account? <router-link :to="{ name: 'login_view' }">Log in here</router-link></p>
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
