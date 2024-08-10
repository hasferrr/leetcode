// Greedy
function canJump(nums: number[]): boolean {
  let goal = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i
    }
  }
  return goal === 0
}


// DP
function canJump_dp(nums: number[]): boolean {
  const dp: boolean[] = Array(nums.length).fill(false)
  for (let i = nums.length - 1; i >= 0; i--) {
    const maxJump = nums[i]
    if (i + maxJump >= nums.length - 1) {
      dp[i] = true
      continue
    }
    for (let j = i + 1; j <= i + maxJump; j++) {
      if (dp[j]) {
        dp[i] = true
        break
      }
    }
  }
  return dp[0]
}
