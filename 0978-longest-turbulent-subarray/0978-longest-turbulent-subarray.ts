function maxTurbulenceSize(arr: number[]): number {
  let max = 1
  let currMax = 1

  //  1 is increasing number
  // -1 is decreasing number
  //  0 is same number
  let prevComparison: -1 | 0 | 1 = 0

  for (let i = 1; i < arr.length; i++) {
    const prevVal = arr[i - 1]
    const currVal = arr[i]

    const comparison: -1 | 0 | 1 = currVal > prevVal
      ? 1
      : (currVal < prevVal ? -1 : 0)

    if (comparison !== prevComparison && comparison !== 0) {
      currMax++
    } else if (comparison === 0) {
      currMax = 1
    } else {
      currMax = 2
    }
    prevComparison = comparison
    max = Math.max(max, currMax)
  }
  return max
}
