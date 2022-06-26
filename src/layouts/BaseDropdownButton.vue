<template>
  <div class="dropdown">
    <button :class="buttonClasses" :aria-expanded="show" id="dropdownMenuButton1" class="btn btn-lg dropdown-toggle"
      type="button" @click="toggle">
      <span v-if="icon" :class="{ [`mdi-${icon}`]: true }" class="mdi me-2"></span>
      {{ buttonName }}
    </button>

    <ul ref="link" :class="{ show: show }" aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
      <li v-for="(item, i) in items" :key="item.name">
        <a class="dropdown-item" href @click.prevent="show = !show, $emit('dropdown-click', [i, item])">
          <span v-if="item.icon" :class="{ [`mdi-${item.icon}`]: true }" class="mdi me-2"></span>
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdownButton',
  emits: ['click', 'dropdown-click'],
  props: {
    animation: {
      type: String,
      default: 'scale'
    },
    buttonName: {
      type: String
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    show: false
  }),
  watch: {
    show (newValue) {
      if (newValue) {
        this.$refs.link.style.position = 'absolute'
        // this.$refs.link.style.inset = 'auto auto 0px 0px'
        // this.$refs.link.style.margin = '0px'
        // this.$refs.link.style.transform = 'translate(0px, -40px)'
      } else {
        if (this.$refs.link.classList.contains('show')) {
          this.$refs.link.style.animation = 'scaleReverse .3s ease-out'
          this.$refs.link.style = null
        }
      }
      this.show = newValue
    }
  },
  computed: {
    buttonClasses () {
      return [
        this.show ? 'show' : null,
        {
          [`btn-${this.color}`]: true
        }
      ]
    }
  },
  // mounted() {
  //   this.$refs.link.style.animation = `${this.animation} .3s ease`
  //   var body = document.querySelector('body')
  //   body.addEventListener('click', (e) => {
  //       // console.log(e)
  //       if (!e.target.classList.contains('dropdown')) {
  //           this.show = !this.show
  //       }
  //   })
  // },
  methods: {
    toggle () {
      this.show = !this.show
      this.$emit('click')
    }
  } 
}  
</script>

<style scoped>
.dropdown-menu {
  animation: scale .3s ease;
}

@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }

  99% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes scaleReverse {
  0% {
    opacity: 1;
    transform: scale(1, 1);
  }

  99% {
    opacity: 0;
    transform: scale(.9, .9);
  }
}
</style>
