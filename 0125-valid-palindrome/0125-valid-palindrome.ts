function isPalindrome(s: string): boolean {
  const isLowerCase = (c) => c.charCodeAt() >= 97 && c.charCodeAt() <= 122
  const isNumeric = (c) => c.charCodeAt() >= 48 && c.charCodeAt() <= 57

  let l = 0
  let r = s.length - 1

  while (l < r) {
    const str1 = s[l].toLowerCase()
    const str2 = s[r].toLowerCase()
    if (!isLowerCase(str1) && !isNumeric(str1)) {
      l++
      continue
    }
    if (!isLowerCase(str2) && !isNumeric(str2)) {
      r--
      continue
    }
    if (str1 !== str2) return false
    l++
    r--
  }
  return true
}
