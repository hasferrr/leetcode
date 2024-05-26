function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  function createSubset(subs: number[], i: number): void {
    if (i === nums.length) {
      result.push(subs)
      return
    }
    const nextSubsets = [[...subs, nums[i]], subs]
    for (const nextSub of nextSubsets) {
      createSubset(nextSub, i + 1)
    }
  }
  createSubset([], 0)
  return result
}
