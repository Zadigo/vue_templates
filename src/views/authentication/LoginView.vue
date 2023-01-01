<template>
  <div class="row">
    <div class="col-12">
      <form id="login" @submit.prevent>
        <base-input id="email" type="email" autocomplete="email" />
        <base-input id="password" type="password" autocomplete="current-password" class="my-2" />
        <button id="cta-login" type="submit" class="btn btn-lg btn-dark btn-block btn-rounded mt-5">
          Login
        </button>
        <div class="mt-3">
          <base-checkbox id="stay-logged-in" label="Keep me logged in" />
        </div>
        <p class="text-muted mt-4">Don't have an account? <router-link :to="{ name: 'signup_view' }">Sign up here</router-link></p>
        <p class="text-muted m-0">Forgot password? <router-link :to="{ name: 'forgot_password_view' }">Reset password</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
export default {
  components: {
    BaseCheckbox,
    BaseInput
  }
}
</script>
