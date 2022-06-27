<template>
  <section ref="link" class="section-parallax">
    <header>
      <nav class="navbar fixed-top navbar-dark">
        <div class="container">
          <a href="" class="navbar-brand fw-bold text-uppercase">Enterprise</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'templates_view' }" class="nav-link">
                Home
              </router-link>
            </li>
          </ul>

          <div class="hamburger-menu">
            <div class="bar"></div>
          </div>
        </div>
      </nav>
    </header>

    <section :style="`background-image: url(${require('@/assets/hero1.jpg')});`" class="lax intro text-white" data-speed="0.2">
      <div class="gradient"></div>
      <div class="d-flex justify-content-center">
        <div class="text-center text-white mt-5">
          <h1 class="display-3 fw-bold">
            Slide number 1
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio asperiores eum,
            saepe hic sequi veritatis quod non quidem esse molestiae omnis alias iure tenetur
            eligendi magni minus earum, perspiciatis quaerat.
          </p>
          <button type="button" class="btn btn-lg btn-primary">
            Press me
          </button>
        </div>
      </div>
    </section>

    <section class="lax text-white bg-dark" data-speed="0.3">
      <div class="container d-flex align-middle justify-content-center">
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <h1 class="display-3 fw-bold">
              I love Kendall
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quisquam ut deserunt accusamus facilis
              ducimus et cupiditate laborum illo esse libero, animi explicabo dolorem incidunt neque facere, sunt magni
              officia?</p>
          </div>

          <div class="col-sm-12 col-md-7">
            <img :src="require('@/assets/hero1.jpg')" class="img-fluid rounded shadow ms-4" alt="">
          </div>
        </div>
      </div>
    </section>

    <section :style="`background-image: url(${require('@/assets/hero3.jpg')});`" class="lax intro text-white" data-speed="0.4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            Somehing
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { useScroll } from '@vueuse/core'
import { ref } from 'vue'

export default {
  name: 'ParallaxWebsite',
  setup () {
    const target = ref(null)
    const sections = ref(null)
    const {y, isScrolling, directions } = useScroll(target)
    return {
      target,
      sections,
      scrollY: y,
      isScrolling,
      directions
    }
  },
  data: () => ({
    speed: 0.2
  }),
  mounted () {
    this.target = window.document
    this.sections = document.querySelectorAll('.lax')
    window.addEventListener('scroll', this.pageEventListener)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.pageEventListener)
  },
  methods: {
    pageEventListener () {
      const pageYOffset = window.scrollY
      this.sections.forEach((section) => {
        const speed = section.dataset.speed
        section.style.transform = `translateY(-${pageYOffset * speed}px)`

        const shadow = document.querySelector('.shadow')
        shadow.style.height = `${pageYOffset * 0.5 + 300}`
      })
    }
  }
}
</script>

<style scoped>

section {
  position: relative;
}

section.intro {
  height: 100vh;
}

.navbar {
  height: 100px;
}

.lax {
  position: relative;
  height: auto;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hamburger-menu {
  width: 1.55rem;
  height: 1.55rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bar {
  position: relative;
  width: 1.2rem;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
}

.bar::before, .bar::after {
  content: "";
  position: absolute;
  width: 1.55rem;
  height: 3px;
  right: 0;
  background-color: #fff;
  border-radius: 3px;
}

.bar::before {
  transform: translateY(-8px);
}

.bar::after {
  transform: translateY(8px);
}

/* .border {
  position: absolute;
  width: 30%;
  height: 3px;
  background-color: #fff;
  bottom: 0;
  left: 0;
} */

.gradient {
  position: absolute;
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(to top, rgba(38, 38, 38, 1), transparent);
}
</style>
