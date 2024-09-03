function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = Array(s.length + 1)
  dp[dp.length - 1] = true
  for (let i = dp.length - 2; i >= 0; i--) {
    for (const word of wordDict) {
      let j = i
      let k = 0
      while (j < s.length && k < word.length) {
        if (s[j] !== word[k]) break
        j++
        k++
      }
      if (k === word.length && dp[j]) {
        dp[i] = true
        break
      }
    }
    dp[i] = dp[i] === true
  }
  return dp[0]
}


// Memoization
function wordBreak_memo(s: string, wordDict: string[]): boolean {
  const memo: boolean[] = Array(s.length)
  const helper = (index: number) => {
    if (index === s.length) {
      return true
    }
    if (memo[index] !== undefined) {
      return memo[index]
    }
    for (const word of wordDict) {
      let j = index
      let k = 0
      while (j < s.length && k < word.length) {
        if (s[j] !== word[k]) break
        j++
        k++
      }
      if (k === word.length && helper(j)) {
        memo[j] = true
        return true
      }
    }
    memo[index] = false
    return false
  }
  return helper(0)
}
