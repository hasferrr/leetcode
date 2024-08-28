function spiralOrder(matrix: number[][]): number[] {
  const MAX = matrix.length * matrix[0].length
  const ROWS = matrix.length
  const COLS = matrix[0].length

  const result: number[] = []
  let row = 0
  let col = 0

  while (result.length < MAX) {
    // right
    while (col !== COLS && matrix[row][col] !== null) {
      result.push(matrix[row][col])
      matrix[row][col] = null
      col++
    }
    if (result.length === MAX) break
    col--
    row++

    // down
    while (row !== ROWS && matrix[row][col] !== null) {
      result.push(matrix[row][col])
      matrix[row][col] = null
      row++
    }
    if (result.length === MAX) break
    row--
    col--

    // left
    while (col >= 0 && matrix[row][col] !== null) {
      result.push(matrix[row][col])
      matrix[row][col] = null
      col--
    }
    if (result.length === MAX) break
    col++
    row--

    // up
    while (row >= 0 && matrix[row][col] !== null) {
      result.push(matrix[row][col])
      matrix[row][col] = null
      row--
    }
    row++
    col++
  }

  return result
}
