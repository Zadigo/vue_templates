<template>
  <div :class="tableClasses" class="tasks">
    <div class="py-4 d-flex justify-content-left align-items-center">
      <!-- <h4 class="fw-bold w-50 me-3">Table Title</h4> -->
      <base-input id="search" @update:initial="(value) => { search = value }" />
    </div>

    <div class="task-row task-header">
      <div class="task-cell task-cell-row-select">
        <base-checkbox id="select-rows" label="" @update:initial="(value) => { selectAllRows = value }" />
      </div>
      <div class="task-cell">
        Name1
      </div>
      <div class="task-cell">
        Name3
      </div>
      <div class="task-cell">
        Age
      </div>
    </div>

    <dynamic-table-row v-for="item in searchedItems" :key="item.id" :item="item" />

    <div class="py-3">
      Showing 1 to 10 of {{ items.length }} entries
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, provide, ref } from 'vue'

import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import DynamicTableRow from './DynamicTableRow.vue'

export default {
  components: {
    BaseCheckbox,
    BaseInput,
    DynamicTableRow
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    editable: {
      type: Boolean
    }
  },
  setup () {
    const app = getCurrentInstance()
    const selectAllRows = ref(false)
    provide('tableItems', app.props.items)
    provide('selectAllRows', selectAllRows)
    return {
      selectAllRows
    }
  },
  data () {
    return {
      search: null
    }
  },
  computed: {
    searchedItems () {
      if (this.search) {
        return this.items.filter((item) => {
          const truthArray = []
          item.tasks.forEach((task) => {
            truthArray.push(
              task.value === this.search ||
              task.value.includes(this.search) ||
              task.value.toLowerCase().includes(this.search)
            )
          })
          return truthArray.some((result) => {
            return result === true
          })
        })
      }
      return this.items
    },
    tableClasses () {
      return [
        {
          'tasks-editable': this.editable
        }
      ]
    }
  },
  methods: {
    selectRows () {}
  }
  // methods: {
  //   dragRow (e, item) {
  //     e.dataTransfer.dropEffect = 'move'
  //     e.dataTransfer.effectAllowed = 'move'
  //     e.dataTransfer.setData('row', item.id)
  //   },
  //   dropRow (e) {
  //     const row = e.dataTransfer.getData('row')
  //     const rowData = this.items[_.findIndex(this.items, ['id', row * 1])]
  //     this.items.splice(this.insertAt, 0, rowData)
  //   },
  //   dragOverRow (e, item) {
  //     e
  //     this.insertAt = _.findIndex(this.items, ['id', item.id])
  //   },
  //   addValue (value) {
  //     this.items.push({
  //       id: 4,
  //       tasks: [
  //         {
  //           value: value
  //         },
  //         {
  //           value: 3
  //         },
  //         {
  //           value: 4
  //         }
  //       ]
  //     })
  //   }
  // }
}
</script>

<style>
.tasks {
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 15px -3px rgb(0 0 0 / 7%), 0 10px 20px -2px rgb(0 0 0 / 4%);
  background-clip: border-box;
  /* border: 1px solid rgba(0, 0, 0, 0.175); */
  border-radius: 0.375rem;
  padding: 1rem 1rem;
  width: 100%;
  height: auto;
  padding: .5rem;
}

.tasks>* {
  color: #212529;
}

.tasks .task-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
  /* padding: 0 1rem 0 1rem; */
}

.tasks .task-row.task-header {
  font-weight: bold;
}

.tasks .task-row.task-header .task-cell {
  background-color: rgba(0, 0, 0, 0.075);
}

.tasks .task-cell {
  transition: all .3s ease-in;
  padding: .5rem;
  /* background-color: white; */
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.05);
  margin: .15rem;
  width: 100%;
  cursor: pointer;
}

.task-cell.task-cell-row-select {
  display: flex;
  width: 10%;
  justify-items: center;
}
/* 
.tasks .task-row:first-child .task-cell:first-child {
  border-top-left-radius: 0.375rem;
}

.tasks .task-row:first-child .task-cell:last-child {
  border-top-right-radius: 0.375rem;
}

.tasks .task-row:last-child .task-cell:first-child {
  border-bottom-left-radius: 0.375rem;
}

.tasks .task-row:last-child .task-cell:last-child {
  border-bottom-right-radius: 0.375rem;
} */

.tasks .task-cell:not(.task-cell.task-cell-row-select):hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.tasks.tasks-editable .task-cell:not(.task-cell.task-cell-row-select):hover > span {
  text-decoration: underline dotted;
}

.tasks .task-cell:not(.task-cell.task-cell-row-select).active {
  background-color: rgba(0, 0, 0, 0.075);
}

.tasks.tasks-success .task-cell {
  background-color: #c7dbd2;
}

.tasks.tasks-success .task-cell:hover {
  background-color: #c1d6cc;
}

.tasks.tasks-success .task-cell.active {
  background-color: #c1d6cc;
}
</style>
