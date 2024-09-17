function myAtoi(s: string): number {
  let i = 0
  let res = 0
  let negative = false

  // leading " "
  while (i < s.length && s.charCodeAt(i) === 32) {
    i++
  }

  // "-" or "+"
  if (s.charCodeAt(i) === 45) {
    negative = true
    i++
  } else if (s.charCodeAt(i) === 43) {
    i++
  }

  // leading zeros
  while (i < s.length && s.charCodeAt(i) === 48) {
    i++
  }

  while (i < s.length) {
    const code = s.charCodeAt(i)
    if (code < 48 || code > 57) {
      break
    }
    res = res * 10 + code - 48
    i++
  }

  res = negative ? -res : res
  res = Math.max(Math.min(res, 2147483647), -2147483648)
  return res
}
