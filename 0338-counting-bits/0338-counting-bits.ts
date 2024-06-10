function countBits(n: number): number[] {
  const result = []
  let m = 0
  while (m <= n) {
    let ones = 0
    let k = m
    while (k !== 0) {
      ones += k & 1
      k = k >> 1
    }
    result.push(ones)
    m++
  }
  return result
}
