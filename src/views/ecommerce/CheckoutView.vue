<template>
  <section id="products">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <base-card></base-card>
  
          <!-- Delivery -->
          <base-card class="my-2">
            <template #body>
              <div class="alert alert-success m-0">
                Frais de livraison
                Eligible pour la LIVRAISON STANDARD GRATUITE!
              </div>
            </template>
          </base-card>
          
          <!-- Cart -->
          <base-card>
            <template #body>
              <div v-for="i in 3" :key="i" class="bg-light p-1 rounded d-flex justify-content-left gap-3 mb-1">
                <router-link id="cart-view-product" :to="{ name: 'product_view', params: { id: i } }" class="m-0 text-muted">
                  <img :src="require('@/assets/ecommerce1.jpg')" width="100" height="100" class="img-fluid rounded" alt="">
                </router-link>
                
                <div class="info">
                  <router-link id="cart-view-product" :to="{ name: 'product_view', params: { id: i } }" class="m-0 text-muted">Robe moulante à imprimé ruché</router-link>
                  <p class="fw-bold">15€</p>
                  <div class="d-flex justify-content-left gap-2">
                    <base-button id="cart-add-to-favorites" floating color="light" class="shadow-none"><font-awesome-icon icon="fa-solid fa-heart" /></base-button>
                    <base-button id="cart-remove" floating color="light" class="shadow-none"><font-awesome-icon icon="fa-solid fa-trash" /></base-button>
                  </div>
                </div>
              </div>
            </template>
          </base-card>
        </div>
        
        <div class="col-4">
          <!-- Cart -->
          <base-card>
            <template #body>
              <base-button color="dark" size="lg" block rounded>Payer</base-button>
              <base-button color="dark" size="lg" block rounded @click="showRegistrationModal = true">Payer</base-button>
            </template>
          </base-card>

          <base-card class="shadow-none mt-2">
            <template #body>
              Paiement sécurisé
            </template>
          </base-card>
        </div>
      </div>
    </div>

    <div class="bg-light mt-4 py-5">
      <div class="container">
        <div class="row">
          <product-card v-for="i in 6" :key="i" :row-size="2" :body-classes="'bg-light'" />
        </div>
      </div>
    </div>

    <!-- Modals -->
    <base-modal id="registration-modal" :show="showRegistrationModal" size="md" @close="showRegistrationModal = false">
      <template #default>
        <form class="">
          <div class="form-floating mb-3">
            <input id="floatingInput" type="email" class="form-control rounded-3" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input id="floatingPassword" type="password" class="form-control rounded-3" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16">
              <use xlink:href="#twitter"></use>
            </svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16">
              <use xlink:href="#facebook"></use>
            </svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16">
              <use xlink:href="#github"></use>
            </svg>
            Sign up with GitHub
          </button>
        </form>
      </template>
    </base-modal>
  </section>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseModal from '@/layouts/bootstrap/BaseModal.vue'
import ProductCard from '@/components/ecommerce/ProductCard.vue'
export default {
  name: 'CheckoutView',
  components: {
    BaseButton,
    BaseCard,
    BaseModal,
    ProductCard
  },
  data () {
    return {
      showRegistrationModal: false
    }
  }
}
</script>
