<template>
  <div class="replies">
    <div v-for="reply in reply" :key="reply.id" class="card my-1 shadow-none">
      <div class="card-body">
        <div class="d-flex justify-content-around">
          <div class="me-3">
            <img src="http://via.placeholder.com/100x100" class="img-fluid rounded-circle" alt="Image 3">
          </div>

          <div clas="ms-1">
            <div class="d-flex justify-content-left">
              <span class="fw-bold me-2">Cee Dee</span>
              <span class="text-muted">3 weeks ago</span>
            </div>

            <p class="card-text">
              Gotta give Kendra points for not totally losing her professional "cool" when
              she realized she'd been called out on live TV.
            </p>

            <div class="btn-group shadow-none">
              <button type="button" class="btn btn-primary btn-sm shadow-none" @click="likeReply"><span
                  class="mdi mdi-thumb-up me-2"></span>12.3k</button>
              <button type="button" class="btn btn-primary btn-sm shadow-none" @click="likeReply"><span
                  class="mdi mdi-thumb-down me-2"></span>26</button>
              <button type="button" class="btn btn-info btn-sm shadow-none"
                @click="showReplyInput = !showReplyInput">Reply</button>
            </div>

            <input v-if="showReplyInput" :placeholder="`Reply to`" type="text" class="form-control mt-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyCard',
  props: {
    reply: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showReplies: false,
    showReplyInput: false
  }),
  methods: {
    async likeReply () {
      // pass
    }
  }
}
</script>
