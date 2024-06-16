function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>()
  let max = 0
  let L = 0
  let R = 0

  while (R < s.length) {
    if (!set.has(s[R])) {
      set.add(s[R])
      max = Math.max(max, R - L + 1)
      R++
      continue
    }
    while (set.has(s[R])) {
      set.delete(s[L])
      L++
    }
    set.add(s[R])
    R++
  }

  return max
}
