// DP with Space Optimization
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array(m + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n + 1).fill(0)
  }

  for (const s of strs) {
    let zeros = 0
    let ones = 0
    for (const c of s) {
      if (c === '0') zeros++
      else ones++
    }
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeros][j - ones])
      }
    }
  }

  return dp[m][n]
}


// Memoization
function findMaxForm_memo(strs: string[], m: number, n: number): number {
  const memo: number[][][] = Array(strs.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(m + 1)
    for (let j = 0; j < memo[0].length; j++) {
      memo[i][j] = Array(n + 1)
    }
  }

  const fn = (i, m, n): number => {
    if (i === strs.length) return 0
    if (memo[i][m][n] !== undefined) return memo[i][m][n]

    const exclude = fn(i + 1, m, n)

    let zeros = 0
    let ones = 0
    for (const c of strs[i]) {
      if (c === '0') zeros++
      else ones++
    }
    const include = m - zeros >= 0 && n - ones >= 0
      ? 1 + fn(i + 1, m - zeros, n - ones)
      : -Infinity

    memo[i][m][n] = Math.max(exclude, include)
    return memo[i][m][n]
  }

  const ans = fn(0, m, n)
  return ans === -Infinity ? 0 : ans
}
