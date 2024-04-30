function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) {
    return 1
  }

  let l = 1
  let r = 1
  while (true) {
    if (r === nums.length) {
      return l
    }
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r]
      l++
      r++
      continue
    }
    r++
  }
}