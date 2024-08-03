// DP
function lastStoneWeightII(stones: number[]): number {
  const total = stones.reduce((acc, n) => n + acc, 0)
  const half = Math.ceil(total / 2)
  const dp: number[] = Array(half + 1).fill(0)

  for (const s of stones) {
    for (let i = half; i >= s; i--) {
      dp[i] = Math.max(dp[i], dp[i - s] + s)
    }
  }

  return Math.abs(dp[half] - (total - dp[half]))
}


// Memoization
function lastStoneWeightII_memo(stones: number[]): number {
  const total = stones.reduce((acc, n) => n + acc, 0)
  const half = Math.ceil(total / 2)
  const memo: Map<number, number>[] = Array(stones.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Map()
  }

  const fn = (i, sum): number => {
    if (sum === half) return half
    if (i >= stones.length) return sum
    if (memo[i].has(sum)) return memo[i].get(sum)

    let result = fn(i + 1, sum)
    if (sum + stones[i] <= half) {
      result = Math.max(result, fn(i + 1, sum + stones[i]))
    }

    memo[i].set(sum, result)
    return result
  }

  const closestToHalf = fn(0, 0)
  return Math.abs(closestToHalf - (total - closestToHalf))
}

// [2,7,4,1,8,1]    total = 23 / 2 = 12
// 2 7 4  |  1 8 1 = 13 - 10 = 3
// 7 4 1  |  8 2 1 = 12 - 11 = 1 (minimum)
