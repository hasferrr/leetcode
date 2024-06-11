// O(n)
function countBits(n: number): number[] {
  const dp = Array(n + 1).fill(0)
  
  let nextBit = 1
  while (true) {
    const doubleNextBit = nextBit * 2
    for (let i = nextBit; i < doubleNextBit; i++) {
      if (i >= n + 1) {
        return dp
      }
      dp[i] = dp[i - nextBit] + 1
    }
    nextBit = doubleNextBit
  }
}


// O(n log n)
// function countBits(n: number): number[] {
//   const result = []
//   let m = 0
//   while (m <= n) {
//     let ones = 0
//     let k = m
//     while (k !== 0) {
//       ones += k & 1
//       k = k >> 1
//     }
//     result.push(ones)
//     m++
//   }
//   return result
// }
