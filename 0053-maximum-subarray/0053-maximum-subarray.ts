// Kadane's Algorithm
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]
  let currSum = maxSum
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i]
    currSum = Math.max(n, currSum + n)
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}
