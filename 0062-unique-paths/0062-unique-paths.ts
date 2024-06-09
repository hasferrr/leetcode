// Tabulation (Bottom-up)
// Time  : O(m + n)
// Space : O(2n) = O(n)
function uniquePaths(m: number, n: number): number {
  let prevRow = Array(n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    const currRow = Array(n)
    currRow[n - 1] = 1

    for (let i = n - 2; i >= 0; i--) {
      currRow[i] = prevRow[i] + currRow[i + 1]
    }

    prevRow = currRow
  }

  return prevRow[0]
}


// // Memoization
// // Time  : O(m + n)
// // Space : O(m + n)
// function uniquePaths(m: number, n: number): number {
//   function path(row: number, col: number, memo: (null | number)[][]): number {
//     if (row === m - 1 && col === n - 1) {
//       return 1
//     }
//     if (row === m || col === n) {
//       return 0
//     }
//     if (memo[row][col] === null) {
//       memo[row][col] = path(row + 1, col, memo) + path(row, col + 1, memo)
//     }
//     return memo[row][col]
//   }
//   return path(0, 0, Array(m).fill(null).map(() => Array(n).fill(null)))
// }


// // Brute Force
// // Time  : O(2^(m + n))
// // Space : O(m + n)
// function uniquePaths(m: number, n: number): number {
//   function path(row: number, col: number): number {
//     if (row === m - 1 && col === n - 1) {
//       return 1
//     }
//     if (row === m || col === n) {
//       return 0
//     }
//     return path(row + 1, col) + path(row, col + 1)
//   }
//   return path(0, 0)
// }
