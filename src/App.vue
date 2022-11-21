<template>
  <router-view :key="$route.name" />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/style.css');
@import url('./assets/loading.css');

* {
  font-family: 'Ubuntu', 'Roboto', sans-serif;
}
</style>
