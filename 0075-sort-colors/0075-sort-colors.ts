function sortColors(nums: number[]): void {
  // partitioning (quicksort)
  const swap = (i1: number, i2: number): void => {
    [nums[i1], nums[i2]] = [nums[i2], nums[i1]]
  }

  const pivot = 1
  let i = 0
  let left = 0
  let right = nums.length - 1
  while (i <= right) {
    if (nums[i] < pivot) {
      swap(left, i)
      left++
      i++
    } else if (nums[i] > pivot) {
      swap(right, i)
      right--
    } else {
      i++
    }
  }
}

// function sortColors(nums: number[]): void {
//   // Bucket sort
//   const map = [0, 0, 0]

//   let i = 0
//   while (i < nums.length) {
//     map[nums[i]] = map[nums[i]] + 1
//     i++
//   }

//   i = 0
//   let indexNums = 0
//   while (i < map.length) {
//     let j = 0
//     while (j < map[i]) {
//       nums[indexNums] = i
//       indexNums++
//       j++
//     }
//     i++
//   }
// }
