function longestConsecutive(nums: number[]): number {
  const set = new Set<number>()
  for (const n of nums) {
    set.add(n)
  }
  let maxResult = 0
  for (const n of set) {
    if (set.has(n - 1)) {
      continue
    }
    let curr = n + 1
    let currResult = 1
    while (set.has(curr)) {
      currResult++
      curr++
    }
    maxResult = Math.max(maxResult, currResult)
  }
  return maxResult
}
