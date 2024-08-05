function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false
  const memo = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1))

  const interleave = (i, j, k): boolean => {
    if (k === s3.length) return true
    if (memo[i][j] !== undefined) return memo[i][j]

    if (i !== s1.length && s3[k] === s1[i] && interleave(i + 1, j, k + 1)) {
      return true
    }
    if (j !== s2.length && s3[k] === s2[j] && interleave(i, j + 1, k + 1)) {
      return true
    }

    memo[i][j] = false
    return false
  }

  return interleave(0, 0, 0)
}
