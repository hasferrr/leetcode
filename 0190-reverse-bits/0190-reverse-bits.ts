function reverseBits(n: number): number {
  let result = 0

  for (let i = 0; i < 32; i++) {
    const m = n & 1
    result = result << 1
    if (m === 1) {
      result = result | 1
    }
    n = n >>> 1
  }

  // Convert the result to an unsigned 32-bit integer
  return result >>> 0
}
