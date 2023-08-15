<template>
  <section class="section my-5">
    <div class="container">
      <div class="row">
        <!-- Left -->
        <aside class="col-sm-12 col-md-3">
          <div class="sticky-wrapper">
            <div class="card shadow-sm">
              <div class="card-body">
                Something
              </div>
            </div>
          </div>
        </aside>

        <!-- Middle -->
        <div class="main col-sm-12 col-md-6">
          <article v-for="(article, i) in store.articles" :key="article.id" :id="createId(article.title)" :class="{ 'mb-2': i >= 0 }" :aria-label="article.title" :title="article.title" class="card shadow-sm">
            <div class="card-header">
              <div class="my-1 d-flex justify-content-between align-items-center">
                <div class="info">
                  <h5 class="mb-1">{{ article.title }}</h5>
                  <p v-if="article.subtitle" class="text-body-secondary fw-light">{{ article.subtitle }}</p>
                </div>

                <button type="button" class="btn btn-sm btn-rounded btn-light" @click="handleFollow(article)">
                  <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />Ajouter
                </button>
              </div>
            </div>
            
            <div class="card-body">
              <!-- <p class="card-text text-body-secondary">{{ article.text }}</p> -->
              <div class="card-text text-body-secondary" v-html="article.html"></div>
            </div>

            <div class="card-footer">
              <span class="badge bg-warning">{{ article.category }}</span>
            </div>
          </article>
        </div>
        
        <!-- Right -->
        <aside class="col-sm-12 col-md-3">
          <div class="sticky-wrapper">
            <div class="card shadow-sm">
              <div class="card-body">
                Something
              </div>
            </div>
  
            <div class="card shadow-sm mt-2">
              <div class="card-body">
                Something
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import { useLinkedin } from '@/store/linkedin'
import _ from 'lodash'

export default {
  name: 'ArticlesView',
  setup () {
    const store = useLinkedin()
    return {
      store
    }
  },
  mounted () {
    document.body.classList.add('bg-light')
    window.addEventListener('scroll', this.asideMargin)
  },
  unmounted () {
    document.body.classList.remove('bg-light')
    window.removeEventListener('scroll', this.asideMargin)
  },
  methods: {
    asideMargin () {
      const wrappers = Array.from(document.querySelectorAll('.sticky-wrapper'))
      if (document.documentElement.scrollTop > 10) {
        _.forEach(wrappers, (element) => {
          element.style.top = '30px'
        })
      } else {
        _.forEach(wrappers, (element) => {
          element.style.top = '0px'
        })
      }
    },
    handleFollow (article) {
      article
    },
    createId (title) {
      const newText = title.replace(' ', '-')
      return `id-${newText.toLowerCase()}`
    }
  }
}
</script>

<style scoped>
aside .sticky-wrapper {
  position: sticky;
  transition: all .5s ease-in-out;
  top: 0;
}
</style>
