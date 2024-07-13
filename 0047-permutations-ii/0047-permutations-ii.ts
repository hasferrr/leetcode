function permuteUnique(nums: number[]): number[][] {
  const result = []
  const dfs = (index: Set<number>, pm: number[]): void => {
    if (pm.length === nums.length) {
      result.push([...pm])
      return
    }
    const loopVisited = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
      if (loopVisited.has(nums[i])) {
        continue
      }
      if (index.has(i)) {
        continue
      }
      loopVisited.add(nums[i])
      pm.push(nums[i])
      index.add(i)
      dfs(index, pm)
      pm.pop()
      index.delete(i)
    }
  }
  dfs(new Set(), [])
  return result
}
