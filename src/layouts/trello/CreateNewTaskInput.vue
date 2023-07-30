<template>
  <div class="d-block mt-3">
    <textarea id="task-name" v-model="newTaskName" cols="30" rows="3" class="form-control mb-1"></textarea>
    <button :disabled="canCreate" type="button" class="btn btn-primary btn-sm me-2 shadow-none" @click="doValidateNewTask">Create</button>
    <button type="button" class="btn btn-light btn-sm shadow-none" @click="doShowNewTask">X</button>
  </div>
</template>

<script>
export default {
  name: 'CreateNewTaskInput',
  emits: {
    'toggle:new-task' () {
      return true
    },
    'create:new-task' () {
      return true
    }
  },
  data () {
    return {
      newTaskName: null
    }
  },
  methods: {
    doShowNewTask () {
      this.$emit('toggle:new-task')
    },
    doValidateNewTask () {
      this.$emit('create:new-task', this.newTaskName)
    }
  }
}
</script>
