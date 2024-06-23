function subarraySum(nums: number[], k: number): number {
  const prefixes = new Map<number, number>()
  let result = 0
  let lastPrefix = 0
  for (const n of nums) {
    lastPrefix += n
    if (prefixes.has(lastPrefix - k)) {
      result += prefixes.get(lastPrefix - k)
    }
    if (lastPrefix === k) {
      result++
    }
    if (!prefixes.has(lastPrefix)) {
      prefixes.set(lastPrefix, 0)
    }
    prefixes.set(lastPrefix, prefixes.get(lastPrefix) + 1)
  }
  return result
}
