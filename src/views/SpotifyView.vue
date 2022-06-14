<template>
  <dashboard-layout-vue>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-md-3">
          <div :class="{ play: isPlaying }" class="artwork-wrapper">
            <div class="artwork shadow" :style="`background-image: url(${currentSong.artwork})`">
            </div>
          </div>
        </div>

        <div class="col-6 offset-md-3">
          <base-music-player-vue :src="currentSong.src" @playing="isPlaying = true" @paused="isPlaying = false" @next-song="nextSong" />
        </div>

        <div class="col-6 offset-md-3 mt-2">
          <div class="card">
            <div class="card-body">
              <div class="list-group">
                <a v-for="(song, i) in playlist" :key="song.id" :class="{ active: song.id === currentSong.id }" href
                  class="list-group-item d-flex justify-content-between" @click.prevent="cursor = i">
                  <span v-if="song.id === currentSong.id" class="mdi mdi-play"></span>
                  <span v-else class="mdi mdi-pause"></span>
                  <span>{{ song.artist.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout-vue>
</template>

<script>
import DashboardLayoutVue from '@/layouts/DashboardLayout.vue'
import BaseMusicPlayerVue from '@/layouts/BaseMusicPlayer.vue'
export default {
  name: 'SpotifyView',
  components: {
    BaseMusicPlayerVue,
    DashboardLayoutVue
  },
  data: () => ({
    cursor: 0,
    isPlaying: false,
    playlist: [
      {
        id: 1,
        artist: {
          name: 'Jahlys'
        },
        artwork: 'jahlys.jpg',
        src: 'music1.wav'
      },
      {
        id: 2,
        artist: {
          name: 'Lanae'
        },
        artwork: 'lanae.jpg',
        src: 'music2.mp3'
      },
      {
        id: 3,
        artist: {
          name: 'Moyaan'
        },
        artwork: 'moyaan.jpg',
        src: 'music3.mp3'
      }
    ]
  }),
  computed: {
    currentSong() {
      return this.playlist[this.cursor]
    }
  },
  methods: {
    nextSong() {
      var result = this.cursor + 1 
      if (result > this.playlist.length) {
        result = this.playlist.length
      }
      this.cursor = result
    }
  }
}
</script>

<style scoped>



.artwork-wrapper {
  position: relative;
  transition: all .5s ease-in-out;
  overflow: hidden;
  height: 350px;
  min-width: 350px;
}
.artwork {
  position: absolute;
  top: 40%;
  left: 20%;
  overflow: hidden;
  height:  300px;
  width: 300px;
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px);
}

.artwork-wrapper.play .artwork {
  transition: all .3s ease-in-out;
  top: 20%;
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
  animation-iteration-count: infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  99% {
    transform: rotate(360deg);
  }
}
</style>
