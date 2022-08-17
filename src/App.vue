<template>
  <router-view />
</template>

<script>
// import { useUrls, loadView } from './composables/utils'

export default {
  name: 'App',
  setup () {
    // const { rebuildPath } = useUrls()
  }
  // mounted () {
  //   this.$session.create('something', 1)
  // }
}
</script>

<style>
@import url('./assets/style.css');
@import url('./assets/loading.css');

* {
  font-family: 'Ubuntu', 'Roboto', sans-serif;
}
</style>
