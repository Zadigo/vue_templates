<template>
  <article class="col-sm-12 col-md-3" @mouseenter="handleShowCart" @mouseleave="handleHideCart">
    <base-template-card class="shadow-none">
      <div class="cart-wrapper">
        <router-link id="link-product-details" :to="{ name: 'product_view', params: { id: 1 } }">
          <img :src="require('@/assets/ecommerce1.jpg')" class="card-img-top" alt="Robe Kendall">
        </router-link>

        <transition name="slide">
          <base-button v-if="showCartButton && allowAddToCart" id="cta-products-add-to-cart" size="sm" color="light" class="shadow-none" rounded @click="handleAddToCart">
            Add to cart
          </base-button>
        </transition>
      </div>

      <div class="card-body px-0 py-1">
        <router-link id="link-product-details" :to="{ name: 'product_view', params: { id: 1 } }" class="text-muted mb-1 text-left link-dark">
          Robe Kendall
        </router-link>

        <div class="d-flex justify-content-between align-items-center">
          <p class="fw-bold m-0">15€</p>
          <base-button id="cta-products-like-product" size="sm" color="light" class="shadow-none" floating>
            <font-awesome-icon icon="fa-solid fa-heart" />
          </base-button>
        </div>
      </div>
    </base-template-card>
  </article>
</template>

<script>
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue';
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue';
export default {
  name: 'ProductCard',
  components: {
    BaseTemplateCard,
    BaseButton
  },
  props: {
    allowAddToCart: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    'click:add-to-cart' () {
      return true
    }
  },
  data () {
    return {
      showCartButton: false
    }
  },
  methods: {
    handleShowCart () {
      if (this.allowAddToCart) {
        this.showCartButton = true
      }
    },
    handleHideCart () {
      if (this.allowAddToCart) {
        this.showCartButton = false
      }
    },
    handleAddToCart () {
      this.$emit('click:add-to-cart')
    }
  }
}
</script>

<style scoped>
.cart-wrapper {
  position: relative;
  overflow: hidden;
}

.cart-wrapper #cta-products-add-to-cart {
  position: absolute;
  bottom: 5%;
  left: 30%;
  z-index: 200;
}

/* article {
  transition: all .15s ease-in-out;
}

article:hover img {
  transform: scale(1.2, 1.2) rotate(-5deg);
} */
</style>
