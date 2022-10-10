<template>
  <div :id="'accordionExample'" :class="{'border-dark': darkMode}" class="accordion">
    <div v-for="(item, i) in computedItems" :key="i" class="accordion-item">
      <h2 id="headingOne" class="accordion-header">
        <button :class="{ collapsed: !item.show, 'bg-dark text-light': darkMode}" :aria-expanded="item.show" :aria-controls="`collapse-${i}`" class="accordion-button" type="button" @click="expandItem(item)">
          {{ item.title }}
        </button>
      </h2>

      <div v-if="item.show" :id="`collapse-${i}`" :class="{show: item.show, 'bg-dark text-light': darkMode}" class="accordion-collapse collapse" aria-labelledby="headingOne">
        <div class="accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BaseAccordion',
  props: {
    items: {
      type: Array
    }
  },
  emits: {
    click () {
      return true
    }
  },
  setup () {
    const darkMode = inject('darkMode', false)
    return {
      darkMode
    }
  },
  data () {
    return {
      computedItems: []
    }
  },
  beforeMount () {
    this.computedItems = this.items.map((item) => {
      item.show = false
      return item
    })
  },
  methods: {
    expandItem (item) {
      item.show = !item.show
      this.$emit('click', item)
    }
  }
}
</script>

<style scoped>
.border-dark {
  border-color: #373b3e;
}
</style>
