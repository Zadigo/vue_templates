<template>
  <div class="btn-group">
    <button :class="{ [`btn-${color}`]: true }" type="button" class="btn">
      Share
    </button>

    <button id="dropdownMenuButton1" :class="buttonClasses" :aria-expanded="show" type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" @click="toggle">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>

    <ul ref="link" :class="{ show }" aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BaseDropGroup',
  props: {
    // animation: {
    //   type: String,
    //   default: 'scale'
    // },
    // buttonName: {
    //   type: String
    // },
    color: {
      type: String,
      default: 'primary'
    }
    // items: {
    //   type: Array,
    //   required: true
    // }
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
      show: false
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
  watch: {
    show (newValue) {
      if (newValue) {
        this.$refs.link.style.position = 'absolute'
        // this.$refs.link.style.inset = '0px auto auto 0px'
        // this.$refs.link.style.transform = 'translate(89px, 38px)'
        this.$refs.link.style.margin = '0px'
      } else {
        if (this.$refs.link.classList.contains('show')) {
          this.$refs.link.style.animation = 'scaleReverse .3s ease-out'
          this.$refs.link.style = null
        }
      }
      this.show = newValue
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
