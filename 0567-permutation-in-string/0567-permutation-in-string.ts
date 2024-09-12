function checkInclusion(s1: string, s2: string): boolean {
  const map = new Map<string, number>()
  for (const c of s1) {
    map.set(c, (map.get(c) ?? 0) + 1)
  }
  let total = s1.length
  let l = 0
  let r = 0
  while (r < s2.length) {
    if (r - l === s1.length) {
      const charL = s2[l]
      if (map.has(charL)) {
        if (map.get(charL) >= 0) {
          total++
        }
        map.set(charL, map.get(charL) + 1)
      }
      l++
    }
    const charR = s2[r]
    if (map.has(charR)) {
      map.set(charR, map.get(charR) - 1)
      if (map.get(charR) >= 0) {
        total--
      }
      if (total === 0) {
        return true
      }
    }
    r++
  }
  return false
}
