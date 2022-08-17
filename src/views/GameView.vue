<template>
  <dashboard-layout-vue>
    <div class="container-fluid position-relative">
      <div class="row">
        <div class="col-12 mb-3">
          <button type="button" class="btn btn-md btn-primary" @click="planificationPhase = true">
            Construction phase
          </button>

          <button type="button" class="btn btn-md btn-danger mx-1" @click="planificationPhase = false">
            Reset
          </button>
        </div>

        <div class="col-12">
          <div class="construction bg-info" @dragenter.prevent @dragover.prevent @drop="dropCard($event)">
            <transition-group name="opacity">
              <div v-for="i in construction" :key="i" class="card" draggable="true" @dragstart="moveCard($event, i, 'construction')">
                {{ i }}
              </div>
            </transition-group>
          </div>
        </div>

        <div class="col-12">
          <div class="planification bg-primary" @dragenter.prevent @dragover.prevent="moveOver($event)" @drop="dropCard($event)">
            <transition-group name="opacity">
              <div v-for="i in planification" :key="i" class="card" draggable="true" @dragstart="moveCard($event, i, 'planification')">
                {{ i }}
              </div>
            </transition-group>
          </div>
        </div>

        <div class="col-12">
          <div class="selection bg-warning">
            <transition-group name="opacity">
              <div v-for="i in selection" :key="i" class="card" draggable="true" @dragstart="moveCard($event, i, 'selection')">
                {{ i }}
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout-vue>
</template>

<script>
import DashboardLayoutVue from '@/layouts/DashboardLayout.vue'
import _ from 'lodash'

export default {
  name: 'GameView',
  components: {
    DashboardLayoutVue
  },
  data () {
    return {
      construction: [],
      planification: [],
      selection: [1, 2, 3, 4, 5, 6, 7],
      history: [],
      round: 1,
      planificationPhase: true
    }
  },
  watch: {
    planification (current) {
      console.info(current)
      if (current.length >= 3) {
        this.planificationPhase = false
      }
    }
  },
  methods: {
    moveCard (e, value, method) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('card', value)
      e.dataTransfer.setData('method', method)
    },
    moveOver (e) {
      e
      // console.info('moveOver', Array.from(e.target.classList))
    },
    dropCard (e) {
      const data = e.dataTransfer.getData('card')
      const method = e.dataTransfer.getData('method')

      if (method === 'construction') {
        const index = _.indexOf(this.construction, data * 1)
        const result = this.construction.splice(index, 1)
        this.planification.push(...result)
      } else if (method === 'selection') {
        const index = _.indexOf(this.selection, data * 1)
        const result = this.selection.splice(index, 1)
        this.planification.push(...result)
      } else if (method === 'planification') {
        const index = _.indexOf(this.planification, data * 1)
        const result = this.planification.splice(index, 1)
        this.construction.push(...result)
      }
      this.recordHistory(data, method, '')
    },
    recordHistory (card, from, to) {
      this.history.push({ card: card, from: from, to: to})
    }
  }
}
</script>

<style scoped>
.construction,
.planification,
.selection {
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: .3em;
  margin-bottom: .5rem;
  padding: .7rem;
  overflow: hidden;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  transition: all .4s ease-in-out;
}

.selection {
  overflow-x: scroll;
}

.construction:hover,
.planification:hover {
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

.construction .card:not(:last-child),
.planification .card:not(:last-child),
.selection .card:not(:last-child) {
  margin-right: .5rem;
}

.card {
  transition: all .4s ease-in-out;
  cursor: pointer;
  min-width: 180px;
}
</style>
