function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>()
  let i = 0 - arr2.length
  for (const n of arr2) {
    map.set(n, i)
    i++
  }
  quickSort(0, arr1.length - 1)
  return arr1

  function quickSort(s: number, e: number) {
    if (s >= e) {
      return
    }
    const mid = Math.trunc((s + e) / 2)
    // const pivot = arr1[e]
    const pivot = medianOfThreePivot(s, mid, e)
    let iToSwap = s
    let i = s
    while (i < e) {
      if (isLessOrEqualThan(arr1[i], pivot)) {
        swap(i, iToSwap)
        iToSwap++
      }
      i++
    }
    swap(e, iToSwap)
    const pivotPosition = iToSwap
    quickSort(s, pivotPosition - 1)
    quickSort(pivotPosition + 1, e)
  }

  function isLessOrEqualThan(a: number, b: number) {
    if (map.has(a)) a = map.get(a)
    if (map.has(b)) b = map.get(b)
    return a <= b
  }

  function medianOfThreePivot(start: number, mid: number, end: number) {
    if (arr1[start] > arr1[mid]) {
      swap(start, mid)
    }
    if (arr1[mid] > arr1[end]) {
      swap(mid, end)
    }
    if (arr1[start] > arr1[mid]) {
      swap(start, mid)
    }
    swap(mid, end)
    return arr1[end]
  }

  function swap(i1: number, i2: number) {
    [arr1[i1], arr1[i2]] = [arr1[i2], arr1[i1]]
  }
}

// function relativeSortArray(arr1: number[], arr2: number[]): number[] {
//   const map = new Map<number, number>()
//   let i = 0 - arr2.length
//   for (const n of arr2) {
//     map.set(n, i)
//     i++
//   }
//   arr1.sort((a, b) => {
//     if (map.has(a)) {
//       a = map.get(a)
//     }
//     if (map.has(b)) {
//       b = map.get(b)
//     }
//     return a - b
//   })
//   return arr1
// }
