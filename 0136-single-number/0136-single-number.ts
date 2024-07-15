function singleNumber(nums: number[]): number {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}


function singleNumber_HashSet(nums: number[]): number {
  const set = new Set<number>()
  for (const n of nums) {
    if (!set.has(n)) set.add(n)
    else set.delete(n)
  }
  for (const val of set) {
    return val
  }
}
