// DP with Space Optimization
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const dp: number[] = Array(amount + 1).fill(Infinity)

  dp[0] = 0
  for (const c of coins) {
    for (let sum = 0; sum < dp.length; sum++) {
      if (sum - c >= 0) {
        dp[sum] = Math.min(dp[sum], 1 + dp[sum - c])
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}


// DP
function coinChange_dp(coins: number[], amount: number): number {
  if (amount === 0) return 0
  const dp: number[][] = Array(coins.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(amount + 1).fill(Infinity)
  }

  dp[0][0] = 0

  // when i = 0
  let c = coins[0]
  for (let sum = 1; sum <= amount; sum++) {
    dp[0][sum] = Infinity
    if (sum - c >= 0) {
      dp[0][sum] = Math.min(dp[0][sum], 1 + dp[0][sum - c])
    }
  }

  for (let i = 1; i < coins.length; i++) {
    let c = coins[i]
    for (let sum = 0; sum <= amount; sum++) {
      dp[i][sum] = dp[i - 1][sum]
      if (sum - c >= 0) {
        dp[i][sum] = Math.min(dp[i][sum], 1 + dp[i][sum - c])
      }
    }
  }

  return dp[coins.length - 1][amount] === Infinity
    ? -1
    : dp[coins.length - 1][amount]
}


// Memoization
function coinChange_memo(coins: number[], amount: number): number {
  const memo: number[][] = Array(coins.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(amount + 1)
  }

  const fn = (i: number, sum: number): number => {
    if (sum === amount) return 0
    if (i >= coins.length) return Infinity
    if (memo[i][sum] !== undefined) return memo[i][sum]

    const exclude = fn(i + 1, sum)
    const include = sum + coins[i] <= amount
      ? 1 + fn(i, sum + coins[i])
      : Infinity

    memo[i][sum] = Math.min(exclude, include)
    return memo[i][sum]
  }

  const ans = fn(0, 0)
  return ans === Infinity ? -1 : ans
}
