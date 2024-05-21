function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
      continue
    }
    if (target > nums[mid]) {
      left = mid + 1
      continue
    }
    return mid   
  }
  return -1
}
