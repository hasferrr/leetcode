function reverse(x: number): number {
  if (x === 0) {
    return 0
  }

  const MAX = 2147483647
  const MIN = -2147483648

  let result = 0
  let y = Math.abs(x)
  while (y > 0) {
    const pop = y % 10
    result = result * 10 + pop
    if (result > MAX || result < MIN) return 0
    y = Math.trunc(y / 10)
  }

  return x > 0 ? result : -result
}
