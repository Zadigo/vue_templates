<template>
  <section id="features">
    <div class="container my-5">
      <h2 class="alert alert-info">Features</h2>
      <!-- Feature 1 -->
      <section class="p-5 shadow text-center">
        <div class="col-md-8 ms-auto me-auto">
          <h3 class="fw-bold p-4">Booking with us is easy</h3>
          <!-- <p class="description">
            This is the paragraph where you can write more details about your product. Keep you user 
            engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise 
            he wouldn't scroll to get here. Add a button if you want the user to see more.
          </p> -->
        </div>
        
        <div class="row mt-5">
          <div class="col-4">
            <img :src="require('@/assets/icons/pin.png')" height="90" width="90" class="img-fluid mb-3" alt="Pin">
            <h5 class="fw-bold">Find the perfect rental</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
          <div class="col-4">
            <img :src="require('@/assets/icons/rocket.png')" height="90" width="90" class="img-fluid mb-3" alt="Pin">
            <h5 class="fw-bold">Book with confidence</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
          <div class="col-4">
            <img :src="require('@/assets/icons/rocket.png')" height="90" width="90" class="img-fluid mb-3" alt="Pin">
            <h5 class="fw-bold">Enjoy your vacation</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
        </div>
      </section>

      <!-- Feature 2 -->
      <section class="p-5 shadow my-4">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-7">
            <img :src="require('@/assets/hero3.jpg')" class="img-fluid rounded" alt="Hero">
          </div>
  
          <div class="col-sm-12 col-md-5 py-3 gx-5">
            <h2 class="fw-bold">Find the perfect rental</h2>

            <div class="mt-5">
              <div class="d-flex justify-content-around align-top gap-4">
                <div class="mt-2">
                  <img :src="require('@/assets/icons/rocket.png')" height="130" width="130" class="img-fluid" alt="Rocket">
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Custom conversion tracking</h5>
                  <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptates molestias obcaecati.</p>
                </div>
              </div>
            </div>
            
            <div class="mt-5">
              <h5 class="fw-bold mb-1">Custom conversion tracking</h5>
              <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptates molestias obcaecati.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature 3 -->
      <section class="p-5 shadow">      
        <div class="row mt-5">
          <div class="col-sm-12 col-md-4 gx-5">
            <img :src="require('@/assets/ecommerce1.jpg')" class="img-fluid mb-3 rounded" alt="Pin">
            <h5 class="fw-bold mt-2 mb-4">Find the perfect rental</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
          <div class="col-sm-12 col-md-4 gx-5">
            <img :src="require('@/assets/ecommerce1.jpg')" class="img-fluid mb-3 rounded" alt="Pin">
            <h5 class="fw-bold mt-2 mb-4">Book with confidence</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
          <div class="col-sm-12 col-md-4 gx-5">
            <img :src="require('@/assets/ecommerce1.jpg')" class="img-fluid mb-3 rounded" alt="Pin">
            <h5 class="fw-bold mt-2 mb-4">Enjoy your vacation</h5>
            <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
        </div>
      </section>

      <!-- Feature 4 -->
      <section class="p-5 shadow my-4">
        <div class="mx-5 mb-5">
          <h2 class="fw-bold mb-1">Booking with us is easy</h2>
          <p class="text-muted fs-5">Converter Ipod Video Taking Portable Video Viewing To A Whole New Level</p>
        </div>

        <img :src="require('@/assets/strip.webp')" class="img-fluid" alt="Image">

        <div class="row justify-content-center pt-5 mx-5">
          <div class="col-4">
            <h5 class="mb-3">Native Integrations</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div class="col-4">
            <h5 class="mb-3">Simple Migrations</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div class="col-4">
            <h5 class="mb-3">Flexible API</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>

      <!-- Feature 5 -->
      <section class="shadow d-flex justify-content-between gap-2 align-items-center">
        <div class="me-4">
          <img :src="require('@/assets/hero1.jpg')" class="img-fluid" alt="">
        </div>

        <div class="p-5">
          <h2 class="fw-bold">Booking with us is easy</h2>
          <p class="text-muted my-3">
            The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of 
            the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, 
            clothed in gold is approximately 45 cm tall.
          </p>
          <button type="button" class="btn btn-lg btn-dark mt-2">Disover more</button>
        </div>
      </section>

      <!-- Feature 6 -->
      <section :style="`background-image: url(${require('@/assets/hero3.jpg')})`" class="p-5 shadow my-4 bg-image">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6">
            <img :src="require('@/assets/hero3.jpg')" class="img-fluid rounded" alt="Hero">
          </div>
      
          <div class="col-sm-12 col-md-6 gx-5">
            <p class="text-muted text-uppercase mb-2 fs-7 fw-bold">Modern design</p>
            <h2 class="fw-bold mb-5">If you had to eat just one thing for the rest of your life, what would you choose?</h2>
      
            <div class="d-flex justify-content-start gap-3 mt-5">
              <button type="button" class="btn btn-lg btn-outline-dark">See others</button>
              <button type="button" class="btn btn-lg btn-dark">Make lemonade</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature 7 -->
      <section class="p-5 shadow">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12">
            <img :src="require('@/assets/hero3.jpg')" class="img-fluid rounded" alt="Hero">
          </div>
      
          <div class="col-sm-12 col-md-8 offset-md-2 gy-5 text-center">
            <h2 class="fw-bold">Understanding Operating Systems</h2>
            <p class="text-muted my-4">If you are looking for great ways to decorate your home or office, then you know as well as I do that you have nearly countless options.</p>
            <div class="d-flex justify-content-center gap-3">
              <button type="button" class="btn btn-lg btn-dark">Make lemonade</button>
              <button type="button" class="btn btn-lg btn-outline-dark">See others</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature 8 -->
      <section class="p-5 shadow my-4">      
        <img :src="require('@/assets/strip.webp')" class="img-fluid rounded" alt="Image">
      
        <div class="row justify-content-center pt-5 mx-5">
          <div class="col-4">
            <h5 class="mb-3">Native Integrations</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div class="col-4">
            <h5 class="mb-3">Simple Migrations</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div class="col-4">
            <h5 class="mb-3">Flexible API</h5>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>

      <!-- Feature 9 -->
      <section class="p-5 shadow bg-light">
        <div class="row p-4">
          <div class="col-12">
            <h2 class="text-center mb-5">Checkout the services</h2>
          </div>
          
          <div v-for="i in 6" :key="i" :class="{ 'border-bottom': i > 3, 'border-start': i === 1 || i === 4 }" class="col-4 border-top border-end p-5 text-center">
            <font-awesome-icon icon="fa-solid fa-table" size="2x" class="mb-3" />
            <p class="fw-bold mb-1">Construction Work</p>
            <p class="fw-light text-muted">Cellulite is fat that is caught between bands of connective tissue directly beneath.</p>
          </div>
        </div>
      </section>

      <!-- Feature 10 -->
      <!-- TODO: Padding overflow -->
      <section class="shadow my-4">
        <div class="row">
          <div :style="`background-image: url(${require('@/assets/hero3.jpg')});`" class="col-sm-12 col-md-6 p-5 bg-image text-light">
            <h3 class="fw-bold">Cultivate value-added ROI</h3>
            <p class="my-4">Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble!</p>
            <button type="button" class="btn btn-dark btn-lg btn-rounded">View more</button>
          </div>
          
          <div class="col-sm-12 col-md-6 p-5 text-dark">
            <h3 class="fw-bold">Cultivate value-added ROI</h3>
            <p class="my-4">Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble!</p>
            <button type="button" class="btn btn--outline-dark btn-lg btn-rounded">View more</button>
          </div>
        </div>
      </section>

      <!-- Feature 11 - Ecommerce -->
      <section class="p-4 shadow position-relative">
        <div class="row pb-2 pb-sm-3 pb-md-4 mb-xxl-2 g-4">
          <div class="col-md-6">
            <div class="hotspots hotspots-alt">
              <img :src="require('@/assets/ecommerce/deco1.jpg')" class="d-block rounded-1 img-fluid" alt="Image">
              <a class="hotspot" style="top: 20%; left: 27%;" tabindex="0" role="button">
                <div class="hotspot-inner"></div>
              </a>
              
              <a class="hotspot" style="top: 14.7%; right: 32.7%;" tabindex="0" role="button">
                <div class="hotspot-inner"></div>
              </a>
              
              <a class="hotspot" style="bottom: 41%; left: 34.6%;" tabindex="0" role="button">
                <div class="hotspot-inner"></div>
              </a>
              
              <a class="hotspot" style="bottom: 24.3%; right: 27.5%;" tabindex="0" role="button">
                <div class="hotspot-inner"></div>
              </a>
            </div>
          </div>
  
          <div class="col-sm-6 col-md-3">
            <img :src="require('@/assets/ecommerce/deco2.jpg')" class="d-block rounded-4 mb-4 img-fluid" alt="Image">
            <img :src="require('@/assets/ecommerce/deco4.jpg')" class="rounded-4 img-fluid" alt="Image">
          </div>
          
          <div class="col-sm-6 col-md-3">
            <img :src="require('@/assets/ecommerce/deco3.jpg')" class="rounded-4 img-fluid" alt="Image">
          </div>
        </div>
      </section>

      <!-- Feature 12 - Ecommerce -->
      <section class="p-4 shadow container my-4">
        <div class="mt-n3 mt-sm-0 pb-5 mb-1 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
          <div class="row g-4 pb-2 pb-md-4">
            <div class="col-md-4">
              <!-- Card-->
              <div class="card zoom-effect h-100 border-0 rounded-1 overflow-hidden" style="min-height:320px;">
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 zindex-2"></span>
                
                <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                  <div :style="`background-image: url(${require('@/assets/ecommerce/intro1.jpg')});`" class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"></div>
                </div>
                
                <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none zindex-3" href="shop-catalog.html">
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the living room</span>
                </a>
              </div>
            </div>
  
            <div class="col-md-8">
              <!-- Card-->
              <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 zindex-2"></span>
                
                <div class="zoom-effect-wrapper rounded-1">
                  <img :style="`background-image: url(${require('@/assets/ecommerce/intro2.jpg')});`" class="zoom-effect-img" alt="Category image">
                </div>
                
                <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none zindex-3" href="shop-catalog.html">
                  <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the kitchen</span>
                </a>
              </div>
              <div class="row g-4 pt-4">
                <div class="col-sm-6">
                  <!-- Card-->
                  <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 zindex-2"></span>
                    
                    <div class="zoom-effect-wrapper rounded-1">
                      <img :style="`background-image: url(${require('@/assets/ecommerce/intro3.jpg')});`" class="zoom-effect-img" alt="Category image">
                    </div>
                    
                    <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none zindex-3" href="shop-catalog.html">
                      <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bathroom</span>
                    </a>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <!-- Card-->
                  <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 zindex-2"></span>
                    
                    <div class="zoom-effect-wrapper rounded-1">
                      <img :style="`background-image: url(${require('@/assets/ecommerce/intro4.jpg')});`" class="zoom-effect-img" alt="Category image">
                    </div>
                    
                    <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none zindex-3" href="shop-catalog.html">
                      <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bedroom</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h4 class="alert alert-info mt-5">Testimonies</h4>

      <!-- Testimony  1 -->
      <section class="p-5 shadow text-center">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-11 offset-md-1">
              <img :src="require('@/assets/brands/airbnb.webp')" alt="">
              <h5 class="fw-bold mt-5 fs-2 lh-2">“Amazing experience i love it a lot. Thanks to the team that dreams come true, great!”</h5>
              <p class="m-0 mt-3 fs-5">Jorge Peterson, CEO Optimisation</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimony  2 -->
      <section class="p-5 shadow text-center my-4">
        <div class="container">
          <div class="row">
            <div class="col-md-1 d-flex justify-content-center align-items-center">
              <button type="button" class="btn btn-floating shadow-none btn-light btn-lg">
                <font-awesome-icon icon="fa-solid fa-arrow-left" />
              </button>
            </div>

            <div class="col-sm-12 col-md-10">
              <img :src="require('@/assets/avatar.webp')" width="80" height="80" class="rounded-circle" alt="">
              <h5 class="fw-bold my-3 fs-2 lh-2">“Amazing experience i love it a lot. Thanks to the team that dreams come true, great!”</h5>
              <p class="m-0 mt-3 fs-5">Jorge Peterson, CEO Optimisation</p>
            </div>
            
            <div class="col-md-1 d-flex justify-content-center align-items-center">
              <button type="button" class="btn btn-floating shadow-none btn-light btn-lg">
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <h4 class="alert alert-info mt-5">Pricing</h4>

      <!-- Pricing -->
      <section class="shadow p-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-pricing card-margin">
                <div class="card-body">
                  <h6 class="card-category">HTML Package</h6>
                  <h1 class="card-title"><small>$</small>79</h1>
                  <ul>
                    <li><b>HTML/CSS/JS/SASS</b> Files</li>
                    <li><b>Fully Coded</b> Components</li>
                    <li><b>Responsive</b> Design</li>
                    <li>Product<b> Documentation</b></li>
                  </ul>
                  <button type="button" class="btn btn-primary btn-rounded mt-3">
                    Buy Now!
                  </button>
                </div>
              </div>
            </div>
  
            <div class="col-md-6">
              <div class="card card-pricing">
                <div class="card-body">
                  <h6 class="card-category">HTML &amp; Photoshop Package</h6>
                  <h1 class="card-title"><small>$</small>139</h1>
                  <ul>
                    <li><b>HTML/CSS/JS/SASS</b> Files</li>
                    <li><b>Fully Coded</b> Components</li>
                    <li><b>Responsive</b> Design</li>
                    <li>Product<b> Documentation</b></li>
                    <li><b>+ Photoshop</b> Files</li>
                    <li><b>+ Components</b> on Layers</li>
                  </ul>
                  <button type="button" class="btn btn-primary btn-rounded mt-3">
                    Buy Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    document.body.style.background = 'rgba(249, 249, 249, 1)'
  },
  beforeUnmount () {
    document.body.style.background = null
  }
}
</script>

<style scoped>
.card-pricing {
  text-align: center;
}
.index-page .section-pricing .card-margin,
.presentation-page .section-pricing .card-margin {
  margin-top: 80px;
}
.card .card-category:not([class*=text-]) {
  color: #999;
}
.card .card-category {
  margin-top: 10px;
}
.card-pricing ul {
  list-style: none;
  padding: 0;
  max-width: 240px;
  margin: 10px auto;
}
.card-pricing ul li {
  color: #999;
  text-align: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(153, 153, 153, .3);
}
.card-pricing ul li b {
  color: #000;
}
.card-pricing h1 small {
  font-size: 18px;
  display: -webkit-inline-box;
  display: inline-flex;
  height: 0;
}
.card-pricing h1 small:first-child {
  position: relative;
  top: -17px;
  font-size: 26px;
}
.card-pricing .card-title {
  margin-top: 30px;
}
.card-description,
.description,
.footer-big p {
  color: #999;
}

/* Ecommerce - Gallery */
.hotspots,
.hotspots-alt {
  position: relative;
}
.hotspots .hotspot,
.hotspots-alt .hotspot {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color .25s ease-in-out, background-color .25s ease-in-out;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
}
.hotspots .hotspot {
  width: 2rem;
  height: 2rem;
  border: 1px rgba(255, 255, 255, .4);
}
.hotspots .hotspot-inner,
.hotspots-alt .hotspot-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color .25s ease-in-out, background-color .25s ease-in-out;
  border-radius: 50%;
}

.hotspots .hotspot-inner {
  width: calc(2rem - 1rem);
  height: calc(2rem - 1rem);
  background-color: #fff;
  color: #448c74;
  font-weight: 600;
}
.hotspots-alt .hotspot {
  background-color: rgba(255, 255, 255, .1);
  backdrop-filter: blur(0.25rem);
}
.hotspots .hotspot:hover,
.hotspots .hotspot:focus {
  background-color: rgba(68, 140, 115, 0.2);
  border-color: #448c74;
}

.hotspots .hotspot:hover hotspot-inner,
.hotspots .hotspot:focus hotspot-inner  {
  background-color: #448c74;
  color: #fff;
}
.zoom-effect-wrapper {
  position: relative;
  transform: translateZ(0);
  overflow: hidden;
}
.zoom-effect:hover .zoom-effect-img {
  transform: scale(1.05);
}

.zoom-effect-img {
  display: block;
  transition: transform .4s ease-in-out;
}
</style>
