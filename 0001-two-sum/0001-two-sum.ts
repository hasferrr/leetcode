function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i]
    if (map.has(val)) {
      return [i, map.get(val)]
    }
    map.set(nums[i], i)
  }
}
