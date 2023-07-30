<template>
  <div class="row">
    <!-- Group Cards -->
    <group-card v-for="(group, i) in groups" :key="group" :class="{ 'me-2': i >= 0 }" :group="group" @drop="handleDrop" @dragenter.prevent @dragover.prevent="handleDragOver($event, group)" @new-task="handleNewTask" />

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
import GroupCard from './GroupCard.vue'

export default {
  name: 'BaseTrello',
  components: {
    BaseInput,
    BaseModal,
    GroupCard
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
      // Group that is currently hovered upon
      this.currentlyDraggedOver = group
    },
    reset () {
      this.currentlyDraggedOver = null
      this.currentlyDraggedOverTask = null
    },
    handleNewTask (items) {
      // Creates a new task for the current group
      this.$emit('new-task', items)
    },
    handleCreateNewGroup () {
      this.groups.push(this.newGroupName)
    },
    handleChangeGroupName () {
      this.editGroupName = false
    },
    handleCopyGroup (group) {
      group
    }
  }
}
</script>

<style>
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
</style>
