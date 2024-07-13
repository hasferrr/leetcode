function permute(nums: number[]): number[][] {
  const result = []
  const dfs = (set: Set<number>, pm: number[]): void => {
    if (pm.length === nums.length) {
      result.push([...pm])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue
      }
      pm.push(nums[i])
      set.add(nums[i])
      dfs(set, pm)
      pm.pop()
      set.delete(nums[i])
    }
  }
  dfs(new Set(), [])
  return result
}
