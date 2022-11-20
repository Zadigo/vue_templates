<template>
  <div class="container-fluid my-4 position-relative">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="btn-group">
          <button type="button" class="btn btn-md btn-primary" @click="planificationPhase = true">
            Planification phase
          </button>
  
          <button type="button" class="btn btn-md btn-danger" @click="planificationPhase = false">
            Construction phase
          </button>
        </div>
      </div>

      <!-- ressources -->
      <div class="row">
        <div class="col-8">
          <div class="ressources">
            <div v-for="color in Object.keys(ressources)" :key="color" :class="{[`color-${color}`]: true}" class="d-flex justify-content-left">
              <div v-for="i in ressources[color]" :key="i" :class="ressourceColor(color)" class="ressource mx-1" draggable="true" @dragstart="moveRessource($event, color)"></div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="unused-ressources" @drop="dropRessource($event)" @dragenter.prevent @dragover.prevent>
            <div v-for="(color, i) in unusedRessources" :key="i" :class="ressourceColor(color.name)" class="ressource mx-1" draggable="true" @dragstart="moveRessource($event, color)"></div>
          </div>
        </div>
      </div>

      <!-- construction -->
      <div v-if="!planificationPhase" class="col-12">
        <h3>construct cards</h3>
        <div class="construction bg-info" @dragenter.prevent @dragover.prevent @drop="dropCard($event)">
          <transition-group name="opacity">
            <div v-for="i in construction" :key="i" class="card" draggable="true" @dragover="dragRessourceOver($event)" @dragstart="moveCard($event, i, 'construction')">
              {{ i }}
            </div>
          </transition-group>
        </div>
      </div>

      <!-- planification -->
      <div class="col-12">
        <h3>planify cards</h3>
        <div class="planification bg-primary" @dragenter.prevent @dragover.prevent @drop="dropCard($event)">
          <transition-group name="opacity">
            <div v-for="i in planification" :key="i" class="card" draggable="true" @dragstart="moveCard($event, i, 'planification')">
              {{ i }}
            </div>
          </transition-group>
        </div>
      </div>

      <!-- selection -->
      <div v-if="planificationPhase" class="col-12">
        <h3>select cards</h3>
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
  <!-- <dashboard-layout-vue>
  </dashboard-layout-vue> -->
</template>

<script>
import _ from 'lodash'
import game from '@/data/game.json'
// import DashboardLayoutVue from '@/layouts/DashboardLayout.vue'

export default {
  name: 'GameView',
  components: {
    // DashboardLayoutVue
  },
  setup () {
    return {
      game
    }
  },
  data () {
    return {
      construction: [],
      planification: [],
      selection: [1, 2, 3, 4, 5, 6, 7],
      history: [],
      // colors: ['yellow', 'blue'],
      ressources: {
        'yellow': 1,
        'blue': 5
      },
      unusedRessources: [
        {
          name: "yellow"
        }
      ],
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
    },
    'unusedRessources.length' (current) {
      // console.log('watch unused ressources', current)
      // When there are 5 unused ressources,
      // then we get a red
      if (current >= 5) {
        this.unusedRessources.splice(0, 5, { name: 'red' })
        // this.unusedRessources.push({ name: 'Red' })
      }
    }
  },
  methods: {
    ressourceColor (color) {
      let backgroundColor = 'bg-white'
      switch (color) {
        case 'blue':
          backgroundColor = 'bg-primary'
          break

        case 'red':
          backgroundColor = 'bg-danger'
          break

        case 'yellow':
          backgroundColor = 'bg-warning'
          break
      
        default:
          break
      }
      return { [`${backgroundColor}`]: true}
    },
    moveRessource (e, color) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('ressource', color)
    },
    dragRessourceOver (e) {
      // When a ressource is dragged over the unused
      // ressources container
      if (e.target?.classList.contains('unused-ressources')) {
        // console.log('drop over unused ressource', e)
      }
      
      // When a ressource is dragged over a card
      if (e.target?.classList.contains('card')) {
        // console.log('drag ressource over card', e)
      }
      // console.log('drag ressource over', e)
    },
    dropRessource (e) {
      const color = e.dataTransfer.getData('ressource')
      // When a ressource is dropped in the unused ressources
      // container
      console.log('drop ressource', color, e)
      if (e.target?.classList.contains('unused-ressources')) {
        this.unusedRessources.push({ name: color })
        let result = this.ressources[color] - 1
        if (result < 0) {
          result = 0
        }
        this.ressources[color] = result
      }
    },
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
      // When a card is dropped in any of the
      // 3 containers
      const data = e.dataTransfer.getData('card')
      const method = e.dataTransfer.getData('method')

      let index
      let result

      switch (method) {
        case 'construction':
          index = _.indexOf(this.construction, data * 1)
          result = this.construction.splice(index, 1)
          this.planification.push(...result)          
          break

        case 'selection':
          index = _.indexOf(this.selection, data * 1)
          result = this.selection.splice(index, 1)
          this.planification.push(...result)
          break

        case 'planification':
          index = _.indexOf(this.planification, data * 1)
          result = this.planification.splice(index, 1)
          this.construction.push(...result)
          break
      
        default:
          break
      }

      // if (method === 'construction') {
      //   const index = _.indexOf(this.construction, data * 1)
      //   const result = this.construction.splice(index, 1)
      //   this.planification.push(...result)
      // } else if (method === 'selection') {
      //   const index = _.indexOf(this.selection, data * 1)
      //   const result = this.selection.splice(index, 1)
      //   this.planification.push(...result)
      // } else if (method === 'planification') {
      //   const index = _.indexOf(this.planification, data * 1)
      //   const result = this.planification.splice(index, 1)
      //   this.construction.push(...result)
      // }
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
  z-index: 10;
}

.ressources,
.unused-ressources {
  margin: 3rem 0 3rem 0;
  padding: 1rem;
  background-color: rgba(38, 38, 38, .5);
  border-radius: .5em;
  min-height: 100px;
}

.ressources [class^="color-"] {
  padding: .5rem;
}

.ressources .ressource,
.unused-ressources .ressource {
  transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.ressources .ressource:hover,
.unused-ressources .ressource:hover {
  transform: scale(1.1, 1.1);
}
</style>
