<template>
  <div class="row">
    <!-- Group Cards -->
    <div class="row d-flex justify-content-left align-items-start p-5 gap-2"> 
      <!-- Groups -->
      <div v-for="group in groups" :key="group" :aria-label="group" class="col-sm-12 col-md-3 bg-secondary p-3 rounded-2 drop-zone" @drop="handleDrop" @dragenter.prevent @dragover.prevent="handleDragOver($event, group)">
        <div class="d-flex justify-content-between mb-3 align-items-center">
          <base-input v-if="editGroupName" id="new-group-name" class="me-2" @keypress.enter="handleChangeGroupName" @mouseleave="editGroupName = false" />
          <h4 v-else class="group-name m-0 me-2" @click="editGroupName = true">{{ group }}</h4>
          
          <!-- Options -->
          <base-dropdown-button id="group-menu" v-slot="{show}" size="sm" color="light">
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
          <div v-if="showCreateCardTop" class="d-block mb-3">
            <textarea id="task-name" cols="30" rows="3" class="form-control mb-1"></textarea>
            <button type="button" class="btn btn-primary btn-sm me-2 shadow-none">Create</button>
            <button type="button" class="btn btn-light btn-sm shadow-none" @click="showCreateCardTop = false">X</button>
          </div>
        </transition>

        <!-- Tasks -->
        <transition-group name="trello">
          <task-card v-for="(item, i) in orderedByGroups[group]" :key="item.id" :item="item" :class="{ 'mb-1': i >= 0 }" class="card" draggable="true" @dragstart="handleStartDrag($event, item)" @dragend="handleDragEnd" @dragover="handleTaskDragover($event, item)" />
        </transition-group>
        
        <!-- Create New -->
        <transition name="trello" mode="out-in">
          <div v-if="showCreateCardBottom" class="d-block mt-3">
            <textarea id="task-name" cols="30" rows="3" class="form-control mb-1"></textarea>
            <button type="button" class="btn btn-primary btn-sm me-2 shadow-none">Create</button>
            <button type="button" class="btn btn-light btn-sm shadow-none" @click="showCreateCardBottom = false">X</button>
          </div>
          <button v-else type="button" class="btn btn-block btn-light mt-3 shadow-none btn-rounded" @click="showCreateCardBottom = true">
            Create
          </button>
        </transition>
      </div>

      <div class="col-sm-12 col-md-3 bg-dark p-3 rounded-2">
        <button type="button" class="btn btn-lg btn-light btn-block shadow-none" @click="showNewGroupModal = true">Create</button>
      </div>
    </div>

    <!-- Create Group -->
    <base-modal id="new-group" :show="showNewGroupModal" size="sm" centered @close="showNewGroupModal = false">
      <template #default>
        <div class="row">
          <div class="col-12">
            <base-input id="new-group" v-model="newGroupName" placeholder="New group" aria-label="Create a new group" />
          </div>
        </div>
      </template>

      <template #footer>
        <div class="modal-footer">
          <button :disabled="!groupNameIsValid" type="button" class="btn btn-md btn-primary" @click="handleCreateNewGroup">
            Create
          </button>
        </div>
      </template>
    </base-modal>
  </div>
</template>

<script>
import _ from 'lodash'
import { computed, getCurrentInstance, provide, ref } from 'vue'
import BaseInput from '@/layouts/bootstrap/BaseInput.vue'
import BaseModal from '@/layouts/bootstrap/BaseModal.vue'
import BaseDropdownButton from '@/layouts/bootstrap/buttons/BaseDropdownButton.vue'
import DropdownMenu from '@/layouts/bootstrap/buttons/DropdownMenu.vue'
import DropdownItem from '@/layouts/bootstrap/buttons/DropdownItem.vue'
import DropdownItemDivider from '@/layouts/bootstrap/buttons/DropdownItemDivider.vue'
import TaskCard from './TaskCard.vue'

export default {
  name: 'BaseTrello',
  components: {
    BaseDropdownButton,
    BaseInput,
    BaseModal,
    DropdownMenu,
    DropdownItem,
    DropdownItemDivider,
    TaskCard
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: {
    'update:drop-task' () {
      return true
    },
    'update:copy-group' () {
      return true
    },
    'new-task' () {
      return true
    }
  },
  setup () {
    const app = getCurrentInstance()
    const groups = ref([])
    const orderedByGroups = computed(() => {
      const container = {}
      groups.value.forEach((name) => {
        container[name] = _.filter(app.ctx.items, ['state', name])
      })
      return container
    })
    provide('orderedByGroups', orderedByGroups)
    provide('groups', groups)
    return {
      groups,
      orderedByGroups
    }
  },
  data () {
    return {
      editGroupName: false,
      previouslyMoved: null,
      showNewGroupModal: false,
      newGroupName: null,
      currentlyDraggedOver: null,
      currentlyDraggedOverTask: null,
      showCreateCardTop: false,
      showCreateCardBottom: false,
      showSortingMenu: false,
      newItems: {}
    }
  },
  computed: {
    groupNameIsValid () {
      // Checks that the new group name does not
      // already exsit
      if (this.newGroupName === null ||this.newGroupName === '') {
        return false
      } else {
        const logic = this.groups.map((group) => {
          return (
            this.newGroupName === group ||
            // this.newGroupName.includes(group) ||
            this.newGroupName.toUpperCase() === group
            // this.newGroupName.toUpperCase().includes(group)
          )
        })
        return logic.every(x => x === false)
      }
    }
  },
  beforeMount () {
    const result = this.items.map((item) => {
      return item.state
    })
    this.groups = _.uniq(result)
  },
  methods: {
    handleStartDrag (e, item) {
      // Handles the drag of a task card
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemID', item.id)
    },
    handleDrop (e) {
      // Handles the drop of a task card on a drop zone
      const itemID = e.dataTransfer.getData('itemID')
      const item = _.find(this.items, { id: itemID * 1 })
      this.previouslyMoved = item
      item.state = this.currentlyDraggedOver
      this.$emit('update:drop-task', this.items)
      this.reset()
    },
    handleDragOver (e, group) {
      this.currentlyDraggedOver = group
    },
    handleTaskDragover (e, item) {
      // Handles the action where a card is dragged over another
      // task card. This should allow reordering the tasks
      this.currentlyDraggedOverTask = _.findIndex(this.items, ['id', item.id])
      console.log(this.currentlyDraggedOverTask)
    },
    reset () {
      this.currentlyDraggedOver = null
      this.currentlyDraggedOverTask = null
    },
    handleNewTask (group) {
      this.$emit('new-task', this.newItems[group], group)
      this.newItems = {}
    },
    handleCreateNewGroup () {
      this.groups.push(this.newGroupName)
    },
    handleChangeGroupName () {
      this.editGroupName = false
    },
    handleCopyGroup (group) {
      const items = this.orderedByGroups[group]
      const newItems = [...items]
      this.$emit('update:copy-group', newItems)
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

.trello-enter-active,
.trello-leave-active {
  transition: all .20s ease-in-out;
}
.trello-enter-from,
.trello-leave-to {
  opacity: 0;
  transform: scale(1.1, 1.1);
}
.trello-enter-to,
.trello-leave-from {
  opacity: 1;
  transform: scale(1, 1);
}
.trello-move {
  transition: all .10s ease-in-out;
}
.drop-zone {
  height: auto;
  min-height: 400px;
}
.group-name {
  cursor: pointer;
}
</style>
