function sortArray(nums: number[]): number[] {
  // insertion sort
  let i = 1
  let j = i - 1

  while (i !== nums.length) {
    while (j >= 0 && nums[j + 1] < nums[j]) {
      // swap value of j to j-1
      const temp = nums[j]
      nums[j] = nums[j + 1]
      nums[j + 1] = temp
      j--
    }
    i++
    j = i - 1
  }

  return nums
}
