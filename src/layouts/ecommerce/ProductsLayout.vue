<template>
  <section id="products" class="container">
    <div class="row">
      <!-- Breadcrumb -->
      <div class="col-12">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="{ name: 'products_view' }">Home</router-link></li>
              <li class="breadcrumb-item">Products</li>
              <!-- <li class="breadcrumb-item active" aria-current="page">Current product name</li> -->
            </ol>
          </nav>
        </div>
      </div>

      <!-- Header -->
      <div class="p-5 bg-light rounded mb-1 bg-image" :style="`background-image:url(${require('@/assets/hero/hero6.jpg')});`">
        <!-- <h3>Cozy corner for the living room at <span class="text-info">a discount up to 40%</span></h3>
        <p class="fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint, sapiente
          voluptatibus provident commodi magni error! Exercitationem nostrum labore sint numquam,
          voluptates culpa ea sapiente eveniet repellendus ex! Natus, fuga?
        </p> -->

        <h2 class="mb-0 fs-1">Cozy corner for the living room</h2>
        <h2 class="mb-5 fs-1">at <span class="text-light">a discount up to 40%</span></h2>
        <div class="d-flex justify-content-left gap-2">
          <base-button v-for="i in 4" id="cta-popular-search" :key="i" :to="{ name: 'product_view', params: { id: 1 } }" rounded color="light" class="shadow-none border">
            Search {{ i }}
          </base-button>
        </div>
      </div>
    </div>

    <!-- Products -->
    <slot></slot>
  </section>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'

export default {
  name: 'ProductsLayout',
  components: {
    BaseButton
  }
}
</script>
