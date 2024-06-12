function isPalindrome(s: string): boolean {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    const str1 = s[l].toLowerCase()
    const str2 = s[r].toLowerCase()
    if (isNaN(parseInt(str1)) && str1 === s[l].toUpperCase()) {
      l++
      continue
    }
    if (isNaN(parseInt(str2)) && str2 === s[r].toUpperCase()) {
      r--
      continue
    }
    if (str1 !== str2) return false
    l++
    r--
  }
  return true
}
