<template>
  <div class="row">
    <div class="col-10 offset-1">
      <base-template-card>
        <div class="card-body">
          <base-video-player-playlist v-slot="{videoUrl}" :playlist="[require('@/assets/hollyG1.mp4'), require('@/assets/video1.mp4')]">
            <base-video-player :video-url="videoUrl" />
            <!-- <base-video-player :video-url="require('@/assets/hollyG1.mp4')" /> -->
          </base-video-player-playlist>
        </div>
      </base-template-card>
    </div>
  </div>
</template>

<script>
import BaseVideoPlayerPlaylist from '@/layouts/bootstrap/players/BaseVideoPlayerPlaylist.vue'
import BaseVideoPlayer from '@/layouts/bootstrap/players/BaseVideoPlayer.vue'
import BaseTemplateCard from '@/layouts/bootstrap/cards/BaseTemplateCard.vue'

export default {
  components: {
    BaseTemplateCard,
    BaseVideoPlayerPlaylist,
    BaseVideoPlayer
  },
  data () {
    return {
      
    }
  }
}
</script>
