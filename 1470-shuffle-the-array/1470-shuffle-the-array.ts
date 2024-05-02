function shuffle(nums: number[], n: number): number[] {
  const ans = Array(nums.length)
  let index = 0
  let l = 0
  let r = n
  while (index < nums.length) {
    ans[index] = nums[l]
    ans[index + 1] = nums[r]
    l++
    r++
    index += 2
  }
  return ans
}
