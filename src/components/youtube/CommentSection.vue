<template>
  <div class="col-8">
    <div class="card">
      <div class="card-body">
        <p class="fw-bold fs-5">{{ currentVideo.comments.count }} Comments</p>
        <base-dropdown-button-vue :items="[{ name: 'Newest' }, { name: 'Oldest' }]" icon="sort" button-name="Sort"
          @dropdown-click="setSort" />
        <!-- <button class="btn btn-info"><span class="mdi mdi-sort me-2"></span>Sort</button> -->
        <!-- <button class="btn btn-info"><span class="mdi mdi-filter me-2"></span>Filter</button> -->
        <!-- <div class="btn-group">
              </div> -->

        <hr class="my-4">

        <!-- New comment -->
        <div class="card mb-3 shadow-none">
          <div class="card-body">
            <div class="d-flex justify-content-around">
              <div class="me-3">
                <img src="http://via.placeholder.com/100x100" class="img-fluid rounded-circle" alt="Image 2">
              </div>

              <div class="w-100">
                <textarea cols="30" rows="2" class="form-control" style="resize: none;"></textarea>

                <div class="btn-group shadow-none my-2">
                  <button class="btn btn-sm btn-light" @click="showReplies = !showReplies">Cancel</button>
                  <button class="btn btn-sm btn-light" @click="createComment"><span
                      class="mdi mdi-comment me-2"></span>Comment</button>
                </div>
              </div>
            </div>
          </div>

          <!-- NOTE: Should be moved to it's own single comment
              component which will allow to trigger replies individually -->
          <!-- <div v-if="isLoading" class="text-center my-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> -->

          <!-- Comments -->
          <transition-group id="comments" tag="div" name="opacity">
            <comment-card v-for="comment in comments" :key="comment.id" :comment="comment" />
          </transition-group>
        </div>
      </div>

      <div class="card-footer text-center">
        <button class="btn btn-primary btn-lg" @click="getComments">
          <span class="mdi mdi-refresh me-2"></span>
          Load more
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { inject } from 'vue'
import dayjs from '../../plugins/dayjs'
import BaseDropdownButtonVue from '@/layouts/BaseDropdownButton.vue'
import CommentCard from './CommentCard.vue'

export default {
  name: 'CommentSection',
  setup () {
    var isLoading = inject('isLoading')
    return {
      isLoading
    }
  },
  emits: ['like-video'],
  props: {
    currentVideo: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseDropdownButtonVue,
    CommentCard
},
  data: () => ({
    comments: [],
  }),
  sortedComments () {
    // if (this.sortMethod === 'Newest') {
    //   return this.comments.sort((a, b) => {
    //     return dayjs(a.created_on) - dayjs(b.created_on)
    //   })
    // }

    // if (this.sortMethod === 'Oldest') {
    //   return this.comments.sort((a, b) => {
    //     return dayjs(b.created_on) - dayjs(a.created_on)
    //   })
    // }
    return this.comments
  },
  mounted () {
    this.getComments()
  },
  methods: {
    async likeVideo () {
      this.$emit('like-video', true)
    },
    async getComments () {
      this.isLoading = true
      setTimeout(() => {
        var d = dayjs('2022-1-1')
        for (let i = 0; i < 3; i++) {
          var createdOn = d.add(dayjs.duration({ days: Math.random() * (1, 30) + 1 }))
          this.comments.push({
            id: i,
            replies: [{ id: 1 }, { id: 2 }],
            user: {
              username: 'Lucie Paul'
            },
            created_on: createdOn.format('YYYY-MM-DD')
          })
        }
        this.isLoading = false
        this.isLoadingRecommendations = false
      }, 1000)
    },
    setSort (params) {
      this.sortMethod = params[1]
    }
  }
}
</script>
