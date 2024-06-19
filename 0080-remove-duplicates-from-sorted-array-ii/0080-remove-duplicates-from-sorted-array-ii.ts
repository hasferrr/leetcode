// O(n)
function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1
  let L = 1
  let R = 1
  let count = 1
  while (R < nums.length) {
    if (nums[R] === nums[R - 1]) {
      count++
    } else {
      count = 1
    }
    nums[L] = nums[R]
    R++
    if (count <= 2) {
      L++
    }
  }
  return L
}


// O(2n)
// function removeDuplicates(nums: number[]): number {
//   let L = 0
//   let R = 0
//   let count = -1
//   let value = -1
//   while (R < nums.length) {
//     value = nums[R]
//     count = 1
//     R++
//     while (nums[R] === value) {
//       count++
//       R++
//     }
//     if (count > 2) {
//       count = 2
//     }
//     while (count) {
//       nums[L] = value
//       count--
//       L++
//     }
//   }
//   return L
// }
