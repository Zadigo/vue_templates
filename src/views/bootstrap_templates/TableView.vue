<template>
  <div class="row">
    <div class="col-12">
      <base-card>
        <template #body>
          <dynamic-table id="table1" :headers="['firstname', 'lastname', 'age']" :items="table" />
        </template>
      </base-card>
    </div>
  </div>
</template>

<script>
import table from '@/data/table.json'

import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue'
import DynamicTable from '@/layouts/table/DynamicTable.vue'

export default {
  components: {
    BaseCard,
    DynamicTable
  },
  setup () {
    return {
      table
    }
  },
}
</script>
