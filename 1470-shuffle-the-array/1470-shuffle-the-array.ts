function shuffle(nums: number[], n: number): number[] {
  const ans = Array(nums.length)
  let index = 0
  let ii = 0
  let nn = n
  let nTurn = false
  while (index < nums.length) {
    if (!nTurn) {
      ans[index] = nums[ii]
      ii++
    } else {
      ans[index] = nums[nn]
      nn++
    }
    index++
    nTurn = !nTurn
  }
  return ans
}
