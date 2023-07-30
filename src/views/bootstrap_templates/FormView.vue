<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card class="my-3">
        <div class="card-body">
          <div class="d-flex justify-content-around gap-4 align-items-center">
            <!-- Input -->
            <base-input id="search" v-model="search1" aria-label="Google" label="Recherche de votre vie rapidement ici" placeholder="Rechercher" />
  
            <!-- Select -->
            <base-select v-model="selectValue" :items="['Kendall Jenner', 'Kylie Jenner']" />
          </div>

          <!-- <div class="select-multiple">
            <div class="wrapper">
              <div class="arrow"></div>
              <a href @click.prevent>Kendall</a>
              <a href @click.prevent>Jenner</a>
            </div>
          </div> -->
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

      <!-- Multi-Select -->
      <base-template-card class="my-3">
        <div class="card-body">
          <base-multiple-select :items="multipleSelect" />
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import multipleSelect from '@/data/multiple_select.json'
import BaseAutocomplete from '@/layouts/bootstrap/BaseAutocomplete.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseRangeInput from '@/layouts/BaseRangeInput.vue'
import BaseSelect from '@/layouts/bootstrap/BaseSelect.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'
import BaseMultipleSelect from '@/layouts/bootstrap/BaseMultipleSelect.vue'

export default {
  components: {
    BaseAutocomplete,
    BaseInput,
    BaseRangeInput,
    BaseSelect,
    BaseTemplateCard,
    BaseMultipleSelect
  },
  setup () {
    return {
      multipleSelect
    }
  },
  data () {
    return {
      search1: null,
      search3: null,
      singleRangeValue: 10,
      doubleRangeValue: [10, 50],
      selectValue: 'Kendall Jenner'
    }
  }
}
</script>

<style scoped>
.select-multiple {
  position: relative;
  width: 100%;
}

.select-multiple .wrapper {
  position: relative;
  z-index: 2;
  padding: 8px 12px 2px 12px;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  min-height: 44px;
  box-shadow: 0 4px 16px 0 rgba(22, 42, 90, 0.12);
  transition: box-shadow 0.3s ease;
}

.select-multiple > .wrapper:hover {
  box-shadow: 0 4px 24px -1px rgba(22, 42, 90, 0.16);
}

.select-multiple>div .arrow {
  right: 1px;
  top: 0;
  bottom: 0;
  cursor: pointer;
  width: 28px;
  position: absolute;
}

.select-multiple > div .arrow:before,
.select-multiple > div .arrow:after {
  content: "";
  position: absolute;
  display: block;
  width: 2px;
  height: 8px;
  border-bottom: 8px solid #99a3ba;
  top: 43%;
  transition: all 0.3s ease;
}

.select-multiple > div .arrow:before {
  right: 12px;
  transform: rotate(-130deg);
}

.select-multiple > div .arrow:after {
  left: 9px;
  transform: rotate(130deg);
}

.select-multiple > .wrapper a {
  position: relative;
  display: inline-block;
  padding: 0 24px 6px 8px;
  line-height: 28px;
  color: #1e2330;
  vertical-align: top;
  margin: 0 6px 0 0;
  background-color: rgba(22, 42, 90, 0.12);
}
</style>
