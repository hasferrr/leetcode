function reverse(x: number): number {
  if (x === 0) {
    return 0
  }

  const MAX = 2147483647
  const MIN = -2147483648

  let y = Math.abs(x)
  const stack = []
  while (y > 0) {
    stack.push(y % 10)
    y = Math.trunc(y / 10)
  }

  let result = 0
  result += stack.pop()
  let z = 1
  while (stack.length) {
    result += stack.pop() * (10 ** z)
    if (result > MAX || result < MIN) return 0
    z++
  }

  return x > 0 ? result : -result
}
