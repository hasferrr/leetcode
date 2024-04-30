function removeElement(nums: number[], val: number): number {
  let p1 = 0
  let p2 = 0
  while (p2 !== nums.length) {
    if (nums[p2] === val) {
      p2 += 1
      continue
    }
    nums[p1] = nums[p2]
    p1 += 1
    p2 += 1
  }
  return p1
}