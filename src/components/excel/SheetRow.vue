<template>
  <div class="sheet-row" :data-id="content">
    <div class="cell first">1</div>
    <sheet-cell v-for="y in 8" :key="y" :content="y" @cell-selected="handleSelection" />
    <!-- <div v-for="y in 10" :key="y" class="cell">{{ y }}</div> -->
  </div>
</template>


<script>
import SheetCell from './SheetCell.vue'
export default {
  components: {
    SheetCell
  },
  props: {
    content: {
      type: Number,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
