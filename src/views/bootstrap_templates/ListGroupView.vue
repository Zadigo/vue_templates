<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card>
        <div class="card-body">
          <base-list-group-item-radio id="google" :items="listgroups" />
        </div>
      </base-template-card>
  
      <base-template-card class="my-3">
        <div class="card-body">
          <base-list-group-checkbox id="google1" :items="listgroups" />
        </div>
      </base-template-card>
      
      <!-- Base List Group -->
      <base-template-card class="my-3">
        <div class="card-body">
          <base-list-group v-slot="{ listGroupItems, handleSelection }" :items="items">
            <base-list-group-item-action v-for="(item, i) in listGroupItems" :key="i" @click="handleSelection(i, item)">
              {{ item.text }}
            </base-list-group-item-action>
          </base-list-group>
        </div>
      </base-template-card>

      <base-template-card class="my-3">
        <div class="card-body">
          <h3 class="card-title">Accordion</h3>
          <base-accordion :items="[{id: 1, title: 'A', content: 'A'}, {id: 3, title: 'B', content: 'B'}]" />
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BaseAccordion from '@/layouts/bootstrap/BaseAccordion.vue'
import BaseListGroupCheckbox from '@/layouts/bootstrap/listgroup/BaseListGroupCheckbox.vue'
import BaseListGroup from '@/layouts/bootstrap/listgroup/BaseListGroup.vue'
import BaseListGroupItemAction from '@/layouts/bootstrap/listgroup/BaseListGroupItemAction.vue'
import BaseListGroupItemRadio from '@/layouts/bootstrap/listgroup/BaseListGroupItemRadio.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'

export default {
  components: {
    BaseAccordion,
    BaseListGroupCheckbox,
    BaseListGroup,
    BaseListGroupItemAction,
    BaseListGroupItemRadio,
    BaseTemplateCard
  },
  data () {
    return {
      items: [
        { text: 'First item of the group' },
        { text: 'Second item of the group' }
      ],
      listgroups: [
        { name: 'First radio', subtitle: 'With support text underneath to add more detail' },
        { name: 'Second radio', subtitle: 'With support text underneath to add more detail', disabled: true },
        { name: 'Third radio', subtitle: 'With support text underneath to add more detail' }
      ]
    }
  }
}
</script>
