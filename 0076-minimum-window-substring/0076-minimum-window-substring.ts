function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return ""
  }

  if (t.length === 1) {
    return s.includes(t) ? t : ""
  }

  let size = t.length
  const wordMap = new Map<string, number>()
  for (const char of t) {
    wordMap.set(char, (wordMap.get(char) ?? 0) + 1)
  }

  let index: [number, number] = [0, Infinity]
  let l = 0
  let r = 0
  while (!wordMap.has(s[l]) && l < s.length) {
    l++
    r++
  }

  while (r < s.length) {
    if (wordMap.has(s[r])) {
      if (wordMap.get(s[r]) > 0) {
        size--
      }
      wordMap.set(s[r], wordMap.get(s[r]) - 1)
    }
    while (size === 0) {
      if (r - l < index[1] - index[0]) {
        index = [l, r]
      }
      if (wordMap.get(s[l]) >= 0) {
        size++
      }
      wordMap.set(s[l], wordMap.get(s[l]) + 1)
      l++
      while (!wordMap.has(s[l])) {
        l++
      }
    }
    r++
  }

  return index[1] === Infinity
  ? ""
  : s.slice(index[0], index[1] + 1)
}
