<template>
  <main style="flex:1 0 auto;">
    <section class="container py-5 mt-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
      <div class="row pb-sm-1 pb-md-4">
        <!-- Gallery-->
        <div class="col-md-6 gallery mb-3 mb-md-0">
          <!-- Item-->
          <div class="d-block gallery-item card-hover zoom-effect mb-4">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden zindex-2 opacity-0">
              <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
    
            <div class="zoom-effect-wrapper rounded-1">
              <div class="zoom-effect-img bg-secondary p-4">
                <img :src="require('@/assets/ecommerce/candle1.png')" class="d-block mx-auto" width="562" alt="Candle image #1">
              </div>
            </div>
          </div>
          
          <div class="row row-cols-1 row-cols-sm-2 g-4 mb-4">
            <!-- Item-->
            <div class="col">
              <div class="d-block gallery-item card-hover zoom-effect">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden zindex-2 opacity-0">
                  <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                </div>
    
                <div class="zoom-effect-wrapper rounded-1">
                  <div class="zoom-effect-img bg-secondary p-4">
                    <img :src="require('@/assets/ecommerce/candle1.png')" class="d-block mx-auto" width="226" alt="Candle image #2">
                  </div>
                </div>
              </div>
            </div>
    
            <!-- Item-->
            <div class="col">
              <div class="d-block gallery-item card-hover zoom-effect">
                <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden zindex-2 opacity-0"><i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
                  <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
                </div>
                <div class="zoom-effect-wrapper rounded-1">
                  <div class="zoom-effect-img bg-secondary p-4">
                    <img :src="require('@/assets/ecommerce/candle2.png')" class="d-block mx-auto" width="226" alt="Candle image #3">
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Item-->
          <div class="d-block gallery-item card-hover zoom-effect">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden zindex-2 opacity-0">
              <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
    
            <div class="zoom-effect-wrapper rounded-1">
              <div class="zoom-effect-img bg-secondary p-4">
                <img :src="require('@/assets/ecommerce/candle3.png')" class="d-block mx-auto" width="460" alt="Candle image #4">
              </div>
            </div>
          </div>
        </div>
    
        <!-- Product details-->
        <div class="col-md-6 col-xl-5 offset-xl-1">
          <div class="d-none d-md-block" style="margin-top: -90px;"></div>
          <div class="position-md-sticky top-0 ps-md-4 ps-lg-5 ps-xl-0">
            <div class="d-none d-md-block" style="padding-top: 90px;"></div>
            <div class="d-flex align-items-center pt-3 py-3"><span class="badge bg-faded-danger text-danger d-none d-md-inline-block me-4">Sale</span><span class="fs-sm">V00273124</span></div>
            <h1 class="d-none d-md-inline-block pb-1 mb-2">Scented candle</h1>
            <p class="fs-sm mb-4">Find aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur neque congue aliqua dolor do amet sint ovar velit.</p>
            <div class="d-none d-md-flex align-items-center pb-3 mb-3">
              <div class="h3 mb-0 me-3">$14.00</div>
              <del class="fs-5 fw-medium text-muted">$19.00</del>
            </div>
            <!-- Color button selector-->
            <div class="h6">Color:<span id="colorOption" class="text-muted fw-normal ms-1">Gray concrete</span></div>
            <div class="d-flex pb-3">
              <div class="me-2 mb-2">
                <input id="color1" class="btn-check" type="radio" name="color" value="Gray concrete" checked>
                <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" for="color1">
                  <span :style="`width: 1.5rem; height: 1.5rem; background-color: #c0c0c0; background-image: url(${require('@/assets/ecommerce/marble.jpg')});`" class="d-block bg-size-cover bg-position-center rounded-circle"></span>
                </label>
              </div>
  
              <div class="me-2 mb-2">
                <input id="color2" class="btn-check" type="radio" name="color" value="Soft beige">
                <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" for="color2"><span class="d-block rounded-circle" style="width: 1.5rem; height: 1.5rem; background-color: #d9c9a1;"></span></label>
              </div>
              
              <div class="me-2 mb-2">
                <input id="color3" class="btn-check" type="radio" name="color" value="Bluish sky">
                <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" for="color3"><span class="d-block rounded-circle" style="width: 1.5rem; height: 1.5rem; background-color: #a1b7d9;"></span></label>
              </div>
              
              <div class="me-2 mb-2">
                <input id="color4" class="btn-check" type="radio" name="color" value="Green grass">
                <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" for="color4"><span class="d-block rounded-circle" style="width: 1.5rem; height: 1.5rem; background-color: #74947d;"></span></label>
              </div>
              
              <div class="me-2 mb-2">
                <input id="color5" class="btn-check" type="radio" name="color" value="Woody brown">
                <label class="btn btn-icon btn-sm btn-outline-secondary rounded-circle" for="color5">
                  <span :style="`width: 1.5rem; height: 1.5rem; background-color: #af8352; background-image: url(${require('@/assets/ecommerce/wood.jpg')});`" class="d-block bg-size-cover bg-position-center rounded-circle"></span>
                </label>
              </div>
            </div>
  
            <!-- Weight button selector-->
            <div class="h6">Weight</div>
            <div class="d-flex">
              <div class="me-3">
                <input class="btn-check" type="radio" name="weight" value="140 g" checked="false" id="weight1">
                <label class="btn btn-outline-secondary px-2" for="weight1"><span class="mx-1">140 g</span></label>
              </div>
              <div class="me-3">
                <input class="btn-check" type="radio" name="weight" value="260 g" id="weight2">
                <label class="btn btn-outline-secondary px-2" for="weight2"><span class="mx-1">260 g</span></label>
              </div>
              <div class="me-3">
                <input class="btn-check" type="radio" name="weight" value="440 g" id="weight3">
                <label class="btn btn-outline-secondary px-2" for="weight3"><span class="mx-1">440 g</span></label>
              </div>
            </div>
  
            <!-- Action buttons-->
            <div class="d-sm-flex d-md-block d-lg-flex py-4 py-md-5 my-3 my-md-0 mt-lg-0 mb-lg-4">
              <div class="count-input bg-gray rounded-3 me-4 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                <button class="btn btn-icon btn-lg fs-xl" type="button" data-decrement="">-</button>
                <input class="form-control" type="number" value="1" readonly>
                <button class="btn btn-icon btn-lg fs-xl" type="button" data-increment="">+</button>
              </div>
              <div class="d-flex align-items-center">
                <button class="btn btn-lg btn-primary w-100 w-lg-auto me-2" type="button">
                  <i class="ai-cart me-2 ms-n1"></i>Add to cart
                </button>
  
                <div class="nav">
                  <a class="nav-link fs-3 px-3" href="#" data-bs-toggle="tooltip" title="Add to Favorites">
                    <i class="ai-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            <!-- Sharing-->
            <div class="d-flex align-items-center">
              <h4 class="h6 me-4">Share product:</h4><a class="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle me-3 mb-3" href="#"><i class="ai-telegram"></i></a><a class="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle me-3 mb-3" href="#"><i class="ai-instagram"></i></a><a class="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mb-3" href="#"><i class="ai-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="container pb-4 pb-md-5 mb-lg-4">
      <div :style="`background-image: url(${require('@/assets/ecommerce/back1.jpg')});`" class="bg-size-cover bg-repeat-0 bg-position-center rounded-1 mb-md-2 py-xl-4 py-xxl-5">
        <div class="row py-lg-5">
          <div class="col-md-8 offset-md-3 col-lg-6 offset-lg-5 col-xl-5 offset-xl-6 py-5">
            <div class="bg-light rounded-1 mx-4 p-4 p-md-5">
              <div class="py-3 p-sm-3">
                <h2 class="h3 mb-sm-4">Scented candle</h2>
                <p class="mb-0">Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui facilisi morbi ullamcorper turpis nisi aconsequat cursus volutpat facilisi eget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="container pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
      <div class="row align-items-center pb-md-3">
        <div class="col-md-6 col-lg-5 mb-4 mb-md-0">
          <img :src="require('@/assets/ecommerce/back2.jpg')" class="img-fluid rounded-1" alt="Image">
        </div>

        <div class="col-md-6 col-lg-5 offset-lg-1">
          <div class="ps-md-4 ps-lg-0">
            <h2 class="h3 mb-sm-4">Description</h2>
            <p class="mb-4 mb-lg-5">Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem eu ac volutpat facilisi eget morbi</p>
            <ul class="list-unstyled mb-0">
              <li class="mb-3">Weight:<span class="text-dark fw-semibold ms-2">140 - 440 gramms</span></li>
              <li class="mb-3">Material:<span class="text-dark fw-semibold ms-2">Concrete bowl</span></li>
              <li class="mb-3">Duration:<span class="text-dark fw-semibold ms-2">60 hours of comfort and combustion</span></li>
              <li class="mb-3">Composition:<span class="text-dark fw-semibold ms-2">100% soy wax, cotton wick</span></li>
              <li>Country:<span class="text-dark fw-semibold ms-2">Frances</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.zoom-effect-wrapper {
  position: relative;
  transform: translateZ(0);
  overflow: hidden;
}
.zoom-effect-img {
  display: block;
  transition: transform .4s ease-in-out;
}
.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  padding: 0;
}
.btn-check:checked+.btn,
:not(.btn-check)+.btn:active,
.btn:first-child:active,
.btn.active,
.btn.show {
  color: #121519;
  background-color: transparent;
  border-color: #d7dde2;
}
.btn-check+.btn-icon.btn-outline-secondary {
  background-color: transparent;
  border-color: transparent;
}
/* .btn-outline-secondary {
  color: #434a57;
  border-color: #121519;
} */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.575rem 1.25rem; */
  font-size: calc(1rem * 0.75);
  font-weight: 600;
  line-height: 1.4;
  color: #434a57;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: calc(1rem * 0.75);
  background-color: transparent;
  transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
}
.rounded-circle {
  border-radius: 50% !important;
}
.btn-icon.btn-sm,
.btn-group-sm>.btn-icon.btn {
  /* width: 2.25rem; */
}
.count-input {
  display: inline-flex;
  align-items: center;
}
.bg-gray {
  background-color: #edf1f5 !important;
}
.btn-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  padding: 0;
}
.count-input .btn {
  box-shadow: none;
}
.count-input .form-control {
  width: 1.5rem;
  padding: 0;
  border: 0;
  background: 0 !important;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}
.rounded-1 {
  border-radius: calc(1rem * 0.75) !important;
}
</style>
