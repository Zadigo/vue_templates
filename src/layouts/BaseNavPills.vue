<template>
  <div class="pills-wrappeer">
    <nav class="nav nav-pills nav-justified">
      <a v-for="(item, i) in items" :key="item.name" :aria-current="i == selected" :class="{ active: item.active }" class="nav-link" href @click.prevent="selectItem(i, item)">
        {{ item.name }}
      </a>
    </nav>

    <div v-if="hasDefault" class="py-3">
      <transition name="slide" mode="out-in">
        <slot :selected="selected"></slot>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPills',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: {
    change () {
      return true
    },
    click () {
      return true
    }
  },
  data: () => ({
    selected: 0
  }),
  computed: {
    hasDefault () {
      return this.$slots.default || false
    }
  },
  watch: {
    selected (newValue, oldValue) {
      this.$emit('change', { previous: oldValue, new: newValue })
    }
  },
  beforeMount () {
    this.items.forEach(item => {
      item.active = false
    })
    // this.items[0].active = true
  },
  methods: {
    selectItem (i, item) {
      this.items.forEach(item => {
        item.active = false
      })
      item.active = !item.active
      this.selected = i
      this.$emit('click', i, item)
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to,
.slide-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
</style>
