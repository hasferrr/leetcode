// DP with Space Optimization
function minDistance(word1: string, word2: string): number {
  if (word1 === "") return word2.length
  if (word2 === "") return word1.length

  const dp = new Array(word2.length + 1).fill(0)

  for (let j = word2.length - 1; j >= 0; j--) {
    dp[j] = word2.length - j
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    let bottomRight = dp[word2.length]
    dp[word2.length] = word1.length - i
    for (let j = word2.length - 1; j >= 0; j--) {
      const temp = dp[j]
      if (word1[i] === word2[j]) {
        dp[j] = bottomRight
      } else {
        const replace = bottomRight
        const deletion = dp[j]
        const insertion = dp[j + 1]
        dp[j] = 1 + Math.min(replace, deletion, insertion)
      }
      bottomRight = temp
    }
  }

  return dp[0]
}


// DP
function minDistance_dp_2D(word1: string, word2: string): number {
  if (word1 === "") return word2.length
  if (word2 === "") return word1.length

  const dp = new Array(word1.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length + 1).fill(0)
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    dp[i][word2.length] = word1.length - i
  }
  for (let j = word2.length - 1; j >= 0; j--) {
    dp[word1.length][j] = word2.length - j
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1]
      } else {
        const replace = 1 + dp[i + 1][j + 1]
        const deletion = 1 + dp[i + 1][j]
        const insertion = 1 + dp[i][j + 1]
        dp[i][j] = Math.min(replace, deletion, insertion)
      }
    }
  }

  return dp[0][0]
}


// Memoization
function minDistance_memo(word1: string, word2: string): number {
  const memo = new Array(word1.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(word2.length)
  }

  const fn = (i, j): number => {
    if (i === word1.length) return word2.length - j
    if (j === word2.length) return word1.length - i

    if (memo[i][j] !== undefined) {
      return memo[i][j]
    }

    if (word1[i] === word2[j]) {
      memo[i][j] = fn(i + 1, j + 1)
      return memo[i][j]
    }

    const replace = 1 + fn(i + 1, j + 1)
    const deletion = 1 + fn(i + 1, j)
    const insertion = 1 + fn(i, j + 1)

    memo[i][j] = Math.min(replace, deletion, insertion)
    return memo[i][j]
  }
  return fn(0, 0)
}
