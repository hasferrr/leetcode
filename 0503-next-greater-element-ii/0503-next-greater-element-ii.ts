function nextGreaterElements(nums: number[]): number[] {
  const result = Array(nums.length).fill(-1)
  const stack = []
  const indexList = []
  const length2x = 2 * nums.length
  for (let _i = 0; _i < length2x; _i++) {
    const i = _i % nums.length
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      stack.pop()
      const index = indexList.pop()!
      result[index] = nums[i]
    }
    if (_i < nums.length) {
      stack.push(nums[i])
      indexList.push(i)
    }
  }
  return result
}
