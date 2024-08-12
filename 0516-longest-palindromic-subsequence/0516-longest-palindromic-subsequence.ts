function longestPalindromeSubseq(s: string): number {
  let longest = 1
  const memo = Array.from({ length: s.length }, () => Array(s.length))
  const subseq = (l: number, r: number): number => {
    if (l < 0 || r === s.length) {
      return 0
    }
    if (memo[l][r] !== undefined) {
      return memo[l][r]
    }
    if (s[l] === s[r]) {
      memo[l][r] = (l === r ? 1 : 2) + subseq(l - 1, r + 1)
      return memo[l][r]
    }
    memo[l][r] = Math.max(
      subseq(l - 1, r),
      subseq(l, r + 1),
    )
    return memo[l][r]
  }
  for (let i = 0; i < s.length; i++) {
    longest = Math.max(
      longest,
      subseq(i, i),
      subseq(i - 1, i),
      subseq(i, i + 1),
    )
  }
  return longest
}
