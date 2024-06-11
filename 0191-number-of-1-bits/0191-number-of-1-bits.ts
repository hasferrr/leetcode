function hammingWeight(n: number): number {
  let count = 0
  while (n > 0) {
    // take the right most ones
    n = n & (n - 1)
    count++
  }
  return count
}

// function hammingWeight(n: number): number {
//   let count = 0
//   while (n > 0) {
//     count += n & 1
//     n = n >> 1
//   }
//   return count
// }
