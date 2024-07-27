// 0-1 Knapsack

// Dynamic Programming - Space Optimization
function knapsack(profit: number[], weight: number[], capacity: number) {
  const ITEMS = profit.length
  const CAPS = capacity + 1

  const dp: number[] = new Array(CAPS).fill(0)

  for (let cap = 1; cap < CAPS; cap++) {
    if (cap >= weight[0]) {
      dp[cap] = profit[0]
    }
  }

  for (let i = 1; i < ITEMS; i++) {
    for (let cap = 1; cap < CAPS; cap++) {
      const exclude = dp[cap]
      const include = cap >= weight[i]
        ? profit[i] + dp[cap - weight[i]]
        : 0
      dp[i][cap] = Math.max(exclude, include)
    }
  }

  return dp[CAPS - 1]
}


// Dynamic Programming
function knapsack(profit: number[], weight: number[], capacity: number) {
  const ITEMS = profit.length
  const CAPS = capacity + 1

  const dp: number[][] = new Array(ITEMS)
  for (let i = 0; i < ITEMS; i++) {
    dp[i] = Array(CAPS).fill(0)
  }

  for (let cap = 1; cap < CAPS; cap++) {
    if (cap >= weight[cap]) {
      dp[0][cap] = profit[cap]
    }
  }

  for (let i = 1; i < ITEMS; i++) {
    for (let cap = 1; cap < CAPS; cap++) {
      const exclude = dp[i - 1][cap]
      const include = cap >= weight[i]
        ? profit[i] + dp[i - 1][cap - weight[i]]
        : 0
      dp[i][cap] = Math.max(exclude, include)
    }
  }

  return dp[ITEMS - 1][CAPS - 1]
}


// Memoization
function knapsack_memo(profit: number[], weight: number[], capacity: number) {
  const memo: number[][] = new Array(profit.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(capacity)
  }
  function dfs(i: number, remaining: number, p: number): number {
    if (remaining < 0) {
      return 0
    }
    if (i === profit.length) {
      return p
    }
    if (memo[i][remaining] === undefined) {
      memo[i][remaining] = Math.max(
          dfs(i + 1, remaining, p),
          dfs(i + 1, remaining - weight[i], p + profit[i]),
        )
    }
    return memo[i][remaining]
  }
  return dfs(0, capacity, 0)
}


// Brute Force
function knapsack_bf(profit: number[], weight: number[], capacity: number) {
  function dfs(i: number, remaining: number, p: number): number {
    if (remaining < 0) {
      return 0
    }
    if (i === profit.length) {
      return p
    }
    return Math.max(
      dfs(i + 1, remaining, p),
      dfs(i + 1, remaining - weight[i], p + profit[i]),
    )
  }
  return dfs(0, capacity, 0)
}


// Example
const res = knapsack(
  [4,4,7,1],
  [5,2,3,1],
  8,
)
console.log(res) // 12
