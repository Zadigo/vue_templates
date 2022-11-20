<template>
  <div v-if="isSorted" class="tasks-sort pt-3">
    <div class="badge rounded-pill text-bg-primary mx-1 p-2" @click="showBadgeMenu = !showBadgeMenu">
      <font-awesome-icon icon="fa-solid fa-sort" class="me-1" />
      {{ sortingBadgeText }}
    </div>

    <ul :class="{ show: showBadgeMenu }" class="tasks-sort-menu">
      <li v-for="(columnToSort, i) in columnsToSort" :key="i">
        <a href class="task-cell-menu-item" @click.prevent>
          <!-- <font-awesome-icon icon="fa-solid fa-arrow-up" class="me-1" /> -->
          {{ columnToSort }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    columnsToSort: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showBadgeMenu: false
    }
  },
  computed: {
    isSorted () {
      return this.columnsToSort.length > 0
    },
    sortingBadgeText () {
      const count = this.columnsToSort.length
      if (count === 1) {
        return `${this.columnsToSort[0][0]}`
      } else {
        return `${count} sorts`
      }
    }
  }
}
</script>

<style scoped>
.tasks-sort-menu {
  top: 130%;
}
</style>
