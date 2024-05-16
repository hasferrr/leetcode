function merge(numsL: number[], numsR: number[]): number[] {
  const result: number[] = []
  let l = 0
  let r = 0
  while (true) {
    if (l === numsL.length) {
      while (r !== numsR.length) {
        result.push(numsR[r])
        r++
      }
      return result
    }
    if (r === numsR.length) {
      while (l !== numsL.length) {
        result.push(numsL[l])
        l++
      }
      return result
    }
    if (numsL[l] <= numsR[r]) {
      result.push(numsL[l])
      l++
    } else {
      result.push(numsR[r])
      r++
    }
  }
}

function sortArray(nums: number[]): number[] {
  // merge sort
  if (nums.length <= 1) {
    return nums
  }
  const mid = Math.floor(nums.length / 2)
  return merge(
    sortArray(nums.slice(0, mid)),
    sortArray(nums.slice(mid, nums.length)),
  )
}

let merged: number[]
merged = merge([], []); console.log(merged)
merged = merge([1], []); console.log(merged)
merged = merge([], [2]); console.log(merged)
merged = merge([1], [2]); console.log(merged)
merged = merge([5], [6]); console.log(merged)
merged = merge([3, 5, 7, 9], [2, 4, 6, 8]); console.log(merged)

const sorted = sortArray([5, 20, 3, -1, -3, 0, 4, 1, 29, -100, 123, -213, 42, 4139, 943, 203])
console.log(sorted)
