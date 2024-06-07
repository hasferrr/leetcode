// Tabulation (Bottom-up)
function climbStairs(n: number): number {
  if (n === 1) return 1
  if (n === 2) return 2
  const prev = [1, 2]

  let i = 3
  while (true) {
    const sum = prev[0] + prev[1]
    if (i === n) return sum
    prev[0] = prev[1]
    prev[1] = sum
    i++
  }
}

// Memoization (Top-down)
// function climbStairs(n: number): number {
//   function climb(n: number, memo: Map<number, number>): number {
//     if (n === 1) return 1
//     if (n === 2) return 2
//     if (memo.has(n)) return memo.get(n)
//     memo.set(n, climb(n - 1, memo) + climb(n - 2, memo))
//     return memo.get(n)
//   }
//   return climb(n, new Map())
// }

// Recursion
// function climbStairs(n: number): number {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }
