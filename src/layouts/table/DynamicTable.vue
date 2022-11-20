<template>
  <div :class="tableClasses" class="tasks">
    <!-- Table Heading -->
    <div class="py-4">
      <!-- Search -->
      <div class="d-flex justify-content-left align-items-center">
        <div class="w-50">
          <base-input v-if="showSearch" id="search" v-model="search" placeholder="search" @focusout="showSearch = !showSearch" />
          <button v-else type="button" class="btn btn-light shadow-none" @click="showSearch = !showSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      
      <div class="d-flex justify-content-left align-items-center">
        <!-- Sort -->
        <dynamic-table-sorting-badge :columns-to-sort="sortedColumns" />
        <!-- Filter -->
        <dynamic-table-filter-badge @update:filter-rules="handleFilterRules" />
      </div>
    </div>

    <!-- Table Headers -->
    <div class="task-row task-header">
      <div class="task-cell task-cell-row-select">
        <base-checkbox id="select-rows" label="" @update:initial="(value) => { selectAllRows = value }" />
      </div>
      <dynamic-table-column-header v-for="header in headers" :key="header" :header="header" @update:sorting-rules="handleSortingRules" />
    </div>

    <!-- Table Rows -->
    <dynamic-table-row v-for="item in searchedItems" :key="item.id" :item="item" />

    <!-- Calculation Row -->

    <div class="py-3">
      Showing 1 to 10 of {{ items.length }} entries
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { getCurrentInstance, provide, ref } from 'vue'
import { useFiltering } from './composables'

import BaseCheckbox from '@/layouts/bootstrap/BaseCheckbox.vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import DynamicTableColumnHeader from './DynamicTableColumnHeader.vue'
import DynamicTableFilterBadge from './DynamicTableFilterBadge.vue'
import DynamicTableRow from './DynamicTableRow.vue'
import DynamicTableSortingBadge from './DynamicTableSortingBadge.vue'

export default {
  name: 'DynamicTable',
  components: {
    BaseCheckbox,
    BaseInput,
    DynamicTableColumnHeader,
    DynamicTableFilterBadge,
    DynamicTableRow,
    DynamicTableSortingBadge
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
    provide('headers', app.props.headers)
    const { availableFilters, filterValueOperation } = useFiltering()
    return {
      availableFilters,
      selectAllRows,
      filterValueOperation
    }
  },
  data () {
    return {
      search: null,
      sortedColumns: [],
      filterRules: [],
      showSearch: false
      // currentSort: null,
      // currentSortMethod: 'asc'
    }
  },
  computed: {
    sortedItems () {
      if (this.sortedColumns.length > 0) {
        const columns = _.map(this.sortedColumns, (item) => {
          return item[0]
        })

        const methods = _.map(this.sortedColumns, (item) => {
          return item[1]
        })

        console.log(columns, methods)
        // return _.sortBy(this.items, columns, methods)
        return _.orderBy(this.items, columns, methods)
      } else {
        return this.items
      }
    },
    filteredItems () {
      // Based on a set of rules, only
      // show elements that respect the
      // given constraints/rules
      if (this.filterRules.length > 0) {
        return _.filter(this.sortedItems, (item) => {
          const truthArray = _.map(this.filterRules, (rule) => {
            return this.filterValueOperation(
              item[rule.column],
              rule.operator,
              rule.constraint
            )
          })
          return _.some(truthArray)
        })
      } else {
        return this.sortedItems
      }
    },
    searchedItems () {
      // Returns a list of items based
      // on whether they match a given
      // string or not
      if (this.search) {
        return this.filteredItems.filter((item) => {
          const truthArray = _.map(this.headers, (header) => {
            const value = item[header].toString()
            return (
              value === this.search ||
              value.includes(this.search) ||
              value.toLowerCase() === this.search ||
              value.toLowerCase().includes(this.search)
            )
          })
          return _.some(truthArray)
        })
      } else {
        return this.filteredItems
      }
    },
    searchedItemsIds () {
      // Returns the ids of the search
      // elements which will then allow
      // us to only select the rows of
      // said items or eventually be used
      // for an API call
      if (!this.search) {
        return []
      }
      
      return _.map(this.searchedItems, (item) => {
        return item.id
      })
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
    handleSortingRules (rule) {
      let columnNameExist = false
      let columnNameExistIndex = null
      const incomingColumn = rule[0]

      for (const [i, item] of this.sortedColumns.entries()) {
        if (item[0] === incomingColumn) {
          columnNameExist = true
          columnNameExistIndex = i
        }
      }

      if (columnNameExist) {
        this.sortedColumns.splice(columnNameExistIndex, 1, rule)
      } else {
        this.sortedColumns.push(rule)
      }
    },
    handleFilterRules (rules) {
      this.filterRules = rules
    }
  }
}
</script>

<style>
.tasks {
  position: relative;
  background-color: #fff;
  background-clip: border-box;
  padding: .5rem;
  width: 100%;
  height: auto;
  /* box-shadow: 0 2px 15px -3px rgb(0 0 0 / 7%), 0 10px 20px -2px rgb(0 0 0 / 4%); */
  /* border: 1px solid rgba(0, 0, 0, 0.175); */
  /* border-radius: 0.375rem; */
  /* padding: 1rem 1rem; */
}

.tasks > * {
  color: #212529;
}

.tasks .task-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
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

/* .task-cell .task-cell-menu { */
[class$="-menu"] {
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

/* .task-cell a.task-cell-menu-item { */
[class$="-menu"] a[class$="-menu-item"] {
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

/* .task-cell a.task-cell-menu-item:hover { */
[class$="-menu"] a[class$="-menu-item"]:hover {
  color: #1e2125;
  background-color: #e9ecef;
}

[class$="-menu"].show {
  display: block;
}

[class$="-menu"] hr[class$="-menu-item-divider"] {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.175);
  opacity: 1;
}

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

.tasks .tasks-sort {
  position: relative;
}

.tasks .tasks-sort .badge {
  cursor: pointer;
}
</style>
