<template>
  <section>
    <header>
      <!-- Sidebar -->
      <nav link="sidebar" id="sidebar" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <!-- NOTE: Pass links to props -->
            <router-link :to="{ name: 'youtube_view' }" class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true">
              <span class="mdi mdi-youtube me-3"></span>
              <span>Youtube</span>
            </router-link>

            <router-link :to="{ name: 'lequipe_view' }" class="list-group-item list-group-item-action py-2 ripple">
              <span class="mdi mdi-wikipedia me-3"></span>
              <span>L'équipe</span>
            </router-link>
            
            <router-link :to="{ name: 'spotify_view' }" class="list-group-item list-group-item-action py-2 ripple">
              <span class="mdi mdi-spotify me-3"></span>
              <span>Spotify</span>
            </router-link>
          </div>
        </div>
      </nav>

      <!-- Navbar -->
      <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" aria-controls="sidebarMenu" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>

          <router-link :to="{ name: 'templates_view' }" class="navbar-brand">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" loading="lazy"
              alt="Image 4" />
          </router-link>

          <ul class="navbar-nav ms-auto d-flex flex-row">
            <nav-item-vue :to="{ name: 'templates_view' }" link-name="Some link" />
          </ul>
        </div>
      </nav>
    </header>

    <!-- Main -->
    <main>
      <div class="container pt-4">
        <slot></slot>
      </div>
    </main>

    <button id="back-to-top" class="btn btn-primary btn-floating">
      Top
    </button>

    <!-- Footer -->
    <base-footer-vue />
  </section>
</template>

<script>
/*
 * A dashboard ttemplate that could be used for wrapping
 * components via the slot or by using a router view
 * 
 **/ 
import { provide } from 'vue'
import { useDarkMode } from '../composables/darkmode'
import BaseFooterVue from './BaseFooter.vue'

export default {
  name: 'DashboardLayout',
  setup () {
    var { darkMode } = useDarkMode()
    provide('darkMode', darkMode)
    return {
      darkMode
    }
  },
  components: {
    BaseFooterVue
  }
}
</script>

<style scoped>






body {
  background-color: #fbfbfb;
}

main {
  margin-top: 58px;
  margin-bottom: 58px;
}

@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }

  footer {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}

.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.router-link-exact-active {
    z-index: 2;
    color: #fff;
    background-color: #1266f1;
    border-color: #1266f1;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

#back-to-top {
  position: fixed;
  z-index: 1000;
  top: 90%;
  right: 2%;
}
</style>
