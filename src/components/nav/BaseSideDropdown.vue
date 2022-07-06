<template>
  <li class="nav-item dropdown">
    <a :class="{ show }" class="nav-link dropdown-toggle" href @click.prevent="showDropdown">
      Menu item
    </a>

    <ul ref="link" :class="{ show, 'bg-dark' : darkMode }" class="dropdown-menu" @mouseleave="show = false">
      <template v-for="(item, i) in items" :key="i">
        <li v-if="hasSubmenu(item.subMenu)" class="has-submenu">
          <a class="dropdown-item dropdown-toggle" href @click.prevent>
            {{ item.name }}
          </a>

          <div :class="{ 'bg-dark text-light': darkMode }" class="megasubmenu dropdown-menu">
            <div class="row">
              <div class="col-12">
                <h6 class="title">{{ item.subMenu.title }}</h6>
                <ul class="list-unstyled">
                  <li v-for="(link, t) in item.subMenu.links" :key="t">
                    <a :href="link.href" :class="{ 'text-light': darkMode, 'text-dark': !darkMode }">{{ link.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li v-else>
          <a :href="item.href" :class="{ 'text-light': darkMode }" class="dropdown-item">
            {{ item.name }}
          </a>
        </li>
      </template>

      <!-- <li><a class="dropdown-item" href="#"> Dropdown item 1 </a></li>

      <li class="has-submenu">
        <a class="dropdown-item dropdown-toggle" href @click.prevent> Dropdown item 4 </a>

        <div class="megasubmenu dropdown-menu">
          <div class="row">
            <div class="col-12">
              <h6 class="title">Title Menu One</h6>
              <ul class="list-unstyled">
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      
      <li class="has-submenu">
        <a class="dropdown-item dropdown-toggle" href @click.prevent> Dropdown item 5 </a>

        <div class="megasubmenu dropdown-menu">
          Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </li>
      
      <li><a class="dropdown-item" href="#"> Dropdown item 6 </a></li> -->
    </ul>
  </li>
</template>

<script>
import { inject, ref } from 'vue'
import sidedropdown from '../../data/sidedropdown.json'

export default {
  name: 'BaseSideDropdown',
  setup () {
    const show = ref(false)
    const darkMode = inject('darkMode')
    return {
      show,
      darkMode,
      items: sidedropdown
    }
  },
  mounted () {
    this.target = this.$refs.link
  },  
  methods: {
    showDropdown () {
      this.show = !this.show
    },
    hasSubmenu (items) {
      if (!items) {
        return false
      } else {
        return Object.keys(items).length > 0
      }
    }
  }
}
</script>
