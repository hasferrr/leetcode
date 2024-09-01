// TC = O(m*n)
// SC = O(1)
function setZeroes(matrix: number[][]): void {
  const ROWS = matrix.length
  const COLS = matrix[0].length

  // find zeros
  const topLeft = matrix[0][0]
  let firstRowZero = matrix[0].some((n) => n === 0)
  let firstColZero = false
  for (let i = 0; i < ROWS; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true
      break
    }
  }

  for (let i = 1; i < ROWS; i++) {
    for (let j = 1; j < COLS; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0 // col j contains zero
        matrix[i][0] = 0 // row i contains zero
      }
    }
  }

  // fill zeros
  for (let i = 1; i < ROWS; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < COLS; j++) {
        matrix[i][j] = 0
      }
    }
  }
  for (let j = 1; j < COLS; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < ROWS; i++) {
        matrix[i][j] = 0
      }
    }
  }

  if (topLeft === 0) {
    for (let i = 1; i < ROWS; i++) {
      matrix[i][0] = 0
    }
    for (let j = 1; j < COLS; j++) {
      matrix[0][j] = 0
    }
    return
  }

  if (firstRowZero) {
    for (let j = 0; j < COLS; j++) {
      matrix[0][j] = 0
    }
  }
  if (firstColZero) {
    for (let i = 0; i < ROWS; i++) {
      matrix[i][0] = 0
    }
  }
}
