function longestPalindromeSubseq(s: string): number {
  const n = s.length
  const dp = Array.from({ length: n }, () => Array(n))

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }

  for (let length = 1; length < n; length++) {
    for (let i = 0; i + length < n; i++) {
      const j = i + length
      if (s[i] === s[j]) {
        dp[i][j] = 2 + (dp[i + 1][j - 1] ?? 0)
      } else {
        dp[i][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - 1],
        )
      }
    }
  }

  return dp[0][n - 1]
}


// Memoization
function longestPalindromeSubseq_memo(s: string): number {
  const memo = Array.from({ length: s.length }, () => Array(s.length))
  const subseq = (l: number, r: number): number => {
    if (l > r) return 0
    if (l === r) return 1
    if (memo[l][r] !== undefined) return memo[l][r]
    if (s[l] === s[r]) {
      memo[l][r] = 2 + subseq(l + 1, r - 1)
    } else {
      memo[l][r] = Math.max(
        subseq(l + 1, r),
        subseq(l, r - 1),
      )
    }
    return memo[l][r]
  }
  return subseq(0, s.length - 1)
}
