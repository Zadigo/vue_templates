<template>
  <dashboard-layout-vue>
    <section id="youtube">
      <div class="container-fluid p-0">
        <base-video-player-vue :videoUrl="require('../assets/video1.mp4')"></base-video-player-vue>
        <!-- Information -->
        <div class="row">
          <div class="col-12">
            <div class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">
                  {{ currentVideo.title }}
                </h5>

                <div class="d-flex justify-content-between">
                  <span class="text-muted">{{ currentVideo.views }} views - {{ currentVideo.created_on }}</span>

                  <div class="d-flex jusify-content-around">
                    <div class="btn-group">
                      <button class="btn btn-lg btn-primary" @click="likeVideo">
                        <span class="mdi mdi-thumb-up me-2"></span>{{ currentVideo.likes }}
                      </button>

                      <button class="btn btn-lg btn-primary" @click="likeVideo">
                        <span class="mdi mdi-thumb-down me-2"></span>{{ currentVideo.dislikes }}
                      </button>
                    </div>

                    <base-dropdown-button-vue :buttonName="'More'" :color="'secondary'"
                      :items="[{ name: 'Store', icon: 'store' }, { name: 'Download', icon: 'download' }, { name: 'Save', icon: 'content-save' }, { name: 'Gift', icon: 'gift' }, { name: 'Donate', icon: 'cash' }, { name: 'Share', icon: 'share' }, { name: 'Recommendation', icon: 'star-remove-outline' }, { name: 'Report', icon: 'alert' }]"
                      class="mx-2" @dropdown-click="dropdownClick" />

                    <button class="btn btn-primary btn-lg"
                      @click="currentVideo.channel.subscribed = !currentVideo.channel.subscribed">
                      <span v-if="currentVideo.channel.subscribed">Unsubscribe</span>
                      <span v-else>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card my-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-2">
                    <img src="http://via.placeholder.com/100x100" class="img-fluid rounded-circle" alt="Image 6">
                  </div>

                  <div class="col-10">
                    <router-link :to="{ name: 'templates_view' }" class="fw-bold mb-0">
                      {{ currentVideo.channel.name }}
                    </router-link>

                    <p class="text-muted fw-light m-0">{{ currentVideo.channel.subscribers }} subscribers</p>

                    <base-scrollbar-vue :items="currentVideo.categories" class="my-3" />

                    <p id="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi porro iure repellat optio, ipsum ducimus veniam natus ipsam dolor,
                      suscipit distinctio vero? Labore repellendus ipsum et cumque fuga?
                      Ullam, nam!

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id pariatur
                      fuga molestiae aperiam inventore repellendus, dolorum ducimus saepe fugiat minima
                      quisquam. Deleniti, ratione? Quis et harum ullam ab nam.
                    </p>

                    <button class="btn btn-light shadow-none">Show more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments -->
        <div class="row">
          <comment-section :currentVideo="currentVideo" />

          <!-- Recommendations -->
          <div class="col-4">
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-sm btn-secondary" @click="updateRecommendations">
                    Load more
                  </button>

                  <router-link :to="{ name: 'youtube_view' }" class="btn btn-sm btn-secondary">
                    See all
                  </router-link>
                </div>
              </div>
            </div>

            <div v-if="isLoadingRecommendations" class="text-center my-4">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>

            <transition-group v-else name="opacity" id="recommendations" tag="div" mode="out-in">
              <div v-for="recommendation in recommendations" :key="recommendation.id" class="card mb-2">
                <router-link :to="{ name: 'youtube_view', query: { video: recommendation.id } }">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="http://via.placeholder.com/400x400" class="img-fluid rounded-start" alt="Image 7">
                    </div>

                    <div class="col-md-8">
                      <div class="card-body p-2">
                        <h5 class="card-title fs-6">Golden State warriors vs Celtics Game 6 on the way</h5>
                        <p class="text-muted m-0 fs-7">Vikapower</p>
                        <p class="text-muted m-0 fs-7">911K views - 15 hours ago</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </transition-group>
          </div>
        </div>
      </div>

      <!-- Modals -->
      <base-modal-vue :show="showDonationModal" id="donation" @close="showDonationModal = false">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima
              ipsam placeat est ex? Doloremque, nemo architecto provident necessitatibus
              sequi modi dolorem! Ab rem inventore esse libero laudantium animi dicta!
            </div>

            <div class="col-12">
              <input type="number" min="0" max="100" step="5" class="form-control">

              <div class="form-check my-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                  Super donate
                </label>
              </div>

              <div class="alert alert-warning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima
                ipsam placeat est ex? Doloremque, nemo architecto provident necessitatibus
                sequi modi dolorem! Ab rem inventore esse libero laudantium animi dicta!
              </div>

              <div class="alert alert-danger mt-2">
                You have no payment system on your account. Add a card etc
              </div>

              <div class="form-check my-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                  I consent to x an y and agree to donate $15 to this channel
                </label>
              </div>
            </div>
          </div>
        </div>
      </base-modal-vue>

      <base-modal-vue :show="showStore" :scrollable="true" id="store" size="xl" @close="showStore = false">
        <div class="row">
          <div class="col-12">
            <div class="row mb-3">
              <div class="col-12">
                <div class="alert alert-info my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Amet sapiente fugiat incidunt quae quis sint necessitatibus sunt inventore
                  nisi blanditiis quod optio eos, obcaecati totam ullam. Nemo, officiis obcaecati.
                  Magnam!
                </div>

                <input type="search" class="form-control p-2" placeholder="Search products">
              </div>
            </div>

            <div class="row">
              <div v-for="i in 10" :key="i" class="col-2 mb-2">
                <div class="card shadow-none">
                  <img src="https://via.placeholder.com/500" class="card-img-top" alt="Image 8">
                  <div class="card-body p-1 bg-transparent">
                    <h6 class="card-title">Some product</h6>
                    <button type="button" class="btn btn-primary btn-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </base-modal-vue>

      <base-modal-vue :show="showGifts" :scrollable="true" id="gift" size="sm" @close="showGifts = false">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-danger">
              You have no gifts yet
            </div>
            <div class="list-group">
              <a v-for="i in 10" :key="i" href class="list-group-item d-flex justify-content-between" @click.prevent>
                <span>Gift {{ i }}</span>
                <div class="btn-group shadow-none">
                  <button type="button" class="btn btn-sm btn-primary">Donate</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </base-modal-vue>

      <base-modal-vue :show="showReport" :scrollable="true" id="report" size="sm" @close="showReport = false">
        <div class="row">
          <div class="col-12">
            <base-accordion-vue :items="reports" />
          </div>

          <div class="col-12">
            <p class="fw-light m-0">
              Flagged videos and users are reviewed by YouTube staff 24 hours a day, 7 days a week to determine whether
              they violate Community Guidelines. Accounts are penalized for Community Guidelines violations, and serious
              or repeated violations can lead to account termination. Report channel
            </p>
          </div>
        </div>
      </base-modal-vue>

      <base-offcanvas-vue :show="showPlaylists" id="playlists" title="Playlists" position="end"
        @close="showPlaylists = false">
        <div class="list-group">
          <a v-for="i in 5" :key="i" href class="list-group-item d-flex justify-content-between" @click.prevent>
            <div class="form-check my-2">
              <input class="form-check-input" type="checkbox" id="flexCheckChecked">
              <label class="form-check-label" for="flexCheckChecked">
                {{ i }}
              </label>
            </div>
          </a>
        </div>
      </base-offcanvas-vue>

      <base-offcanvas-vue :show="showRecommendationReport" id="recommendation" title="Recommendation" position="end"
        @close="showRecommendationReport = false">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-warning">
              You can use this tool to signal that video was not properly categorized
              and therefore can be source pollution for search results
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckChecked">
              <label class="form-check-label" for="flexCheckChecked">
                Indicate that the video was not properly categorized
              </label>
            </div>

            <select class="form-select" aria-label="Default select example">
              <option selected>Select correct label</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" id="flexCheckChecked">
              <label class="form-check-label" for="flexCheckChecked">
                Block channel from future recommendations
              </label>
            </div>
          </div>
        </div>
      </base-offcanvas-vue>
    </section>
  </dashboard-layout-vue>
</template>

<script>
// import _ from 'lodash'
import reports from '../data/reports'
import video from '@/data/video'
import { ref, provide } from 'vue'
import BaseVideoPlayerVue from '../layouts/BaseVideoPlayer.vue'
import BaseScrollbarVue from '../layouts/BaseScrollbar.vue'
import BaseDropdownButtonVue from '@/layouts/BaseDropdownButton.vue'
import BaseModalVue from '@/layouts/BaseModal.vue'
import BaseOffcanvasVue from '@/layouts/BaseOffcanvas.vue'
import BaseAccordionVue from '@/layouts/BaseAccordion.vue'
import DashboardLayoutVue from '../layouts/DashboardLayout.vue'
import CommentSection from '@/components/youtube/CommentSection.vue'
// import BaseDropGroupVue from '@/layouts/BaseDropGroup.vue'

export default {
  name: 'YoutubeTemplate',
  setup() {
    const isLoading = ref(true)
    provide('isLoading', isLoading)
    return {
      reports
    }
  },
  components: {
    BaseVideoPlayerVue,
    BaseDropdownButtonVue,
    BaseModalVue,
    BaseAccordionVue,
    // BaseDropGroupVue,
    BaseOffcanvasVue,
    BaseScrollbarVue,
    DashboardLayoutVue,
    CommentSection
},
  data: () => ({
    // isLoading: true,
    isLoadingRecommendations: true,

    showDonationModal: false,
    showPlaylists: false,
    showStore: false,
    showGifts: false,
    showReport: false,
    showRecommendationReport: false,

    sortMethod: 'Newest',

    currentVideo: video,

    lowerLimit: 0,
    upperLimit: 20,
    totalLimit: 20,
    recommendationLimit: 5,
    cachedRecommendations: []
  }),
  beforeMount() {
    this.getVideo()
    // TODO: totalLimit does not get set - we need to determine
    // how much groups of videos we need e.g. 100/5 = 20 per group
    this.totalLimit = 20
    // this.totalLimit = this.cachedRecommendations.length / this.recommendationLimit
    // this.upperLimit = this.totalLimit
  },
  mounted() {
    this.isLoadingRecommendations = false
  },
  watch: {
    '$route.query.video'(current, previous) {
      if (current !== previous) {
        this.getVideo()
      }
    }
  },
  computed: {
    recommendations() {
      // We load a set of recommendations e.g. a 100 
      // that we will then slice to the user. This
      // prevents from making constant API calls to
      // the backend
      return this.cachedRecommendations.slice(this.lowerLimit, this.upperLimit)
    }
  },
  methods: {
    getVideo() {
      setTimeout(() => {
        this.currentVideo = video
        this.cachedRecommendations = video.recommendations
        // for (let i = 0; i < 100; i++) {
        //   this.cachedRecommendations.push({ id: i })
        // }
      }, 1000)
    },
    updateRecommendations() {
      // 0-20 -> 21-... -> 41-...
      var lowerLimit = this.lowerLimit + this.totalLimit + 1
      // ...-20 -> ...-40 -> ...-60
      var upperLimit = this.upperLimit + this.totalLimit

      if (upperLimit > this.cachedRecommendations.length) {
        // Make an API call to refresh the list excluding
        // what was already shown to the user
        this.isLoadingRecommendations = true
        this.lowerLimit = 0
        this.upperLimit = 20
        setTimeout(() => {
          this.isLoadingRecommendations = false
        }, 1000);
      } else {
        this.lowerLimit = lowerLimit
        this.upperLimit = upperLimit
      }
    },
    dropdownClick(params) {
      var index = params[0]
      switch (index) {
        case 0:
          this.showStore = true
          break

        case 2:
          this.showPlaylists = true
          break

        case 3:
          this.showGifts = true
          break

        case 4:
          this.showDonationModal = true
          break

        case 6:
          this.showRecommendationReport = true
          break

        case 7:
          this.showReport = true
          break
      
        default:
          console.log(index)
          break
      }
    }
  }
}
</script>

<style scoped>
.fs-7 {
  font-size: .85rem;
}
</style>
