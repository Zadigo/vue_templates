<template>
  <div class="container my-5">
    <div class="my-3">
      <base-input id="add" @update:initial="addValue" />

      <p>insertAt: {{ insertAt }}</p>
    </div>

    <!-- <div class="tasks" @dragenter.prevent @dragover.prevent @drop="dropRow($event)">
      <div v-for="item in items" :key="item.id" class="task-row" draggable="true" @dragstart="dragRow($event, item)" @dragover="dragOverRow($event, item)">
        <div v-for="task in item.tasks" :key="task.value" class="task-cell">
          {{ task.value }}
        </div>
      </div>
    </div> -->

    <dynamic-table :items="items" :search="'google'" />
  </div>
</template>

<script>
import _ from 'lodash'

import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import DynamicTable from '@/layouts/table/DynamicTable.vue'

export default {
  components: {
    BaseInput,
    DynamicTable
  },
  data () {
    return {
      insertAt: null,
      items: [
        {
          id: 1,
          tasks: [
            {
              id: 1,
              header: 'name',
              value: 'Kendall'
            },
            {
              id: 4,
              header: 'surname',
              value: 'Jenner'
            },
            {
              id: 5,
              header: 'age',
              value: '15'
            }
          ]
        },
        {
          id: 3,
          tasks: [
            {
              id: 1,
              header: 'name',
              value: 'Hailey'
            },
            {
              id: 9,
              header: 'surname',
              value: 'Baldwin'
            },
            {
              id: 5,
              header: 'age',
              value: '45'
            }
          ]
        }
      ]
    }
  },
  methods: {
    dragRow (e, item) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('row', item.id)
    },
    dropRow (e) {
      const row = e.dataTransfer.getData('row')
      const rowData = this.items[_.findIndex(this.items, ['id', row * 1])]
      this.items.splice(this.insertAt, 0, rowData)
    },
    dragOverRow (e, item) {
      e
      this.insertAt = _.findIndex(this.items, ['id', item.id])
    },
    addValue (value) {
      this.items.push({
        id: 4,
        tasks: [
          {
            value: value
          },
          {
            value: 3
          },
          {
            value: 4
          }
        ]
      })
    }
  }
}
</script>
<!-- 
<style scoped>
.tasks {
  background-color: rosybrown;
  width: 100%;
  height: auto;
  padding: .5rem;
}
.tasks .task-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
  padding: 0 1rem 0 1rem;
}

.tasks .task-cell {
  transition: all .3s ease-in;
  padding: .5rem;
  background-color: white;
  margin: .15rem;
  width: 100%;
  cursor: pointer;
}

.tasks .task-cell:hover,
.tasks .task-cell:focus {
  background-color: rgba(38, 38, 38, .3);
}

.tasks .task-cell.active {
  background-color: blue;
}
</style> -->
