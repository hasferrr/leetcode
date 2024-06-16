function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  if (threshold === 0) {
    return arr.length + 1 - k
  }
  let count = 0
  let sum = 0
  let L = 0
  let R = k - 1
  for (let i = 0; i < R; i++) {
    sum += arr[i]
  }
  while (R < arr.length) {
    sum += arr[R]
    if (sum / k >= threshold) {
      count++
    }
    sum -= arr[L]
    L++
    R++
  }
  return count
}
