function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) return false
  k = k + 1
  const window = new Set<number>()
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (right - k === left) {
      window.delete(nums[left])
      left++
    }
    if (window.has(nums[right])) {
      return true
    }
    window.add(nums[right])
    right++
  }
  return false
}

// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   if (k === 0) return false
//   k = k + 1
//   const window = new Set<number>()
//   for (let i = 0; i < nums.length; i++) {
//     if (window.size === k) {
//       window.delete(nums[i - k])
//     }
//     if (window.has(nums[i])) {
//       return true
//     }
//     window.add(nums[i])
//   }
//   return false
// }
