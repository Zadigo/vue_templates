import _ from 'lodash'
import { ref, computed } from 'vue'

export default function () {
  const canMoveDiagonally = ['Fou', 'Dame', 'Tour']
  const canMoveHorizontally = ['Tour', 'Roi', 'Dame', 'Cavalier']
  const canMoveVertically = ['Tour', 'Roi', 'Dame', 'Cavalier']
  const canMoveBackwards = []
  const canSkipMultipleCells = ['Tour', 'Dame', 'Fou']

  const initialCell = ref(null)
  const currentCell = ref(null)

  const surroundingCells = computed(() => {
    return false
  })
  const movementPossibilities = computed(() => {
    return false
  })

  // For each column, calculate the max value
  // in order words the limiting cells for
  // which a piece would be offboard
  const columnsMaxValues = computed(() => {
    const columns = [
      { name: 'A', column: 1, min: 0, max: 0 },
      { name: 'A', column: 2, min: 1, max: 0 },
    ]
    return _.map(columns, (column) => {
      return column.min + 8 * 7
    })
  })

  function movePieceForward (k=1) {
    // Moving forward by 1 means that
    // we are adding 8 to the current cell
    return this.currentCell.value + (8 * k)
  }

  return {
    canMoveDiagonally,
    canMoveHorizontally,
    canMoveVertically,
    canSkipMultipleCells,
    initialCell,
    currentCell,
    surroundingCells,
    canMoveBackwards,
    movementPossibilities,
    columnsMaxValues,
    movePieceForward
  }
}
