<template>
  <nav :class="{'pagination-dark': darkMode}" aria-label="Page navigation example">
    <ul :class="paginationClasses" class="pagination">
      <li :class="[selected === 1 ? 'disabled' : null]" class="page-item">
        <a class="page-link" href @click.prevent="substract">
          Previous
        </a>
      </li>
      
      <li v-for="page in pages" :key="page" :class="[selected === page ? 'active' : null]" class="page-item">
        <a class="page-link" href @click.prevent="selected = page, $emit('page-click', page)">
          {{ page }}
        </a>
      </li>

      <li :class="[selected === pages ? 'disabled' : null]" class="page-item">
        <a class="page-link" href @click.prevent="add">
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BasePagination',
  props: {
    pages: {
      type: Number,
      default: 1
    },
    circle: {
      type: Boolean
    },
    centered: {
      type: Boolean
    }
  },
  emits: {
    'page-click' () {
      return true
    }
  },
  setup () {
    const darkMode = inject('darkMode')
    return {
      darkMode
    }
  },
  data () {
    return {
      selected: 1
    }
  },
  computed: {
    paginationClasses () {
      return [
        // pagination-md 
        this.circle ? 'pagination-circle' : null,
        this.centered ? 'justify-content-center' : null,
      ]
    }
  },
  methods: {
    add () {
      const result = this.selected + 1 > this.pages ? 1 : this.selected + 1
      this.selected = result
      this.$emit('page-click', result)
    },
    substract () {
      const result = this.selected - 1 <= 0 ? this.pages : this.selected - 1
      this.selected = result
      this.$emit('page-click', result)
    }
  }
}
</script>

<style scoped>
.pagination-dark .page-item .page-link {
    color: hsla(0,0%,100%,.55);
  }
.pagination-dark .page-item.disabled .page-link {
  color: hsla(0, 0%, 100%, .55);
  pointer-events: none;
  background-color: rgba(38, 38, 38, 1);
  border-color: #e0e0e0;
}
/* .pagination-dark .page-item:hover {
  color: #212529;
} */
</style>

