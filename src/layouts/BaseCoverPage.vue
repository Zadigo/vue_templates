<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">Cover</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link v-for="i in 3" :key="i" :to="{ name: 'templates_view'}" class="nav-link fw-bold py-1 px-0" aria-current="page">
            Home
          </router-link>
          <!-- <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
          <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
          <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a> -->
        </nav>
      </div>
    </header>

    <main class="px-3">
      <h1><slot name="lead" /></h1>
      <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
      <p class="lead"><router-link :to="{ name: 'templates_view'}" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</router-link></p>
    </main>

    <footer class="mt-auto text-white-50">
      <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseCoverPage',
  mounted () {
    const html = document.querySelector('html')
    html.classList.add('h-100')
    const body = document.querySelector('body')
    body.classList.add('d-flex', 'h-100', 'text-center', 'text-bg-dark')
  },
  beforeUnmount () {
    const html = document.querySelector('html')
    html.classList.remove('h-100')
    const body = document.querySelector('body')
    body.classList.remove('d-flex', 'h-100', 'text-center', 'text-bg-dark')
  }
}
</script>

<style scoped>
.cover-container {
  max-width: 42em;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .router-link-exact-active,
.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, .5);
  border-bottom: .25rem solid transparent;
}
</style>
