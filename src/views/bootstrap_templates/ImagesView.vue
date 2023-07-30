<template>
  <div class="row d-flex justify-content-center gap-2">
    <div class="col-3">
      <base-image src="https://picsum.photos/400/400" rounded />
    </div>

    <div class="col-3">
      <base-image src="https://picsum.photos/400/400" thumbnail />
    </div>

    <div class="col-3">
      <base-image src="https://picsum.photos/400/400" rounded float-right is-figure fig-caption="Hello" />
    </div>
  </div>
</template>


<script>
import BaseImage from '@/layouts/bootstrap/BaseImage.vue'

export default {
  name: 'ImagesView',
  components: {
    BaseImage
  }
}
</script>
