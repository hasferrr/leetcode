function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const localSum = (nums: number[], i: number, sum: number): void => {
    if (i === candidates.length) {
      return
    }
    if (sum === target) {
      result.push([...nums])
      return
    }
    if (sum > target) {
      return
    }
    nums.push(candidates[i])
    localSum(nums, i, sum + candidates[i])
    nums.pop()
    localSum(nums, i + 1, sum)
  }
  localSum([], 0, 0)
  return result
}
