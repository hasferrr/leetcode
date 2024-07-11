function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const result: number[][] = []
  const dfs = (i: number, subset: number[]) => {
    if (i === nums.length) {
      result.push([...subset])
      return
    }
    subset.push(nums[i])
    dfs(i + 1, subset)
    subset.pop()
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++
    }
    dfs(i + 1, subset)
  }
  dfs(0, [])
  return result
}
