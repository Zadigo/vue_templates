<template>
  <div class="row">
    <div class="col-12">
      <base-carousel id="carousel-1" :items="items" />
    </div>
  </div>
</template>

<script>
import BaseCarousel from '@/layouts/bootstrap/BaseCarousel.vue'

export default {
  name: 'CarouselView',
  components: {
    BaseCarousel
  },
  data () {
    return {
      items: [
        {
          id: 2,
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
          label: 'Second slide label',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          alt: 'Something that can be used'
        },
        {
          id: 1,
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
          label: 'First slide label',
          description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          alt: 'Something that can be used'
        },
        {
          id: 3,
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
          label: 'Third slide label',
          description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
          alt: 'Something that can be used'
        }
      ]
    }
  }
}
</script>
