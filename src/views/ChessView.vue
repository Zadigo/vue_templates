<template>
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="chess-board">
                <!-- <div v-for="(cell, i) in cells" :key="i" :class="cellColor(i)" class="cell border">
                  {{ cell.column }}
                </div> -->
                <cell-item v-for="(cell, i) in cells" :key="i" :index="i" :cell="cell" @update:move="handleCellSelection" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import CellItem from '@/components/chess/CellItem.vue'
import { provide, ref } from 'vue'
export default {
  components: {
    CellItem
  },
  setup () {
    const whitesBelowOrientation = ref(true)
    const cells = ref([])
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const colouredCells = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 
      21, 23, 24, 26, 28, 30, 33, 35, 
      37, 39, 40, 42, 44, 46, 49, 51,
      53, 55, 56, 58, 60, 62
    ]
    
    // Starting cells for the
    // player at the bottom
    const startingBottomCells = [
      [49, 50, 51, 52, 53, 54, 55, 56],
      [57, 58, 59, 60, 61, 62, 63, 64]
    ]

    function pieceColor (index) {
      if (startingBottomCells[0].includes(index) || startingBottomCells[1].includes(index)) {
        return 'W'
      }
      return null
    }
    
    for (let i = 1; i < 65; i++) {
      cells.value.push({
        row: i,
        column: columns[(i - 1) % 8],
        color: pieceColor(i),
        isOccupied: false,
        canBePlayed: false,
        currentPiece: 'dame-item'
      })
    }
    provide('colouredCells', colouredCells)

    provide('startingBottomCells', startingBottomCells)
    
    return {
      cells,
      colouredCells,
      whitesBelowOrientation
    }
  },
  data () {
    return {
      isStarted: false,
      whitePlays: true,
      moveNumber: 1,
      selectedCell: null,
      occupiedCells: [],
      moves: []
    }
  },
  beforeMount () {
    // Before the game starts, have all the starting
    // cells be indicated as occupied
    _.forEach(this.startingBottomCells, (values) => {
      this.occupiedCells.push(...values)
    })
  },
  methods: {
    cellColor (index) {
      if (index % 2) {
        return 'bg-light'
      } else {
        return null
      }
    },
    createMove () {
      this.moves.push({
        id: null,
        piece: null,
        color: null,
        fromCellAddress: null,
        toCellAddress: null,
        captured: null
      })
    },
    handleCellSelection (address) {
      this.selectedCell = address
    },
    calculatePossiblities () {

    }
  }
}
</script>

<style scoped>
.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  cursor: pointer;
  padding: .05rem;
  text-align: center;
  /* row-gap: 15px; */
}

.chess-board .cell {
  min-height: 80px;
  min-width: 80px;
}

.chess-board .cell.selected {

}

.chess-board .cell.possible {

}

/* .chess-board .cell:nth-child(odd) {
  background-color: #f8f9fa;
}
.chess-board .cell:nth-child(even) {
  background-color: rgb(170, 170, 241);
} */
</style>
