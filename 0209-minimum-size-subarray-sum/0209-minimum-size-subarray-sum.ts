function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = Infinity
  let sum = 0
  let L = 0
  let R = 0
  while (R < nums.length) {
    sum += nums[R]
    while (sum >= target) {
      minLen = Math.min(R - L + 1, minLen)
      if (minLen === 1) return 1
      sum -= nums[L]
      L++
    }
    R++
  }
  return minLen === Infinity ? 0 : minLen
}

// function minSubArrayLen(target: number, nums: number[]): number {
//   let minLen = Infinity
//   let sum = 0
//   let L = 0
//   let R = 0
//   sum += nums[R]
//   while (R < nums.length) {
//     if (sum >= target) {
//       minLen = Math.min(R - L + 1, minLen)
//       if (minLen === 1) return 1
//       sum -= nums[L]
//       L++
//       if (L > R) R++
//     } else {
//       R++
//       sum += nums[R]
//     }
//   }
//   return minLen === Infinity ? 0 : minLen
// }
