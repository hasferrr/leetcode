function maxPoints(points: number[][]): number {
  const ROWS = points.length
  const COLS = points[0].length

  const dp = Array(COLS)
  const left = Array(COLS).fill(0)
  const right = Array(COLS).fill(0)

  for (let row = 0; row < ROWS; row++) {
    for (let i = 0; i < COLS; i++) {
      dp[i] = points[row][i] + Math.max(left[i], right[i])
    }
    left[0] = dp[0]
    for (let i = 1; i < COLS; i++) {
      left[i] = Math.max(dp[i], left[i - 1] - 1)
    }
    right[right.length - 1] = dp[dp.length - 1]
    for (let i = COLS - 2; i >= 0; i--) {
      right[i] = Math.max(dp[i], right[i + 1] - 1)
    }
  }

  return Math.max(...dp)
}


// Memoization
function maxPoints_memo(points: number[][]): number {
  const ROWS = points.length
  const COLS = points[0].length

  const memo = Array.from({ length: ROWS }, () => Array(COLS))

  const helper = (r: number, c: number): number => {
    if (r === ROWS) {
      return 0
    }
    if (memo[r][c] !== undefined) {
      return memo[r][c]
    }
    let res = -Infinity
    for (let newC = 0; newC < COLS; newC++) {
      res = Math.max(
        res,
        points[r][newC] - Math.abs(c - newC) + helper(r + 1, newC),
      )
    }
    memo[r][c] = res
    return res
  }

  let res = -Infinity
  for (let c = 0; c < COLS; c++) {
    res = Math.max(
      res,
      points[0][c] + helper(1, c),
    )
  }
  return res
}
