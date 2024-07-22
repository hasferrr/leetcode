// Memoization (Top-down)
function findTargetSumWays(nums: number[], target: number): number {
  const memo: Map<number, number>[] = new Array(nums.length)

  const find = (nums: number[], target: number): number => {
    if (nums.length === 1) {
      if (nums[0] === 0 && nums[0] === target) return 2
      if (nums[0] === target || -nums[0] === target) return 1
      return 0
    }
    const n = nums.pop()
    if (memo[nums.length - 1] === undefined) {
      memo[nums.length - 1] = new Map()
    }
    if (!memo[nums.length - 1].has(target)) {
      const map = memo[nums.length - 1]
      map.set(target, find(nums, target + n) + find(nums, target - n))
    }
    const result = memo[nums.length - 1].get(target)
    nums.push(n)
    return result
  }

  return find(nums, target)
}


// Brute Force
function findTargetSumWays_bf(nums: number[], target: number): number {
  if (nums.length === 1) {
    if (nums[0] === 0 && nums[0] === target) return 2
    if (nums[0] === target || -nums[0] === target) return 1
    return 0
  }
  const n = nums.pop()
  const result = findTargetSumWays(nums, target + n) +
    findTargetSumWays(nums, target - n)
  nums.push(n)
  return result
}
