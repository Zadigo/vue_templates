<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card>
        <div class="card-body">
          <base-pagination :pages="15" />
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BasePagination from '@/layouts/BasePagination.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'

export default {
  components: {
    BasePagination,
    BaseTemplateCard
  },
  data () {
    return {

    }
  }
}
</script>
