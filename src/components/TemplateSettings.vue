<template>
  <div class="wrapper">
    <div v-if="heroSettings" id="fo-hero" :class="{ show: heroSettings }" class="dropdown-menu p-3">
      <!-- <ul>
        <li class="dropdown-item"><a>Some item</a></li>
      </ul> -->
      <base-input id="image" v-model.number="image" class="mb-2" />
      <div class="d-flex justify-content-around gap-2">
        <button type="button" class="btn btn-primary">Center</button>
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Form</button>
        <button type="button" class="btn btn-primary">Multiple</button>
      </div>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-primary">Settings</button>
      <button type="button" class="btn btn-primary">Settings</button>
      <button type="button" class="btn btn-primary" @click="heroSettings = !heroSettings">Hero</button>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/layouts/bootstrap/BaseInput.vue';
export default {
  name: 'TemplateSettings',
  components: {
    BaseInput
  },
  data () {
    return {
      image: 12,
      heroSettings: false
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  right: 0;
  bottom: 5%;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
