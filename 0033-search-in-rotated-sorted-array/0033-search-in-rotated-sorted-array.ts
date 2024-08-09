function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m

    // pivot is on the left
    if (nums[m] < nums[l]) {
      // target smaller
      if (target < nums[m]) {
        r = m - 1

        // target larger
      } else if (target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
      continue
    }

    // pivot is on the right
    // target larger
    if (target > nums[m]) {
      l = m + 1

      // target smaller
    } else if (target >= nums[l]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
}
