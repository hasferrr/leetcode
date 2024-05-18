function swap(nums: number[], index1: number, index2: number) {
  [nums[index2], nums[index1]] = [nums[index1], nums[index2]]
}

function medianOfThreePivot(nums: number[], start: number, mid: number, end: number) {
  if (nums[start] > nums[mid]) {
    swap(nums, start, mid)
  }
  if (nums[mid] > nums[end]) {
    swap(nums, mid, end)
  }
  if (nums[start] > nums[mid]) {
    swap(nums, start, mid)
  }
  return nums[mid]
}

function quickSort(nums: number[], start: number, end: number): void {
  if (start === end + 1) {
    return
  }
  const mid = Math.floor((start + end) / 2)
  const pivot = medianOfThreePivot(nums, start, mid, end)
  // const pivot = nums[end]
  swap(nums, mid, end)

  // sort rn
  let toSwap = start
  let i = start
  while (i < end) {
    if (nums[i] < pivot) {
      swap(nums, toSwap, i)
      toSwap++
    }
    i++
  }
  swap(nums, toSwap, end)

  // sort left
  quickSort(nums, start, toSwap - 1)

  // sort right
  quickSort(nums, toSwap + 1, end)
}

function sortArray(nums: number[]): number[] {
  if (!nums.length) {
    return nums
  }
  quickSort(nums, 0, nums.length - 1)
  return nums
}

let arr
arr = sortArray([])
console.log(arr)

arr = sortArray([1])
console.log(arr)

arr = sortArray([1, 2])
console.log(arr)

arr = sortArray([2, 1])
console.log(arr)

arr = sortArray([1, 2, 3, 4, 5, 6, 7, 8])
console.log(arr)

arr = sortArray([5, 20, 3, -1, -3, 0, 4, 1, 29, -100, 123, -213, 2, -2, 42, 4139, 943, 203])
console.log(arr)
