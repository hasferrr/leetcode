// Tabulation
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  const robMax = [nums[0], Math.max(nums[0], nums[1])]

  let i = 2
  while (i < nums.length) {
    const money = Math.max(
      robMax[0] + nums[i],
      robMax[1]
    )
    robMax[0] = robMax[1]
    robMax[1] = money
    i++
  }
  return robMax[1]
}

// Memoization
// function rob(nums: number[]): number {
//   const memo = new Map<number, number>()
//   function robInner(nums: number[], start: number): number {
//     if (start >= nums.length) {
//       return 0
//     }
//     if (!memo.has(start)) {
//       memo.set(start, nums[start] + robInner(nums, start + 2))
//     }
//     if (!memo.has(start + 1)) {
//       memo.set(start + 1, robInner(nums, start + 1))
//     }
//     return Math.max(
//       memo.get(start), 
//       memo.get(start + 1)
//     )
//   }
//   return robInner(nums, 0)
// }

// Brute Force
// function rob(nums: number[]): number {
//   function robInner(nums: number[], start: number): number {
//     if (start >= nums.length) {
//       return 0
//     }
//     return Math.max(
//       nums[start] + robInner(nums, start + 2),
//       robInner(nums, start + 1)
//     )
//   }
//   return robInner(nums, 0)
// }
