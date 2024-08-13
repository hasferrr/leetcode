function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  const fn = (start: number): number => {
    let dp: number[] = [0, 0]
    for (let i = start; i < nums.length; i++) {
      const maximum = Math.max(nums[i] + dp[0], dp[1])
      dp[0] = dp[1]
      dp[1] = maximum
    }
    return dp[1]
  }

  return Math.max(
    fn(1),
    (() => {
      nums.pop()
      return fn(0)
    })()
  )
}


// Memoization
function rob_memo(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let memo: number[] = Array(nums.length)

  const fn = (i: number): number => {
    if (i >= nums.length) return 0
    if (i === nums.length - 1) return nums[i]
    if (memo[i] !== undefined) return memo[i]
    memo[i] = Math.max(
      nums[i] + fn(i + 2),
      nums[i + 1] + fn(i + 3)
    )
    return memo[i]
  }

  return Math.max(
    fn(1),
    (() => {
      memo = Array(nums.length)
      nums.pop()
      return fn(0)
    })()
  )
}
