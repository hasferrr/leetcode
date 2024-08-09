function countSubstrings(s: string): number {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let l = i
    let r = i
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r]) break
      count++
      l--
      r++
    }
    l = i
    r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r]) break
      count++
      l--
      r++
    }
  }
  return count
}
