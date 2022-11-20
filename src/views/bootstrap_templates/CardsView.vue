<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <!-- Card -->
        <h3>simple Cards</h3>
        <div v-for="i in 3" :key="i" class="col-sm-12 col-md-4">
          <base-card :image="require('@/assets/hero1.jpg')" :hoverable="false" :overlay="false" image-position="top" title="We can!" class="my-3">
            <template #body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus recusandae earum odio reprehenderit vero velit,
              non itaque magnam assumenda maxime nostrum voluptates quasi
              delectus ex, dolore exercitationem facilis eius fugiat.
            </template>
    
            <template #footer>
              <button type="button" class="btn btn-primary">Add</button>
            </template>
          </base-card>
        </div>
    
        <!-- Card Group -->
        <div class="p-1 d-none">
          <h3>simple Cards</h3>
          <base-card-group>
            <base-card v-for="i in 3" :key="i" :image="require('@/assets/hero1.jpg')" :hoverable="true" :overlay="false" image-position="top" title="We can!" class="my-3 shadow-none">
              <template #body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus recusandae earum odio reprehenderit vero velit,
                non itaque magnam assumenda maxime nostrum voluptates quasi
                delectus ex, dolore exercitationem facilis eius fugiat.
              </template>
      
              <template #footer>
                <button type="button" class="btn btn-primary">Add</button>
              </template>
            </base-card>
          </base-card-group>
        </div>
        
        <!-- Card Reveal -->
        <div class="col-4">
          <base-card :image="require('@/assets/hero1.jpg')" title="We can!" class="my-3">
            <base-card-reveal content="Google" />
            <template #body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus recusandae earum odio reprehenderit vero velit,
              non itaque magnam assumenda maxime nostrum voluptates quasi
              delectus ex, dolore exercitationem facilis eius fugiat.
            </template>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCardReveal from '@/layouts/bootstrap/cards/BaseCardReveal.vue'

export default {
  components: {
    BaseCard,
    BaseCardReveal
  }
}
</script>
