function findComplement(num: number): number {
  const MAX = 2 ** 31
  let result = 0
  let count = 0
  while (num > 0) {
    const bit = num % 2
    num >>>= 1
    const binary = bit === 1 ? 0 : MAX
    result |= binary
    result >>>= 1
    count++
  }
  result >>>= 31 - count
  return result
}
