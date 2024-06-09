// Tabulation v2
// Time: O(n)
// Space: O(1)
function minCostClimbingStairs(cost: number[]): number {
  const subProb = [cost[0], cost[1]]
  for (let i = 2; i < cost.length; i++) {
    const result = cost[i] + Math.min(subProb[0], subProb[1])
    subProb[0] = subProb[1]
    subProb[1] = result
  }
  return Math.min(subProb[0], subProb[1])
}


// // Tabulation v1
// // Time: O(n)
// // Space: O(1)
// function minCostClimbingStairs(cost: number[]): number {
//   const subProb = [cost[cost.length - 2], cost[cost.length - 1]]
//   for (let i = cost.length - 3; i >= 0; i--) {
//     const result = cost[i] + Math.min(subProb[0], subProb[1])
//     subProb[1] = subProb[0]
//     subProb[0] = result
//   }
//   return Math.min(subProb[0], subProb[1])
// }


// // Memoization
// // Time: O(n)
// // Space: O(n)
// function minCostClimbingStairs(cost: number[]): number {
//   const memo = new Map<number, number>()

//   function minCost(i: number): number {
//     if (i >= cost.length) return 0

//     if (!memo.has(i)) {
//       memo.set(
//         i,
//         Math.min(
//           cost[i] + minCost(i + 1),
//           cost[i] + minCost(i + 2)
//         )
//       )
//     }

//     return memo.get(i)
//   }

//   return Math.min(minCost(0), minCost(1))
// }


// // Brute Force
// // Time: O(2^n)
// // Space: O(n)
// function minCostClimbingStairs(cost: number[]): number {
//   function minCost(i: number): number {
//     if (i >= cost.length) return 0
//     return Math.min(
//       cost[i] + minCost(i + 1),
//       cost[i] + minCost(i + 2)
//     )
//   }
//   return Math.min(minCost(0), minCost(1))
// }
