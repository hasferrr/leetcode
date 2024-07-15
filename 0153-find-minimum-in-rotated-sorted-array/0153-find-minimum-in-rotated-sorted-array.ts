function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  
  // O(log n)
  while (true) {
    const mid = Math.floor((left + right) / 2)

    // sorted and not rotated
    if (nums[left] < nums[right]) {
      return nums[left]
    }

    // rotated
    if (nums[mid] > nums[left]) {
      left = mid + 1
    } else if (nums[mid] < nums[left]) {
      right = mid
    } else {
      return Math.min(nums[left], nums[right])
    }
  }
}
