<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card class="my-3">
        <div class="card-body">
          <base-input id="search" v-model="search1" aria-label="Google" label="Recherche de votre vie rapidement ici" placeholder="Rechercher" class="my-1 p-3" />
        </div>
      </base-template-card>
  
      <base-template-card class="my-3">
        <div class="card-body">
          <base-autocomplete :items="[{ text: 'Facebook' }, { text: 'Google' }]" :clearable="true" :multiple="false">
            <base-input id="search" v-model="search3" aria-label="Google" label="Recherche de votre vie rapidement ici" placeholder="Rechercher" class="my-1 p-3" />
            <!-- <input type="text" class="form-control p-2" placeholder="Type here"> -->
          </base-autocomplete>
        </div>
      </base-template-card>

      <base-template-card>
        <div class="card-body">
          <h3 class="card-title">Range</h3>
          <base-range-input v-model="singleRangeValue" :show-track="true" :initial="10" />
          <base-range-input v-model="doubleRangeValue" :is-range="true" class="mt-3" />
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BaseAutocomplete from '@/layouts/bootstrap/BaseAutocomplete.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseRangeInput from '@/layouts/BaseRangeInput.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'

export default {
  components: {
    BaseAutocomplete,
    BaseInput,
    BaseRangeInput,
    BaseTemplateCard
  },
  data () {
    return {
      search1: null,
      search3: null,
      singleRangeValue: 10,
      doubleRangeValue: [10, 50]
    }
  }
}
</script>
