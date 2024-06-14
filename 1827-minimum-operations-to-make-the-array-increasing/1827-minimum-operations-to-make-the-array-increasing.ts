function minOperations(nums: number[]): number {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1]
    let num = nums[i]
    if (num <= prev) {
      nums[i] = prev + 1
      count += nums[i] - num
    }
  }
  return count
}
