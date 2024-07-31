// Unbounded Knapsack

// Dynamic Programming - Space Optimization
function unboundedKnapsack(profit: number[], weight: number[], capacity: number): number {
  const dp = Array(capacity + 1).fill(0)

  for (let cap = 1; cap <= capacity; cap++) {
    dp[cap] = weight[0] <= cap
      ? profit[0] + dp[cap - weight[0]]
      : 0
  }

  for (let i = 1; i < profit.length; i++) {
    for (let cap = 1; cap <= capacity; cap++) {
      const exclude = dp[cap]
      const include = weight[i] <= cap
        ? profit[i] + dp[cap - weight[i]]
        : 0
      dp[cap] = Math.max(exclude, include)
    }
  }

  return dp[capacity]
}


// Dynamic Programming
function unboundedKnapsack_dp(profit: number[], weight: number[], capacity: number): number {
  const dp = Array(profit.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(capacity + 1).fill(0)
  }

  for (let cap = 0; cap <= capacity; cap++) {
    dp[0][cap] = weight[0] <= cap
      ? profit[0] + dp[0][cap - weight[0]]
      : 0
  }

  for (let i = 1; i < dp.length; i++) {
    for (let cap = 1; cap <= capacity; cap++) {
      const exclude = dp[i - 1][cap]
      const include = weight[i] <= cap
        ? profit[i] + dp[i][cap - weight[i]]
        : 0
      dp[i][cap] = Math.max(exclude, include)
    }
  }

  return dp[dp.length - 1][capacity]
}


// Memoization
function unboundedKnapsack_memo(profit: number[], weight: number[], capacity: number): number {
  const memo = Array(profit.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(capacity + 1)
  }

  function fn(i: number, cap: number): number {
    if (i >= profit.length) return 0
    if (cap < 0) return 0
    if (memo[i][cap] !== undefined) return memo[i][cap]
    const exclude = fn(i + 1, cap)
    const include = weight[i] <= cap
      ? profit[i] + fn(i, cap - weight[i])
      : 0
    memo[i][cap] = Math.max(exclude, include)
    return memo[i][cap]
  }

  return fn(0, capacity)
}


// Brute Force
function unboundedKnapsack_bf(profit: number[], weight: number[], capacity: number): number {
  function fn(i: number, cap: number): number {
    if (i >= profit.length) return 0
    if (cap < 0) return 0
    const exclude = fn(i + 1, cap)
    const include = weight[i] <= cap
      ? profit[i] + fn(i, cap - weight[i])
      : 0
    return Math.max(exclude, include)
  }

  return fn(0, capacity)
}


// Example
const res = unboundedKnapsack(
  [4,4,7,1],
  [5,2,3,1],
  8,
)
console.log(res) // 18
