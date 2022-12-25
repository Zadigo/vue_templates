<template>
  <section id="products" class="container-fluid">
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
      <div class="col-12">
        <div class="p-5 bg-light rounded mb-1">
          <h3>Some title</h3>
          <p class="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint, sapiente
            voluptatibus provident commodi magni error! Exercitationem nostrum labore sint numquam,
            voluptates culpa ea sapiente eveniet repellendus ex! Natus, fuga?
          </p>
  
          <div class="d-flex justify-content-left gap-2">
            <base-button v-for="i in 4" id="cta-popular-search" :key="i" :to="{ name: 'product_view', params: { id: 1 } }" rounded color="light" class="shadow-none border">
              Popular search {{ i }}
            </base-button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Filters -->
      <div class="col-3">
        <base-card>
          <template #body>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Size
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Colors
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Length
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Sleeve
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
              
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Sale
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
              
                  </div>
                </div>
              </div>
            </div>
          </template>
        </base-card>
      </div>
  
      <!-- Products -->
      <div class="col-9">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '../bootstrap/cards/BaseCard.vue'

export default {
  name: 'ProductsLayoutWithAside',
  components: {
    BaseButton,
    BaseCard
  }
}
</script>
