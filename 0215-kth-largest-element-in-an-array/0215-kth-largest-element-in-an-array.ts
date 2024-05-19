function findKthLargest(nums: number[], k: number): number {
  const swap = (i1: number, i2: number) => {
    [nums[i2], nums[i1]] = [nums[i1], nums[i2]]
  }

  const medianOfThreePivot = (s: number, mid: number, e: number) => {
    if (nums[s] > nums[mid]) {
      swap(s, mid)
    }
    if (nums[mid] > nums[e]) {
      swap(mid, e)
    }
    if (nums[s] > nums[mid]) {
      swap(s, mid)
    }
    return nums[mid]
  }

  // three-way partitioning method
  const quickSelect = (s: number, e: number) => {
    // if selected array's length is only 1
    if (s === e) {
      return nums[s]
    }

    const mid = Math.floor((s + e) / 2)
    const pivot = medianOfThreePivot(s, mid, e)

    let left = s
    let right = e
    let i = s
    while (i <= right) {
      if (nums[i] < pivot) {
        swap(i, left)
        left++
        i++
      } else if (nums[i] > pivot) {
        swap(i, right)
        right--
      } else {
        i++
      }
    }
    const kth = nums.length - k

    if (kth < left) return quickSelect(s, left - 1)
    if (kth > right) return quickSelect(right + 1, e)

    return pivot
  }

  return quickSelect(0, nums.length - 1)
}
