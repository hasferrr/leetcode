function numDecodings(s: string): number {
  const memo: number[] = Array(s.length)
  const decode = (i: number): number => {
    if (i > s.length) return 0
    if (i === s.length) return 1
    if (memo[i] !== undefined) return memo[i]
    if (s[i] === "0") memo[i] = 0
    else if (s[i] === "1") memo[i] = decode(i + 1) + decode(i + 2)
    else if (s[i] === "2") memo[i] = i + 1 < s.length && Number(s[i + 1]) <= 6
      ? decode(i + 1) + decode(i + 2)
      : decode(i + 1)
    else memo[i] = decode(i + 1)
    return memo[i]
  }
  return decode(0)
}
