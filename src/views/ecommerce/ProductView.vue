<template>
  <section id="product" class="container">
    <!-- Product -->
    <div class="row">
      <!-- Breadcrumb -->
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'products_view' }">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
      </div>

      <!-- Images -->
      <div class="col-sm-12 col-md-7 mb-4">
        <div class="images d-flex justify-content-between gap-2">
          <div class="preview-images d-flex flex-column justify-content-start gap-2">
            <img v-for="i in 4" id="cta-preview-image" :key="i" :src="require('@/assets/ecommerce1.jpg')" height="100" width="100" class="img-fluid" alt="Image 1">
          </div>

          <div class="main-image">
            <img :src="require('@/assets/ecommerce1.jpg')" class="img-fluid" alt="Product name">
          </div>
        </div>
      </div>

      <!-- Product information -->
      <div class="col-sm-12 col-md-5 mb-4">
        <div class="p-44">
          <h1 class="fs-5">Jupe Kendall</h1>
          <p class="fw-light mb-1">SKU: sw2210184966428951</p>
          <div class="rating mb-2">
            <font-awesome-icon v-for="i in 5" :key="i" :class="{ 'text-light': i > 3}" icon="fa-solid fa-star" /> <a id="cta-read-reviews" href="#reviews" class="text-warning">(1500 commentaires)</a>
          </div>
          <div class="display-6 fw-bold">440€</div>

          <hr>

          <div class="choose-color my-3">
            <p class="mb-1 fs-6 mb-3"><span class="fw-bold">Couleur :</span> Bleu</p>
            <div class="colors">
              <div v-for="i in 3" id="cta-product-color" :key="i" :class="{ active: i === 1 }" class="color">
                <div class="inner">
                  <img :src="require('@/assets/color.jpg')">
                </div>
              </div>
            </div>
            <!-- <router-link v-for="i in 3" :key="i" :to="{ name: 'product_view', params: { id: 1 } }">Color {{ i }}</router-link> -->
          </div>

          <div class="choose-size my-4">
            <p class="mb-1 fs-6 mb-3"><span class="fw-bold">Sizes</span> (FR)</p>
            <div class="sizes">
              <a v-for="size in ['XS', 'S', 'M']" id="cta-product-size" :key="size" href :class="{ border: size === newProduct.size }" class="size link-dark bg-light" @click.prevent="newProduct.size = size">
                {{ size }}
              </a>
            </div>

            <a id="cta-size-guide" href class="fw-bold my-3 d-block" @click.prevent="showSizeGuide = true">
              Guide des tailles
            </a>
          </div>

          <div class="d-flex justify-content-left gap-2 my-4">
            <base-button id="cta-product-add-to-cart" size="lg" color="dark">Ajouter au panier</base-button>
            <base-button id="cta-product-like-product" size="lg" color="danger">
              <font-awesome-icon icon="fa-solid fa-heart" />
            </base-button>
          </div>

          <!-- Reassurance -->
          <div class="bg-light p-3 rounded">
            <div class="row">
              <div class="col-12">
                <a href class="link-dark" @click.prevent="showDeliveryDetails = true">
                  <div class="d-flex justify-content-left gap-3">
                    <font-awesome-icon icon="fa-solid fa-eye" class="mt-1" />
                    <div>
                      <p class="m-0 fw-bold">Livraison gratuite</p>
                      <p class="fw-light">Livraison standard gratuite dès 39.9€ d'achat 10-12 jours ouvrés</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12">
                <a href class="link-dark" @click.prevent="showReturnPolicy = true">
                  <div class="d-flex justify-content-left gap-3">
                    <font-awesome-icon icon="fa-solid fa-eye" class="mt-1" />
                    <div>
                      <p class="m-0 fw-bold">Politique de retour</p>
                      <p class="fw-light">En savoir plus</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="description py-3">
            <p class="fw-bold">Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi placeat non, 
              architecto at eveniet, veritatis magni quas ullam voluptatum, aut esse. Mollitia adipisci 
              repellat inventore cum officiis quae veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div id="reviews" class="row">
      Reviews
    </div>

    <div class="row">
      <div id="section-recently-viewed" class="col-sm-12 col-md-12">
        <h3 class="mt-3 h2">Articles Également Consultés</h3>
        <div class="row">
          <product-card v-for="i in 4" :key="i" :allow-add-to-cart="false" />
        </div>
      </div>

      <div id="section-more" class="col-sm-12 col-md-12">
        <h3 class="mt-4 h2">Ceci pourrait vous intéréssé</h3>
        <div class="row">
          <product-card v-for="i in 4" :key="i" :allow-add-to-cart="false" />
        </div>
      </div>
    </div>

    <!-- Ad -->
    <!-- <div id="section-ad" class="container bg-light p-6 my-4" style="background-image:url(`${require('@/assets/ad.jpg')}`);width:100%;height:260px;"></div> -->

    <!-- Modals -->
    <base-modal id="size-guide" :show="showSizeGuide" @close="showSizeGuide = false"></base-modal>
    <base-modal id="delivery-details" :show="showDeliveryDetails" size="sm" @close="showDeliveryDetails = false"></base-modal>
    <base-modal id="return-policy" :show="showReturnPolicy" size="sm" @close="showReturnPolicy = false"></base-modal>
  </section>
</template>


<script>
import BaseModal from '@/layouts/bootstrap/BaseModal.vue';
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import ProductCard from '@/components/ecommerce/ProductCard.vue';
export default {
  components: {
    BaseModal,
    BaseButton,
    ProductCard
  },
  data () {
    return {
      showSizeGuide: false,
      showDeliveryDetails: false,
      showReturnPolicy: false,
      newProduct: {
        size: 'XS'
      }
    }
  },
  watch: {
    '$route.params.id' (current, previous) {
      current
      previous
    }
  }
}
</script>

<style scoped>
.colors {
  display: flex;
  justify-content: left;
  gap: .5rem;
  align-items: center;
}

.colors .color {
  position: relative;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
  width: 36px;
  height: 36px;
  line-height: 28px;
}

.colors .color:hover:not(.color.active) {
  border: 1px solid rgb(38, 38, 38);
}

.colors .inner {
  position: absolute;
  top: 0px;
  left: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.colors img {
  height: 28px;
  width: 28px;
  vertical-align: middle;
  border-radius: 50%;
}

.colors .active {
  border: 2px solid rgb(38, 38, 38);
}

.sizes {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .5rem;
}

.sizes .size {
  padding: .375rem 1.5rem;
  border-radius: 10rem;
  vertical-align: bottom;
  text-align: center;
}
</style>
