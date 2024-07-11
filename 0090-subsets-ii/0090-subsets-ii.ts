function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = []
  const dfs = (i: number, subset: number[], skip: Set<number>) => {
    if (i === nums.length) {
      result.push([...subset])
      return
    }
    if (skip.has(nums[i])) {
      dfs(i + 1, subset, skip)
      return
    }
    subset.push(nums[i])
    dfs(i + 1, subset, skip)
    const numSkip = subset.pop()
    skip.add(numSkip)
    dfs(i + 1, subset, skip)
    skip.delete(numSkip)
  }
  dfs(0, [], new Set())
  return result
}
