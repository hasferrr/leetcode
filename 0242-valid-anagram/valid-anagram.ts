function isAnagram(s: string, t: string): boolean {
  const theMap: { [key: string]: number } = {}
  let i = 0
  while (i < s.length) {
    const val = theMap[s[i]]
    if (!val) {
      theMap[s[i]] = 1
    } else {
      theMap[s[i]] = val + 1
    }
    i += 1
  }
  i = 0
  while (i < t.length) {
    const val = theMap[t[i]]
    if (!val || val < 0) {
      return false
    }
    theMap[t[i]] = val - 1
    i += 1
  }
  return !Object.values(theMap).reduce((prev, cur) => prev + cur)
}