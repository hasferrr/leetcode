function numMagicSquaresInside(grid: number[][]): number {
  const ROWS = grid.length
  const COLS = grid[0].length

  if (ROWS < 3 || COLS < 3) {
    return 0
  }

  // prefix sum row <-----> (horizontal)
  // prefix sum col ^v (vertical)
  // prefix sum diagonal \ and /

  const rowSum = Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  const colSum = Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  const diagSumToRight = Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  const diagSumToLeft = Array.from({ length: ROWS }, () => Array(COLS).fill(0))

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      rowSum[i][j] = grid[i][j] + (j > 0 ? rowSum[i][j - 1] : 0)
      colSum[i][j] = grid[i][j] + (i > 0 ? colSum[i - 1][j] : 0)
      diagSumToRight[i][j] = grid[i][j]
        + (i > 0 && j > 0 ? diagSumToRight[i - 1][j - 1] : 0)
      diagSumToLeft[i][j] = grid[i][j]
        + (i > 0 && j < COLS - 1 ? diagSumToLeft[i - 1][j + 1] : 0)
    }
  }

  let result = 0
  for (let rs = 0; rs <= ROWS - 3; rs++) {
    for (let cs = 0; cs <= COLS - 3; cs++) {
      if (isMagicSquare(rs, cs)) {
        result++
      }
    }
  }
  return result

  function isMagicSquare(rs: number, cs: number): boolean {
    const re = rs + 2
    const ce = cs + 2

    const expectedSum = grid[rs][cs] + grid[rs][cs + 1] + grid[rs][cs + 2]

    // Check row sums
    for (let i = rs; i <= re; i++) {
      const sum = rowSum[i][ce] - (cs > 0 ? rowSum[i][cs - 1] : 0)
      if (sum !== expectedSum) {
        return false
      }
    }

    // Check column sums
    for (let j = cs; j <= ce; j++) {
      const sum = colSum[re][j] - (rs > 0 ? colSum[rs - 1][j] : 0)
      if (sum !== expectedSum) {
        return false
      }
    }

    // Check diagonal sums
    const diagSum1 = diagSumToRight[re][ce] - (rs > 0 && cs > 0 ? diagSumToRight[rs - 1][cs - 1] : 0)
    const diagSum2 = diagSumToLeft[re][cs] - (rs > 0 && ce < COLS - 1 ? diagSumToLeft[rs - 1][ce + 1] : 0)
    if (diagSum1 !== expectedSum || diagSum2 !== expectedSum) {
      return false
    }

    // Check for numbers 1 to 9
    const numSet = new Set()
    for (let i = rs; i <= re; i++) {
      for (let j = cs; j <= ce; j++) {
        const num = grid[i][j]
        if (num < 1 || num > 9 || numSet.has(num)) {
          return false
        }
        numSet.add(num)
      }
    }

    return true
  }
}
