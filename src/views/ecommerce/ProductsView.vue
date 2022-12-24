<template>
  <section id="products" class="container">
    <div class="row">
      <!-- Breadcrumb -->
      <div class="col-12">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="{ name: 'products_view' }">Home</router-link></li>
              <li class="breadcrumb-item">Library</li>
              <li class="breadcrumb-item active" aria-current="page">Current product name</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Header -->
      <div class="p-5 bg-light rounded mb-1">
        <h3>Some title</h3>
        <p class="fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint, sapiente 
          voluptatibus provident commodi magni error! Exercitationem nostrum labore sint numquam, 
          voluptates culpa ea sapiente eveniet repellendus ex! Natus, fuga?
        </p>
        <div class="d-flex justify-content-left gap-2">
          <base-button v-for="i in 4" id="cta-popular-search" :key="i" :to="{ name: 'product_view', params: { id: 1 } }" rounded color="light" class="shadow-none border">
            Search {{ i }}
          </base-button>
        </div>
      </div>
    </div>    

    
    <!-- Products -->
    <div class="row my-4">
      <div class="col-12 d-flex justify-content-end gap-3 align-items-center py-2 mb-2">
        <span>Trier par</span>
        <base-dropdown-button id="cta-filter-products" v-slot="{show, handleClick}" size="sm" class="shadow-none" link-name="Recommander">
          <dropdown-menu :show="show">
            <dropdown-item @click="handleClick('Recommander')">Recommander</dropdown-item>
            <dropdown-item @click="handleClick('Recommander')">Nouveaux arrivage</dropdown-item>
            <dropdown-item @click="handleClick('Recommander')">Les mieux notés</dropdown-item>
            <dropdown-item @click="handleClick('Recommander')">Prix bas à élevé</dropdown-item>
            <dropdown-item @click="handleClick('Recommander')">Prix élevé à bas</dropdown-item>
          </dropdown-menu>
        </base-dropdown-button>
      </div>
      
      <div class="col-12">
        <div class="row">
          <product-card v-for="i in 10" :key="i" class="mb-2" @click:add-to-cart="showQuickProductDetails = true" />
        </div>
      </div>

      <!-- Pagination -->
      <div class="d-flex justify-content-center">
        <base-button id="cta-load-more" size="lg" color="dark">Load more</base-button>
      </div>
    </div>

    <!-- Modals -->
    <base-modal id="quick-product-details" :show="showQuickProductDetails" static-backdrop @close="showQuickProductDetails = false" />
  </section>
</template>

<script>
import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue';
import DropdownItem from '@/layouts/bootstrap/buttons/DropdownItem.vue';
import DropdownMenu from '@/layouts/bootstrap/buttons/DropdownMenu.vue';
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue';
import ProductCard from '@/components/ecommerce/ProductCard.vue';
import BaseModal from '@/layouts/bootstrap/BaseModal.vue';
export default {
  name: 'ProductsView',
  components: {
    BaseDropdownButton,
    DropdownItem,
    DropdownMenu,
    BaseButton,
    ProductCard,
    BaseModal
  },
  data () {
    return {
      showQuickProductDetails: false,
      images: [
        'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg', 
        'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg' 
      ]
    }
  }
}
</script>
