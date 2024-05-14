function climbStairs(n: number): number {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }

  const memo = [1, 2]
  let m = 3
  while (true) {
    const sum = memo[1] + memo[0]
    if (m === n) {
      return sum
    }
    memo[0] = memo[1]
    memo[1] = sum
    m++
  }
}

// function climbStairs(n: number): number {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }