<template>
  <div class="row">
    <div class="col-10 offset-1">
      <div class="row">
        <!-- Card -->
        <h3>simple Cards</h3>
        <div v-for="i in 3" :key="i" class="col-sm-12 col-md-4">
          <base-card :image="require('@/assets/hero1.jpg')" :hoverable="false" :overlay="false" image-position="top" title="We can!" class="my-3">
            <template #body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus recusandae earum odio reprehenderit vero velit,
              non itaque magnam assumenda.
            </template>
    
            <template #footer>
              <button type="button" class="btn btn-primary">Add</button>
            </template>
          </base-card>
        </div>
    
        <!-- Card Group -->
        <div class="p-1">
          <h3>simple Cards</h3>
          <base-card-group>
            <base-card v-for="i in 3" :key="i" :image="require('@/assets/hero1.jpg')" :hoverable="true" :overlay="false" image-position="top" title="We can!" class="my-3 shadow-none">
              <template #body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus recusandae earum odio reprehenderit vero velit,
                non itaque magnam assumenda.
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
              non itaque magnam assumenda.
            </template>
          </base-card>
        </div>
        
        <div class="col-4">
          <base-card :links="['http://example.com/1', 'http://example.com/3']" title="We can!" subtitle="Hey, how are you!" class="my-3">
            <template #header>
              <h3>Example card</h3>
            </template>

            <template #body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus recusandae earum odio reprehenderit vero velit,
              non itaque magnam assumenda.
            </template>

            <template #footer>
              <base-button id="button-id">
                Example button
              </base-button>
            </template>
          </base-card>
        </div>

        <div class="col-4">
          <base-card title="We can!" subtitle="Hey, how are you!" class="my-3">
            <template #header>
              <base-nav-pills :items="[{ name: 'A' }, { name: 'B' }, { name: 'C' }]" is-pills justified in-card @click:nav-pill="handleTab" />
            </template>
        
            <template #body>
              <div v-if="tab === 0">
                Lorem ipsum dolor
              </div>

              <div v-if="tab === 1">
                Amet consectetur adipisicing elit
              </div>
              
              <div v-if="tab === 2">
                Necessitatibus recusandae earum odio reprehenderit
              </div>
            </template>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../layouts/BaseButton.vue'
import BaseNavPills from '@/layouts/bootstrap/BaseNavPills.vue';
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import BaseCardGroup from '@/layouts/bootstrap/cards/BaseCardGroup.vue';
import BaseCardReveal from '@/layouts/bootstrap/cards/BaseCardReveal.vue'

export default {
  name: 'CardsView',
  components: {
    BaseButton,
    BaseCard,
    BaseCardGroup,
    BaseCardReveal,
    BaseNavPills
  },
  data () {
    return {
      tab: 0
    }
  },
  methods: {
    handleTab (value) {
      this.tab = value[0]
    }
  }
}
</script>
