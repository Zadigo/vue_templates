<template>
  <products-layout>
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

      <!-- Modals -->
      <base-modal id="quick-product-details" :show="showQuickProductDetails" static-backdrop @close="showQuickProductDetails = false" />
    </div>
  </products-layout>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue'
import BaseModal from '@/layouts/bootstrap/BaseModal.vue'
import DropdownItem from '@/layouts/bootstrap/buttons/DropdownItem.vue'
import DropdownMenu from '@/layouts/bootstrap/buttons/DropdownMenu.vue'
import ProductCard from '@/components/ecommerce/ProductCard.vue'
import ProductsLayout from '@/layouts/ecommerce/ProductsLayout.vue'
// import ProductsLayoutWithAside from '@/layouts/ecommerce/ProductsLayoutWithAside.vue'

export default {
  name: 'ProductsView',
  components: {
    BaseButton,
    BaseDropdownButton,
    BaseModal,
    DropdownItem,
    DropdownMenu,
    ProductCard,
    ProductsLayout,
    // ProductsLayoutWithAside
  },
  data () {
    return {
      showQuickProductDetails: false
    }
  }
}
</script>
