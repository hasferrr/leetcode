// DP with Space Optimization
function numDistinct(s: string, t: string): number {
  if (s.length < t.length) return 0

  const sLen = s.length
  const tLen = t.length
  const dp: number[] = Array(tLen + 1).fill(0)

  dp[tLen] = 1

  for (let i = sLen - 1; i >= 0; i--) {
    let bottomRight = dp[tLen]
    for (let j = tLen - 1; j >= 0; j--) {
      const temp = dp[j]
      if (s[i] === t[j]) dp[j] += bottomRight
      bottomRight = temp
    }
  }

  return dp[0]
}


// DP
function numDistinct_dp(s: string, t: string): number {
  if (s.length < t.length) return 0

  const sLen = s.length
  const tLen = t.length
  const dp = Array.from({ length: sLen + 1 }, () => Array(tLen + 1).fill(0))

  for (let i = 0; i < dp.length; i++) {
    dp[i][tLen] = 1
  }

  for (let i = sLen - 1; i >= 0; i--) {
    for (let j = tLen - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }

  return dp[0][0]
}


// Memoization
function numDistinct_memo(s: string, t: string): number {
  if (s.length < t.length) return 0
  const memo = Array.from({ length: s.length }, () => Array(t.length))
  const lcs = (i: number, j: number): number => {
    if (j === t.length) return 1
    if (i === s.length) return 0
    if (memo[i][j] !== undefined) return memo[i][j]
    if (s[i] === t[j]) {
      memo[i][j] = lcs(i + 1, j + 1) + lcs(i + 1, j)
      return memo[i][j]
    }
    memo[i][j] = lcs(i + 1, j)
    return memo[i][j]
  }
  return lcs(0, 0)
}
