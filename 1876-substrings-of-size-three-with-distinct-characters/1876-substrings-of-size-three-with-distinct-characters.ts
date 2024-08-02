function countGoodSubstrings(s: string): number {
  if (s.length < 3) return 0
  const set = new Set<string>()
  let result = 0
  let l = 0
  let r = 0
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l])
      l++
    }
    set.add(s[r])
    r++
    if (r - l === 3) {
      result++
      set.delete(s[l])
      l++
    }
  }
  return result
}
