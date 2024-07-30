// Memoization
function findTargetSumWays(nums: number[], target: number): number {
  const memo = Array(nums.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Map<number, number>()
  }

  const find = (i, sum): number => {
    if (i === nums.length) {
      if (sum === target) return 1
      return 0
    }
    if (!memo[i].has(sum)) {
      const res = find(i + 1, sum + nums[i]) + find(i + 1, sum - nums[i])
      memo[i].set(sum, res)
    }
    return memo[i].get(sum)
  }

  return find(0, 0)
}


// Brute Force
function findTargetSumWays_bf(nums: number[], target: number): number {
  const find = (i, sum): number => {
    if (i === nums.length) {
      if (sum === target) {
        return 1
      }
      return 0
    }
    return find(i + 1, sum + nums[i]) +
      find(i + 1, sum - nums[i])
  }
  return find(0, 0)
}
