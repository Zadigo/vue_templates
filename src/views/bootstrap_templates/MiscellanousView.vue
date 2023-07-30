<template>
  <section class="row">
    <div class="col-12">
      <drop-zone :items="items" @update:drop-task="handleDropTaks" @new-task="handleNewTask" />
    </div>
  </section>
</template>

<script>
import DropZone from '@/layouts/trello/DropZone.vue'
import { useUtilities }  from '@/composables/utils'

export default {
  name: 'MiscellanousView',
  components: {
    DropZone
  },
  setup () {
    const { getRandomNumber } = useUtilities()
    return {
      getRandomNumber
    }
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'A',
          state: 'done'
        },
        {
          id: 16,
          title: 'Z',
          state: 'done'
        },
        {
          id: 6,
          title: 'E',
          state: 'done'
        },
        {
          id: 3,
          title: 'B',
          state: 'done'
        },
        {
          id: 5,
          title: 'C',
          state: 'undone'
        },
        {
          id: 9,
          title: 'W',
          state: 'done'
        },
        {
          id: 98,
          title: 'X',
          state: 'done'
        }
      ]
    }
  },
  methods: {
    handleDropTaks (items) {
      this.$localstorage.create(items)
    },
    handleNewTask (items) {
      this.items.push({
        id: this.getRandomNumber(1, 5000),
        title: items[1],
        state: items[0]
      })
    }
  }
}
</script>
