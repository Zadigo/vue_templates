<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- <div ref="link" id="graph">
              <div class="wrapper"></div>
            </div> -->
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              class="quiz-graph">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e5e5" stroke-width="1"></path>
                </pattern>
              </defs>

              <rect x="50" width="calc(100% - 50px)" height="300px" fill="url(#grid)" stroke="gray"></rect>

              <!-- <g class="label-title">
                <text x="-160" y="5" transform="rotate(-90)">Participants</text>
              </g>

              <g class="label-title">
                <text x="50%" y="350">Questions</text>
              </g> -->

              <!-- <g class="x-labels">
                <text x="150" y="320">Q1</text>
                <text x="250" y="320">Q2</text>
                <text x="350" y="320">Q3</text>
                <text x="450" y="320">Q4</text>
                <text x="550" y="320">Q5</text>
                <text x="650" y="320">Q6</text>
                <text x="750" y="320">Complited</text>
              </g> -->

              <g class="y-labels">
                <text x="42" y="5">300</text>
                <text x="42" y="55">250</text>
                <text x="42" y="105">200</text>
                <text x="42" y="155">150</text>
                <text x="42" y="205">100</text>
                <text x="42" y="255">50</text>
                <text x="42" y="305">0</text>
              </g>

              <polyline :points="points" fill="none" stroke="#34becd" stroke-width="2"></polyline>

              <g>
                <circle class="quiz-graph-start-dot" cx="50" cy="0" data-value="7.2" r="6"></circle>
                <circle class="quiz-graph-dot" cx="150" cy="100" data-value="8.1" r="6" q-title="Q1" answer-count="200" percent-value="66%"></circle>
                <circle class="quiz-graph-dot" cx="250" cy="80" data-value="7.7" r="6" q-title="Q2" answer-count="220" percent-value="73%"></circle>
                <circle class="quiz-graph-dot" cx="350" cy="160" data-value="6.8" r="6" q-title="Q3" answer-count="140" percent-value="46%"></circle>
                <circle class="quiz-graph-dot" cx="450" cy="100" data-value="6.7" r="6" q-title="Q4" answer-count="200" percent-value="66%"></circle>
                <circle class="quiz-graph-dot" cx="550" cy="100" data-value="6.7" r="6" q-title="Q5" answer-count="200" percent-value="66%"></circle>
                <circle class="quiz-graph-dot" cx="650" cy="150" data-value="6.7" r="6" q-title="Q6" answer-count="150" percent-value="50%"></circle>
                <circle class="quiz-graph-dot" cx="750" cy="200" data-value="6.7" r="6" q-title="Complited Quiz" answer-count="100" percent-value="33%"></circle>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GraphView',
  data: () => ({
    // items: [60, 30, 40, 45, 15, 45, 67, 65, 94, 45],
    // frequency: 20
    items: [
      [50, 0],
      [150, 100],
      [250, 80],
      [350, 160],
      [450, 100],
      [550, 100],
      [650, 150],
      [750, 200]
    ]
  }),
  computed: {
    points () {
      let result = ''
      this.items.forEach((item) => {
        result += ` ${item[0]},${item[1]}`
      })
      return result.trimStart()
    }
  },
  mounted () {
    // this.visualizer()
  },
  methods: {
    visualizer () {
      const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

      const numberOfPoints = this.items.length
      const maxValue = Math.max(...this.items)
      const width = numberOfPoints * this.frequency
      const height = maxValue + 30

      element.setAttributeNS(null, 'width', width)
      element.setAttributeNS(null, 'height', height)

      let pathString = 'M' + width + ' ' + height + ' L' + 0 + ' ' + width

      for (let i = 0; i < this.items; i++) {
        const y = height - this.items[i]
        const x = i * this.frequency
        const string = ' L' + x + ' ' + y
        pathString += string
      }

      const ends = height - this.items[numberOfPoints - 1]

      pathString += ' L' + width + ' ' + ends
      pathString += ' Z'

      path.setAttributeNS(null, 'd', pathString)
      element.appendChild(path)

      this.$refs.link.appendChild(element)
    }
  }
}
</script>

<style scoped>
/* svg {
  border: 1px solid rgba(48, 46, 46, 1);
}

path {
  fill: rgba(47, 165, 203, 0.1);
  stroke-width: 2px;
  stroke: rgba(45, 164, 203, 1);
}

line {
  stroke: rgba(188, 197, 219, 1);
} */

.quiz-chartTip {
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, .1);
  position: absolute;
  z-index: 50;
  max-width: 250px;
}

.quiz-graph {
  padding: 2rem;
  height: 370px;
  width: 100%;
}

.quiz-graph .x-labels {
  text-anchor: middle;
}

.quiz-graph .y-labels {
  text-anchor: end;
}

.quiz-graph .quiz-graph-grid {
  stroke: #ccc;
  stroke-dasharray: 0;
  stroke-width: 1;
}

.label-title {
  text-anchor: middle;
  text-transform: uppercase;
  font-size: 12px;
  fill: gray;
}

.quiz-graph-dot {
  transition: all .3s ease;
  cursor: pointer
}

.quiz-graph-dot:hover {
  fill: rgba(0, 112, 210, 0.5);
}

.quiz-graph-dot,
.quiz-graph-start-dot {
  fill: rgba(0, 112, 210, 1);
  stroke-width: 2;
  stroke: white;
}
</style>
