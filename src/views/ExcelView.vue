<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-4">
        <div class="sheet scrolled">
          <div class="sheet-header">
            <div class="cell first">check</div>
            <div v-for="i in 8" :key="i" class="cell">Google {{ i }}</div>
          </div>

          <div class="sheet-body">
            <sheet-row v-for="x in 50" :key="x" :content="x" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import SheetRow from '@/components/excel/SheetRow.vue'
// import SheetCell from '@/components/excel/SheetCell.vue';
export default {
  components: {
    SheetRow
  },
  setup () {
    const selectedCell = ref({})
    provide('selectedCell', selectedCell)
    return {
      selectedCell
    }
  },
  methods: {
    handleSelection (data) {
      this.selectedCell = data
    }
  }
}
</script>

<style>
.sheet {
  font-family: "Lato", sans-serif;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
}

.sheet-header,
.sheet-row {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
}

.sheet-header .cell,
.sheet-row .cell {
  transition: all .3s ease-in-out;
  /* background-color: rgba(248, 249, 250, 1); */
  min-width: 200px;
  padding: .15rem;
  border: 1px solid rgba(38, 38, 38, .05);
  text-align: center;
}

/* .sheet-row .cell {
  background-color: rgba(255, 255, 255, 1);
} */

.sheet-header .cell.first,
.sheet-row .cell.first {
  min-width: 80px;
  width: 80px;
}

.sheet-row:hover {
  background-color: rgba(38, 38, 38, .05);
}

.sheet-row.selected {
  background-color: rgba(38, 38, 38, .05);
}

/* .header .cell:first-child {
  position: sticky;
  left: 0;
} */

/* .sheet.scrolled .cell:first-child {
  box-shadow: 0 .5rem 1rem rgba(33, 37, 48, .15);
} */

.cell.selected {
  border: 2px solid blue;
}

.cell {
  cursor: default;
}

.cell input {
  border: none;
  padding: 0;
  border-radius: 0;
  padding: 0 .1rem auto;
}
</style>
