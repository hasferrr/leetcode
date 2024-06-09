// Tabulation (Bottom-up) v2 --- (the v1 version is more concise however)
// Time: O(m + n)
// Space: O(n)
// where m is the length of `text1` and n is the length of `text2`
function longestCommonSubsequence(text1: string, text2: string): number {
  const ROWS = text1.length
  const COLS = text2.length

  let dp = Array(COLS).fill(0)

  for (let i = ROWS - 1; i >= 0; i--) {
    if (text1[i] === text2[COLS - 1]) {
      dp[COLS - 1] = 1
    }

    let nextDpDiagonally = dp[COLS - 1]

    for (let j = COLS - 2; j >= 0; j--) {
      const temp = nextDpDiagonally
      nextDpDiagonally = dp[j]

      if (text1[i] === text2[j]) {
        dp[j] = 1 + temp
      } else {
        dp[j] = Math.max(dp[j], dp[j + 1])
      }
    }
  }

  return dp[0]
}



// // Tabulation (Bottom-up) v1
// // Time: O(m + n)
// // Space: O(2 * n)
// // where m is the length of `text1` and n is the length of `text2`
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const ROWS = text1.length
//   const COLS = text2.length

//   let prevDp = Array(COLS).fill(0)

//   for (let i = ROWS - 1; i >= 0; i--) {
//     const currDp = Array(COLS).fill(0)

//     if (text1[i] === text2[COLS - 1]) {
//       currDp[COLS - 1] = 1
//     } else {
//       currDp[COLS - 1] = prevDp[COLS - 1]
//     }

//     for (let j = COLS - 2; j >= 0; j--) {
//       if (text1[i] === text2[j]) {
//         currDp[j] = 1 + prevDp[j + 1]
//       } else {
//         currDp[j] = Math.max(prevDp[j], currDp[j + 1])
//       }
//     }

//     prevDp = currDp
//   }

//   return prevDp[0]
// }



// // Memoization
// // Time: O(m + n)
// // Space: O(m + n)
// function longestCommonSubsequence(text1: string, text2: string): number {
//   function func(s1: number, s2: number, memo: number[][]): number {
//     if (text1.length === s1 || text2.length === s2) {
//       return 0
//     }
//     if (memo[s1][s2] !== -1) {
//       return memo[s1][s2]
//     }
//     if (text1[s1] === text2[s2]) {
//       memo[s1][s2] = 1 + func(s1 + 1, s2 + 1, memo)
//     } else {
//       memo[s1][s2] = Math.max(
//         func(s1, s2 + 1, memo),
//         func(s1 + 1, s2, memo),
//       )
//     }
//     return memo[s1][s2]
//   }
//   return func(0, 0, Array(text1.length).fill(-1)
//     .map(() => Array(text2.length).fill(-1))
//   )
// }



// // Brute force
// // Time: O(2^(m + n))
// // Space: O(m + n)
// function longestCommonSubsequence(text1: string, text2: string): number {
//   if (text1.length === 0 || text2.length === 0) {
//     return 0
//   }
//   if (text1[0] === text2[0]) {
//     return 1 + longestCommonSubsequence(text1.slice(1), text2.slice(1))
//   }
//   return Math.max(
//     longestCommonSubsequence(text1, text2.slice(1)),
//     longestCommonSubsequence(text1.slice(1), text2),
//   )
// }
