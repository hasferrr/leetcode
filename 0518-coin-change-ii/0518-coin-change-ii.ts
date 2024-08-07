// DP
// TC = O(amount * coins.length)
// SC = O(amount)
function change(amount: number, coins: number[]): number {
  const dp = Array(amount + 1).fill(1)

  // when i = 0
  for (let sum = 1; sum <= amount; sum++) {
    dp[sum] = 0
    if (sum - coins[0] >= 0) {
      dp[sum] = dp[sum - coins[0]]
    }
  }

  for (let i = 1; i < coins.length; i++) {
    for (let sum = 1; sum <= amount; sum++) {
      if (sum - coins[i] >= 0) {
        dp[sum] += dp[sum - coins[i]]
      }
    }
  }

  return dp[amount]
}


// Memoization
// TC = SC = O(amount * coins.length)
function change_memo(amount: number, coins: number[]): number {
  const memo = Array.from({ length: coins.length }, () => Array(amount))
  const combination = (i: number, sum: number): number => {
    if (sum > amount) return 0
    if (sum === amount) return 1
    if (i === coins.length) return 0
    if (memo[i][sum] !== undefined) return memo[i][sum]
    const exclude = combination(i + 1, sum)
    const include = combination(i, sum + coins[i])
    memo[i][sum] = exclude + include
    return memo[i][sum]
  }
  return combination(0, 0)
}
