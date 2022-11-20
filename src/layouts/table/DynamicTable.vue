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

      <div v-for="header in headers" :key="header" class="task-cell" @click="show = !show">
        {{ header }}
        
        <ul :class="{ show }" class="task-cell-menu">
          <li>
            <a href class="task-cell-menu-item" @click.prevent="handleSort(header)">
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="me-1" />
              Sort ascending
            </a>
          </li>
          <li>
            <a href class="task-cell-menu-item" @click.prevent="handleSort(header)">
              <font-awesome-icon icon="fa-solid fa-arrow-down" class="me-1" />
              Sort descending
            </a>
          </li>
          <li>
            <a href class="task-cell-menu-item" @click.prevent>
              <font-awesome-icon icon="fa-solid fa-filter" class="me-1" />
              Filter
            </a>
          </li>
        </ul>
      </div>

      <!-- <div class="task-cell">
        Name1
      </div>
      <div class="task-cell">
        Name3
      </div>
      <div class="task-cell">
        Age
      </div> -->
    </div>

    <dynamic-table-row v-for="item in searchedItems" :key="item.id" :item="item" />

    <div class="py-3">
      Showing 1 to 10 of {{ items.length }} entries
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
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
    headers: {
      type: Array,
      required: true
    },
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
      search: null,
      // TE
      show: false,
      currentSort: null,
      currentSortMethod: 'asc'
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
    },
    flatValues () {
      // recreate the correct columns
      // for sorting purposes
      const builtItems = []
      const values = []
      this.items.forEach((item) => {
        item.tasks.forEach((task, i) => {
          task.header = this.headers[i]
        })
        values.push(item)
      })
      values.forEach((value) => {
        const item = { id: value.id }
        value.tasks.forEach((task) => {
          item[task.header] = task.value
        })
        builtItems.push(item)
      })
      return builtItems
    },
    sortedValues () {
      if (this.currentSort) {
        return _.sortBy(this.flatValues, [this.currentSort])
      }
      return []
    }
  },
  methods: {
    handleSort (column, method ='asc') {
      method
      this.currentSort = column
    },
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
  position: relative;
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

.task-cell .task-cell-menu {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  background-color: #fff;
  height: auto;
  width: auto;
  min-width: 10rem;
  border-radius: .375rem;
  z-index: 1000;
  list-style: none;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  margin: 0;
  padding: .5rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-clip: padding-box;
}

.task-cell a.task-cell-menu-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  text-align: inherit;
  white-space: nowrap;
  border: 0;
  color: #212529;
  background-color: transparent;
  border-radius: .375rem;
}

.task-cell a.task-cell-menu-item:hover {
  color: #1e2125;
  background-color: #e9ecef;
}

.task-cell .task-cell-menu.show {
  display: block;
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
