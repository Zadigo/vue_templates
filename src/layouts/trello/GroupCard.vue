<template>
  <div :aria-label="group" class="col-sm-12 col-md-3 bg-secondary p-3 rounded-2 drop-zone">
    <div class="d-flex justify-content-between mb-3 align-items-center">
      <base-input v-if="editGroupName" id="new-group-name" v-model="newGroupName" class="me-2" @keypress.enter="handleChangeGroupName" @mouseleave="editGroupName = false" />
      <h4 v-else class="group-name m-0 me-2" @click="editGroupName = true">{{ group }}</h4>
    
      <!-- Options -->
      <base-dropdown-button id="group-menu" v-slot="{ show }" size="sm" color="light">
        <dropdown-menu id="group-menu" :show="show">
          <dropdown-item link-name="Ajouter une carte" @click="showCreateCardTop = true" />
          <dropdown-item link-name="Copier la liste" @click="handleCopyGroup(group)" />
          <dropdown-item link-name="Déplacer la liste" />
          <dropdown-item-divider />
          <dropdown-item link-name="Trier par" @click="showSortingMenu = true" />
          <dropdown-item-divider />
          <dropdown-item link-name="Déplacer toutes les cartes de cette liste..." />
        </dropdown-menu>

        <dropdown-menu id="group-menu" :show="showSortingMenu">
          <dropdown-item link-name="Nom" />
        </dropdown-menu>
      </base-dropdown-button>
    </div>

    <!-- Create New -->
    <transition name="trello" mode="out-in">
      <create-new-task-input v-if="showCreateCardTop" class="mb-3" @toggle:new-task="showCreateCardTop = !showCreateCardTop" @create:new-task="handleNewTask" />
    </transition>

    <!-- Tasks -->
    <transition-group name="trello">
      <task-card v-for="(item, i) in orderedByGroups[group]" :key="item.id" :item="item" :class="{ 'mb-1': i >= 0 }" class="card" draggable="true" @dragstart="handleStartDrag($event, item)" @dragend="handleDragEnd" @dragover="handleTaskDragover($event, item)" />
    </transition-group>
  
    <!-- Create New -->
    <transition name="trello" mode="out-in">
      <create-new-task-input v-if="showCreateCardBottom" @toggle:new-task="showCreateCardBottom = !showCreateCardBottom" @create:new-task="handleNewTask" />
      <button v-else type="button" class="btn btn-block btn-light mt-3 shadow-none btn-rounded" @click="showCreateCardBottom = true">
        Create
      </button>
    </transition>
  </div>
</template>

<script>
import { inject } from 'vue'
import _ from 'lodash'

import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue'
import CreateNewTaskInput from './CreateNewTaskInput.vue'
import DropdownMenu from '@/layouts/bootstrap/buttons/DropdownMenu.vue'
import DropdownItem from '@/layouts/bootstrap/buttons/DropdownItem.vue'
import DropdownItemDivider from '@/layouts/bootstrap/buttons/DropdownItemDivider.vue'
import TaskCard from './TaskCard.vue'

export default {
  name: 'GroupCard',
  components: {
    DropdownItemDivider,
    BaseDropdownButton,
    BaseInput,
    DropdownMenu,
    DropdownItem,
    TaskCard,
    CreateNewTaskInput
},
  props: {
    group: {
      type: String
    }
  },
   emits: {
    'update:drop-task' () {
      return true
    },
    'new-task' () {
      return true
    }
  },
  setup () {
    const orderedByGroups = inject('orderedByGroups')
    return {
      orderedByGroups
    }
  },
  data () {
    return {
      showCreateCardBottom: false,
      showCreateCardTop: false,
      showSortingMenu: false,
      editGroupName: false,
      
      newGroupName: null,
      // newTaskName: null
    }
  },
  computed: {
    canCreate () {
      return this.newTaskName === null || this.newTaskName === ''
    }
  },
  mounted () {
    this.newGroupName = this.group
  },
  methods: {
    handleStartDrag (e, item) {
      // Handles the drag of a task card
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemID', item.id)
    },
    handleDragEnd () {

    },
    handleTaskDragover (e, item) {
      // Handles the action where a card is dragged over another
      // task card. This should allow reordering the tasks
      this.currentlyDraggedOverTask = _.findIndex(this.items, ['id', item.id])
      console.log(this.currentlyDraggedOverTask)
    },
    handleNewTask (name) {
      // Creates a new task for the current group
      this.$emit('new-task', [this.group, name])
      this.newTaskName = null
      this.showCreateCardBottom = false
      this.showCreateCardTop = false
    },
    handleCreateNewGroup () {
      this.groups.push(this.newGroupName)
    },
    handleChangeGroupName () {
      this.editGroupName = false
    },
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

.drop-zone {
  height: auto;
  min-height: 400px;
}
.group-name {
  cursor: pointer;
}
</style>
