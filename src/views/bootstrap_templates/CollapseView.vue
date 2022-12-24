<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card class="my-3">
        <div class="card-header">
          <h3 class="card-title">Collapse</h3>
        </div>
        
        <div class="card-body">
          <base-collapse id="collapse-1" v-slot="{ darkMode }" button-name="Collapse">
            <div :class="[darkMode ? 'bg-dark text-light' : null]" class="card">
              <div class="card-body">
                dark: {{ darkMode }}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa deserunt odio, suscipit cumque, quaerat voluptas dicta nemo voluptate
                obcaecati fugiat voluptates atque illum, optio molestiae dolor veniam?
                Consequatur, a aliquid.
              </div>
            </div>
          </base-collapse>
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BaseCollapse from '@/layouts/bootstrap/BaseCollapse.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'

export default {
  components: {
    BaseCollapse,
    BaseTemplateCard
  }
}
</script>
