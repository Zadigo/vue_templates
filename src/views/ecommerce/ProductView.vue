<template>
  <section id="product" class="container">
    <!-- Product -->
    <div class="row">
      <!-- Breadcrumb -->
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb fw-light">
            <li class="breadcrumb-item"><router-link :to="{ name: 'products_view' }" class="link-dark">Home</router-link></li>
            <li class="breadcrumb-item" aria-current="page">Vêtements pour femmes</li>
            <li class="breadcrumb-item" aria-current="page">Robes pour femmes</li>
            <li class="breadcrumb-item active" aria-current="page">Robe moulante à imprimé à ruché</li>
          </ol>
        </nav>
      </div>

      <!-- Images -->
      <div class="col-sm-12 col-md-7 mb-4">
        <div class="images d-flex justify-content-between gap-2">
          <div class="preview-images d-flex flex-column justify-content-start gap-2">
            <div v-for="i in 4" id="gallery-preview-image" :key="i" class="preview-image">
              <img :src="require('@/assets/ecommerce1.jpg')" height="80" width="80" class="img-fluid" alt="Image 1">
            </div>
          </div>

          <div class="main-image">
            <img :src="require('@/assets/ecommerce1.jpg')" class="img-fluid" alt="Product name">
            <div class="gallery-navigation d-flex justify-content-between align-items-center">
              <base-button id="btn-image-previous" class="shadow-none" color="light" floating><font-awesome-icon icon="fa-solid fa-arrow-left" /></base-button>
              <base-button id="btn-image-next" class="shadow-none" color="light" floating><font-awesome-icon icon="fa-solid fa-arrow-right" /></base-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Product information -->
      <div class="col-sm-12 col-md-5 mb-4" style="position:relative;">
        <div class="px-2" style="position:sticky;top:0;z-index:1;">
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
              <div v-for="i in 3" :key="i" class="color">
                <input :id="`start-${i}`" class="color-value" name="swatch" type="radio">
                <label :for="`start-${i}`" class="color-link">
                  <img :src="require('@/assets/color.jpg')" value="starlight" class="color-swatch">
                </label>
              </div>
            </div>
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

          <div class="alert alert-info fw-light lh-1">
            Certains produits peuvent bénéficier de "QuickShip", qui offre une livraison plus rapide. 
            Veuillez consulter la politique de livraison ci-dessous pour plus de détails.
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

.main-image {
  position: relative;
  transition: all .5s ease-in-out;
}

.main-image:hover .gallery-navigation {
  visibility: visible;
}

.gallery-navigation {
  position: absolute;
  padding: 1rem;
  top: 50%;
  width: 100%;
  visibility: hidden;
}

.preview-images img {
  cursor: pointer;
}

.preview-images img::before {
  border: 1px solid rgb(38, 38, 38);
  box-shadow: inset 0 0 0 2px #fff;
  background: transparent;
}

.breadcrumb {
  font-size: .85rem;
}

.colors {
  display: flex;
  justify-content: left;
  gap: .5rem;
  align-items: center;
}

.colors .color-value {
  /* Hides the radio input */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0 0 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}

.colors .color-link {
  border: 2px solid #fff;
  /* border: 2px solid rgb(38, 38, 38); */
  border-radius: 50%;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  cursor: pointer;
  padding: 3px;
  position: relative;
  width: 42px;
  height: 42px;
  z-index: 1;
  margin-bottom: 0;
  /* float: left; */
}

.colors .color-value:checked+.color-link {
  /* Formats the active element */
  border: 2px solid rgb(38, 38, 38);
}

.colors .color-link:hover {
  border: 1px solid #d2d2d7;
  text-decoration: none;
  padding: 4px;
}

.colors .color-swatch {
  background: #f5f5f7 50%;
  border-radius: 50%;
  display: block;
  width: 32px;
  height: 32px;
}

.colors .color-swatch::after {
  content: "";
  position: absolute;
  border-radius: inherit;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
  display: block;
  height: inherit;
  width: inherit;
}
</style>
