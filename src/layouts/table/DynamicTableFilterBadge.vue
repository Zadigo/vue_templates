<template>
  <div class="tasks-filter pt-3">
    <div class="d-flex justify-content-left">
      <!-- Rules -->
      <!-- TODO: Make this is a unique component -->
      <!-- <div v-for="(rule, i) in rules" :key="i" class="badge rounded-pill text-bg-info p-2 me-1 d-flex justify-content-around align-items-center">
        <font-awesome-icon icon="fa-solid fa-filter" class="me-2" />
        {{ getRuleText(rule) }}
        <font-awesome-icon icon="fa-solid fa-caret-down" class="ms-2" />
      </div> -->
      <dynamic-table-rule v-for="(rule, i) in rules" :key="i" :index="i" :rule="rule" />
  
      <button type="button" class="btn btn-light shadow-none" @click="showFilterMenu = !showFilterMenu">
        <font-awesome-icon icon="fa-solid fa-plus" class="me-1" />
        Filter
      </button>
    </div>

    <!-- Column selection -->
    <ul :class="{ show: showFilterMenu }" class="tasks-filter-menu">
      <li v-for="header in headers" :key="header">
        <a href class="task-filter-menu-item" @click.prevent="handleColumnSelection(header)">
          <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" class="me-1" /> -->
          {{ header }}
        </a>
      </li>

      <li>
        <hr class="tasks-filter-menu-item-divider">
      </li>
      
      <li>
        <a href class="task-filter-menu-item" @click.prevent>
          <font-awesome-icon icon="fa-solid fa-plus" class="me-1" />
          Add rule
        </a>
      </li>
    </ul>

    <!-- Filter setup -->
    <ul :class="{ show: showFilterSetupMenu }" class="tasks-filter-setup-menu">
      <li>
        <span>{{ selectedColumn }}</span>
        <button type="button" class="btn btn-sm btn-light shadow-none" @click="showFilterOptionsMenu = !showFilterOptionsMenu">
          {{ selectedOperator }}
        </button>

        <!-- Filter options -->
        <ul :class="{ show: showFilterOptionsMenu }" class="tasks-filter-options-menu">
          <li v-for="availableFilter in availableFilters" :key="availableFilter">
            <a href class="task-filter-menu-item" @click.prevent="selectedOperator = availableFilter, showFilterOptionsMenu = false">
              {{ availableFilter }}
            </a>
          </li>
        </ul>
      </li>
      <li><input v-model="selectedConstraint" type="text" @keyup.enter="addRule"></li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useFiltering } from './composables'

import DynamicTableRule from './DynamicTableRule.vue'

export default {
  name: 'DynamicTableFilterBadge',
  components: {
    DynamicTableRule
  },
  emits: {
    'update:filter-rules' () {
      return true
    }
  },
  setup () {
    const headers = inject('headers')
    const { availableFilters } = useFiltering()
    return {
      headers,
      availableFilters
    }
  },
  data () {
    return {
      showFilterMenu: false,
      showFilterSetupMenu: false,
      showFilterOptionsMenu: false,

      selectedColumn: null,
      selectedOperator: 'Is',
      selectedConstraint: null,

      rules: []
    }
  },
  computed: {
    
  },
  methods: {
    handleColumnSelection (header) {
      this.selectedColumn = header
      this.showFilterMenu = false
      this.showFilterSetupMenu = true
    },
    addRule () {
      this.rules.push({
        column: this.selectedColumn,
        operator: this.selectedOperator,
        constraint: this.selectedConstraint
      })
      this.showFilterSetupMenu = false
      this.$emit('update:filter-rules', this.rules)
    }
  }
}
</script>
