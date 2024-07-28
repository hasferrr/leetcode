function replaceElements(arr: number[]): number[] {
  let maximum = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = arr[i]
    arr[i] = maximum
    maximum = Math.max(maximum, temp)
  }
  return arr
}
