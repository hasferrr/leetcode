const containsDuplicate = (nums: number[]): boolean => {
  const history = new Set<number>([])
  let i = 0
  while (i < nums.length) {
    // if the number is in the Set
    if (history.has(nums[i])) {
      return true
    } else {
      history.add(nums[i])
    }
    i++
  }
  return false
}