<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card>
        <div class="card-body">
          <base-timeline :items="timeline" />
        </div>
      </base-template-card>
      
      <base-template-card class="my-3">
        <div class="card-body">
          <base-horizontal-timeline :items="timeline" />
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BaseHorizontalTimeline from '@/layouts/bootstrap/BaseHorizontalTimeline.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'
import BaseTimeline from '@/layouts/bootstrap/BaseTimeline.vue'

export default {
  components: {
    BaseHorizontalTimeline,
    BaseTemplateCard,
    BaseTimeline
  },
  setup () {
    return {
    }
  },
  data () {
    return {
      timeline: [
        {
          title: 'Kendall Jenner',
          date: 'Jan 14',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt vel accusantium quidem laboriosam fugit similique sit molestiae! Vel blanditiis vero, non dolor labore reprehenderit. Assumenda repellat asperiores necessitatibus amet vitae.'
        },
        {
          title: 'Kylie Jenner',
          date: 'Jan 14',
          image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt vel accusantium quidem laboriosam fugit similique sit molestiae! Vel blanditiis vero, non dolor labore reprehenderit. Assumenda repellat asperiores necessitatibus amet vitae.'
        }
      ]
    }
  }
}
</script>
