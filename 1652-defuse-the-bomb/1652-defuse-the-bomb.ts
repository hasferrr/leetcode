function decrypt(code: number[], k: number): number[] {
  if (k === 0) return Array(code.length).fill(0)
  const result = []
  for (let i = 0; i < code.length; i++) {
    let count = 0
    let k2 = Math.abs(k)
    for (let j = 0; j < k2; j++) {
      let m
      if (k > 0) {
        m = j + i + 1
        if (m >= code.length) m -= code.length
      } else {
        m = (j * -1) + i - 1
        if (m < 0) m += code.length
      }
      count += code[m]
    }
    result.push(count)
  }
  return result
}
