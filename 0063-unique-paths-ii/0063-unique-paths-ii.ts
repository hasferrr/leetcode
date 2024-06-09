// Tabulation (Bottom-up) v2
// Time: O(m + n)
// Space: O(n)
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const ROWS = obstacleGrid.length
  const COLS = obstacleGrid[0].length

  if (obstacleGrid[0][0] === 1) return 0
  if (obstacleGrid[ROWS - 1][COLS - 1] === 1) return 0

  const dp = Array(COLS).fill(0)
  dp[COLS - 1] = 1

  for (let i = ROWS - 1; i >= 0; i--) {
    if (obstacleGrid[i][COLS - 1] === 1) {
      dp[COLS - 1] = 0
    }

    for (let j = COLS - 2; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
      } else {
        dp[j] += dp[j + 1]
      }
    }
  }

  return dp[0]
}


// // Tabulation (Bottom-up) v1
// // Time: O(m + n)
// // Space: O(2 * n)
// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//   const ROWS = obstacleGrid.length
//   const COLS = obstacleGrid[0].length
//   if (obstacleGrid[0][0] === 1) return 0
//   if (obstacleGrid[ROWS - 1][COLS - 1] === 1) return 0

//   let prevRow = Array(COLS).fill(0)
//   prevRow[COLS - 1] = 1

//   for (let i = ROWS - 1; i >= 0; i--) {
//     const currRow = Array(COLS)

//     if (obstacleGrid[i][COLS - 1] === 1) {
//       currRow[COLS - 1] = 0
//     } else {
//       currRow[COLS - 1] = prevRow[COLS - 1]
//     }

//     for (let j = COLS - 2; j >= 0; j--) {
//       if (obstacleGrid[i][j] === 1) {
//         currRow[j] = 0
//       } else {
//         currRow[j] = prevRow[j] + currRow[j + 1]
//       }
//     }

//     prevRow = currRow
//   }

//   return prevRow[0]
// }


// // Memoization
// // Time: O(m + n)
// // Space: O(m + n)
// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//   const ROWS = obstacleGrid.length
//   const COLS = obstacleGrid[0].length
//   if (obstacleGrid[0][0] === 1) return 0
//   if (obstacleGrid[ROWS - 1][COLS - 1] === 1) return 0

//   function path(row: number, col: number, memo: (null | number)[][]): number {
//     if (row === ROWS - 1 && col === COLS - 1) {
//       return 1
//     }
//     if (row === ROWS || col === COLS) {
//       return 0
//     }
//     if (obstacleGrid[row][col] === 1) {
//       return 0
//     }
//     if (memo[row][col] === null) {
//       memo[row][col] = path(row + 1, col, memo) + path(row, col + 1, memo)
//     }
//     return memo[row][col]
//   }

//   return path(0, 0, Array(ROWS).fill(null).map(() => {
//     return Array(COLS).fill(null)
//   }))
// }


// // Brute force
// // Time: O(2^(m + n))
// // Space: O(m + n)
// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//   const ROWS = obstacleGrid.length
//   const COLS = obstacleGrid[0].length
//   if (obstacleGrid[0][0] === 1) return 0
//   if (obstacleGrid[ROWS - 1][COLS - 1] === 1) return 0
//   function path(row: number, col: number): number {
//     if (row === ROWS - 1 && col === COLS - 1) {
//       return 1
//     }
//     if (row === ROWS || col === COLS) {
//       return 0
//     }
//     if (obstacleGrid[row][col] === 1) {
//       return 0
//     }
//     return path(row + 1, col) + path(row, col + 1)
//   }
//   return path(0, 0)
// }
