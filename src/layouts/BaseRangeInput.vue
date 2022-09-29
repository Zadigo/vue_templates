<template>
  <div ref="link" :class="[darkMode ? 'dark' : null]" class="slider-wrapper" @mousedown="handleRightSlider($event)">
    <!-- @mousedown="handleRightSlider($event)" -->
    <div class="slider">
      <div class="slider-track">
        <div class="track-low track-low-danger"></div>
        <div class="track-selection"></div>
        <div class="track-high"></div>
      </div>
  
      <div class="tooltip slider-tooltip" role="presentation">
        <div class="inner">{{ percentages[1] }}</div>
      </div>
  
      <div v-if="isRange" class="handle-left" :aria-valuetext="percentages[0]" :aria-valuenow="percentages[0]" :aria-valuemin="0" :aria-valuemax="100" />
      <div class="handle-right" :aria-valuetext="percentages[1]" :aria-valuenow="percentages[1]" :aria-valuemin="0" :aria-valuemax="100" />
    </div>
    <!-- <input v-model="percentage" :aria-valuenow="percentage" type="range" min="0" max="100" class="form-range d-none"> -->
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BaseRangeInput',
  props: {
    isRange: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:slider' () {
      return true
    }
  },
  setup () {
    const handleRight = null
    const handleLeft = null
    const darkMode = inject('darkMode')
    return {
      handleRight,
      handleLeft,
      darkMode
    }
  },
  data () {
    return {
      value: 0,
      enabled: true,
      // percentage: 30,
      percentages: [0, 30],
      handleOffsets: {
        left: 0,
        right: 0
      }
    }
  },
  mounted () {
    const slider = this.$refs.link
    this.handleRight = slider.querySelector('.handle-right')
    // if (this.isRange) {
    //   this.handleLeft = slider.querySelector('.handle-left')
    // }
    this.handleOffsets.left = this.handleRight.getBoundingClientRect().left
    this.handleOffsets.right = this.handleRight.getBoundingClientRect().right

    this.setInitialValues()
  },
  methods: {
    setInitialValues () {
      if (this.percentages[1] > 0) {
        this.handleRight.style.left = `${this.percentages[1]}%`
        this.handleTrack()
      }
    },
    // handleLeftSlider (e) {
    //   this.percentages[0] = this.getPercentage(e)
    //   this.handleLeft.style.left = `${this.percentages[0]}%`
    //   this.handleTrack()
    //   // this.$emit('update:slider', this.percentages)
    // },
    handleRightSlider (e) {
      this.percentages[1] = this.getPercentage(e)
      this.handleRight.style.left = `${this.percentages[1]}%`
      this.handleTrack()
      this.$emit('update:slider', this.percentages[1])
    },
    handleTrack () {
      const trackLow = this.$refs.link.querySelector('.track-low')
      trackLow.style.right = '0'
      trackLow.style.left = '0'
      // trackLow.style.width = Math.min(this.percentage, 0) + '%'
      trackLow.style.width = this.percentages[1] + '%'

      if (this.isRange) {
        const trackHigh = this.$refs.link.querySelector('.track-high')
        trackHigh
      }
    },
    handleTooltip () {

    },
    getPercentage (e) {
      const mousePosition = e.pageX
      const handleOffset = this.handleOffsets.left
      const result = mousePosition - handleOffset
      const trackWidth = this.$refs.link.querySelector('.slider').offsetWidth
      let value = result / trackWidth * 100
      value = Math.round(value / 1) * 1
      return Math.max(0, Math.min(100, value))
    }
  }
}
</script>

<style scoped>
.slider {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100% !important;
  height: 20px;
}

.slider-track {
  position: absolute;
  cursor: pointer;
  background-image: linear-gradient(to bottom, #f5f5f5 0, #f9f9f9 100%);
  background-repeat: repeat-x;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  border-radius: 4px;
  height: 10px;
  width: 100%;
  margin-top: -5px;
  top: 50%;
  left: 0;
}

.track-low,
.track-high,
.track-selection {
  height: 100%;
  top: 0;
  bottom: 0;
  position: absolute;
  background: transparent;
  box-sizing: border-box;
  border-radius: 4px;
}

.track-low-primary {
  background-color: #0d6efd;
}

.track-low-secondary {
  background-color: #6c757d;
}

.track-low-success {
  background-color: #198754;
}
.track-low-danger {
  background-color: #dc3545;
}

.track-low-warning {
  background-color: #ffc107;
}

.track-low-info {
  background-color: #0dcaf0;
}

.track-low-light {
  background-color: #f8f9fa;
}

.track-low-dark {
  background-color: #212529;
}

[class^="handle-"] {
  position: absolute;
  background-color: #fff !important;
  /* background-color: #dc3545 !important; */
  background-image: none !important;
  background-repeat: repeat-x;
  /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  top: 0;
  width: 20px;
  height: 20px;
  filter: none;
  border: 0 solid transparent;
  border-radius: 50%;
  margin-left: -10px;
}

.slider-tooltip {
  margin-top: -25px !important;
  padding: 5px 0;
}

.inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #bdbdbd !important;
  text-align: center;
  background-color: transparent !important;
  border-radius: 4px;
}

/* .slider-wrapper.dark [class^="handle-"] {
  background-color: rgba(38, 38, 38, 1) !important;
} */
</style>
