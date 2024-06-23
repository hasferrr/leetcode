function pivotIndex(nums: number[]): number {
  if (nums.length === 1) {
    return 0
  }
  let prefixSum = 0
  let postfixSum = nums.reduce((res, curr) => res + curr, 0) - nums[0]
  
  for (let i = 0; i < nums.length; i++) {
    if (prefixSum === postfixSum) {
      return i
    }
    prefixSum += nums[i]
    postfixSum -= nums[i + 1] ?? 0
  }

  return -1
}
