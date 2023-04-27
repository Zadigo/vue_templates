<template>
  <base-site>
    <template #header>
      <!-- <centered-hero /> -->
      <!-- <left-aligned-hero /> -->
      <with-form />
    </template>
    
    <template #default>
      <section class="container" style="height:100vh; margin-top: calc(5rem + 1rem);">
        <div class="row">
          <div class="col-6 gx-5">
            <base-card class="shadow-none mb-3">
              <template #body>
                <h3>Comment pouvons-nous vous aider ?</h3>
              </template>
            </base-card>

            <base-card class="shadow-none">
              <template #body>
                <form>
                  <base-input id="name" class="p-3" placeholder="Nom" />
                  <base-input id="name" class="p-3 my-2" placeholder="Prénom" />
                  <base-input id="name" input-type="email" class="p-3" placeholder="Email" />
                  <base-input id="name" input-type="tel" class="p-3 my-2" placeholder="Téléphone" />
                  
                  <div class="mt-5 d-flex justify-content-end">
                    <base-button id="submit" size="lg">Submit</base-button>
                  </div>
                </form>
              </template>
            </base-card>
          </div>
          
          <div class="col-6 gx-5">
            <base-card class="shadow-none mb-3">
              <template #body>
                <h3>D'autres façons de se connecter</h3>
              </template>
            </base-card>

            <base-card class="shadow-none bg-light">
              <template #body>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <p class="m-0 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus nihil</p>
              </template>
            </base-card>
            
            <base-card class="mt-2 shadow-none bg-light">
              <template #body>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <p class="m-0 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus nihil</p>
              </template>
            </base-card>

            <base-card class="mt-2 shadow-none bg-light">
              <template #body>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <p class="m-0 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus nihil</p>
              </template>
            </base-card>
          </div>
        </div>
      </section>
    </template>
  </base-site>
</template>

<script>
// import CenteredHero from '@/layouts/bootstrap/headers/CenteredHero.vue'
// import LeftAlignedHero from '@/layouts/bootstrap/headers/LeftAlignedHero.vue'
import BaseButton from '@/layouts/bootstrap/buttons/BaseButton.vue'
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseSite from '@/layouts/BaseSite.vue'
import WithForm from '@/layouts/bootstrap/headers/WithForm.vue'
export default {
  name: 'ContactView',
  components: {
    BaseButton,
    BaseCard,
    BaseInput,
    BaseSite,
    // CenteredHero,
    // LeftAlignedHero,
    WithForm
  }
}
</script>
