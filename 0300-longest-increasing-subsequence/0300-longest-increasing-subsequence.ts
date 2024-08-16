function lengthOfLIS(nums: number[]): number {
  let max = 1
  const dp = Array(nums.length)
  for (let i = dp.length - 1; i >= 0; i--) {
    dp[i] = 1
    for (let j = i + 1; j < dp.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
    max = Math.max(max, dp[i])
  }
  return max
}


// Rec+Memo
// function lengthOfLIS_memo(nums: number[]): number {
//   const memo = Array(nums.length)
//   const fn = (i: number): number => {
//     if (memo[i] !== undefined) return memo[i]
//     let res = 1
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > nums[i]) {
//         res = Math.max(res, 1 + fn(j))
//       }
//     }
//     memo[i] = res
//     return res
//   }
//   let res = 1
//   for (let i = 0; i < nums.length; i++) {
//     res = Math.max(res, fn(i))
//   }
//   return res
// }
