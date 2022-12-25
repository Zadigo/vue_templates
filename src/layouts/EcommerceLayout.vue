<template>
  <section id="ecommerce">
    <div class="fixed-top">
      <nav class="py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
          </ul>
  
          <ul class="nav">
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Sign up</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
          </ul>
        </div>
      </nav>
      
      <header class="py-3 mb-4 border-bottom bg-white shadow-sm">
        <div class="container d-flex flex-wrap justify-content-center">
          <router-link :to="{ name: 'products_view' }" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <span class="fs-4 fw-bold text-uppercase">Ecommerce</span>
          </router-link>

          <ul class="nav m-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'products_view' }" class="nav-link link-dark text-uppercase" @mouseenter="showDropmenu = true">Robes</router-link>
              <div :class="{ show: showDropmenu }" class="dropdown-menu p-4" style="width:100%;height:auto;left:0;" @mouseleave="showDropmenu = false">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-auto">
                      <img :src="require('@/assets/ecommerce1.jpg')" height="200" width="200" class="img-fluid" alt="">
                      <!-- <router-link id="view-collection" :to="{ name: 'checkout_view '}">
                      </router-link> -->
                    </div>

                    <div class="col-auto">
                      <h6 class="text-uppercase">Achetez par tendance</h6>
                      <div class="d-flex justify-content-aroud flex-column fw-light text-muted">
                        <!-- <router-link v-for="i in 8" id="view-collection" :key="i" :to="{ name: 'checkout_view' }" class="link-dark">Achat par tendance {{ i }}</router-link> -->
                      </div>
                    </div>

                    <div class="col-auto">
                      <h6 class="text-uppercase">Achetez par longueur</h6>
                      <div class="d-flex justify-content-aroud flex-column fw-light text-muted">
                        <!-- <router-link v-for="i in 4" id="view-collection" :key="i" :to="{ name: 'checkout_view' }" class="link-dark">Achat par longueur {{ i }}</router-link> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul class="nav">
            <li class="nav-item">
              <a href class="nav-link link-dark px-2" @click.prevent="showQuickCart = !showQuickCart">Cart</a>
              <dropdown-menu :show="showQuickCart" style="width: 400px;">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="alert alert-success">
                        Eligible pour la LIVRAISON STANDARD GRATUITE!
                      </div>
                    </div>
            
                    <div class="wrapper" style="overflow-y:scroll;height:300px;">
                      <div v-for="i in 3" :key="i" class="my-1 p-2 d-flex justify-content-left gap-4">
                        <router-link id="cta-from-quick-product-details" :to="{ name: 'product_view', params: { id: 1 } }">
                          <img :src="require('@/assets/ecommerce1.jpg')" width="80" alt="">
                        </router-link>
            
                        <div class="info ms-4">
                          <p class="text-muted m-0">Some product name / XS</p>
                          <p class="fw-bold">31€</p>
                          <div class="input-group">
                            <button id="cta-quick-remove-quantity" type="button" class="btn btn-outline-dark shadow-none btn-rounded">-</button>
                            <input type="text" class="form-control" style="width: 40px">
                            <button id="cta-quick-add-quantity" type="button" class="btn btn-outline-dark shadow-none btn-rounded">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <div class="py-3">
                      <div class="fw-bold fs-4">35€</div>
                    </div>
            
                    <div class="p-3">
                      <router-link id="cta-view-cart-from-quick" :to="{ name: 'checkout_view' }" class="btn btn-rounded btn-dark btn-block btn-lg">
                        Voir le panier (3)
                      </router-link>
                    </div>
                  </div>
                </div>
              </dropdown-menu>
            </li>
          </ul>
  
          <!-- <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
          </form> -->
        </div>
      </header>
    </div>

    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="page-footer text-center font-small mt-4">
      <div class="pt-4">
        <a class="btn btn-outline-white" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" rel="noopener noreferrer" role="button">Download MDB
          <i class="fas fa-download ml-2"></i>
        </a>
        <a class="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" rel="noopener noreferrer" role="button">Start free tutorial
          <i class="fas fa-graduation-cap ml-2"></i>
        </a>
      </div>
        
      <hr class="my-4">
      
      <div class="pb-4">
        <a href="https://www.facebook.com/mdbootstrap" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="fa-brand fa-facebook-f" />
        </a>
      </div>
    
      <div class="footer-copyright py-3">
        © 2018 Copyright: <router-link :to="{ name: 'products_view' }" class="text-light">Ecommerce</router-link>
      </div>    
    </footer>
  </section>
</template>

<script>
import DropdownMenu from './bootstrap/buttons/DropdownMenu.vue';
export default {
  name: 'EcommerceLayout',
  components: {
    DropdownMenu
  },
  data () {
    return {
      showQuickCart: false,
      showDropmenu: false
    }
  }
}
</script>

<style scoped>
@import url('@/assets/ecommerce.css');
</style>
