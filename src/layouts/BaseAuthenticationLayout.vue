<template>
  <section id="authentication" class="height-100 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <base-card class="my-5">
            <template #body>
              <router-view></router-view>
            </template>
          </base-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/layouts/bootstrap/cards/BaseCard.vue';
export default {
  components: {
    BaseCard
  }
}
</script>

<style scoped>
.height-100 {
  min-height: 100vh;
}
[class*='height-'] {
  display: flex;
}
[class*='height-']:not(.align-items-initial) {
  align-items: center;
}
</style>
