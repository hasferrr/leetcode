function longestPalindromeSubseq(s: string): number {
  const memo = Array.from({ length: s.length }, () => Array(s.length))
  const subseq = (l: number, r: number): number => {
    if (l > r) return 0
    if (l === r) return 1
    if (memo[l][r] !== undefined) return memo[l][r]
    if (s[l] === s[r]) {
      memo[l][r] = 2 + subseq(l + 1, r - 1)
      return memo[l][r]
    }
    memo[l][r] = Math.max(
      subseq(l + 1, r),
      subseq(l, r - 1),
    )
    return memo[l][r]
  }
  return subseq(0, s.length - 1)
}
