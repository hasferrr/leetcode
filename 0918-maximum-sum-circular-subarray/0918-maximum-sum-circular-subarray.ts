function maxSubarraySumCircular(nums: number[]): number {
  let maxSum = nums[0]
  let minSum = nums[0]
  let currMaxSum = maxSum
  let currMinSum = minSum
  let totalSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i]
    currMaxSum = Math.max(n, currMaxSum + n)
    currMinSum = Math.min(n, currMinSum + n)
    maxSum = Math.max(maxSum, currMaxSum)
    minSum = Math.min(minSum, currMinSum)
    totalSum += n
  }
  if (maxSum < 0) return maxSum
  return Math.max(maxSum, totalSum - minSum)
}
