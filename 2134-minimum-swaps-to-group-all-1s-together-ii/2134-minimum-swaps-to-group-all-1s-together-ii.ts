function minSwaps(nums: number[]): number {
  let ones = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) ones++
  }
  if (ones === 0) return 0

  let maxOnes = 0
  let currOnes = 0
  for (let i = 0; i < ones; i++) {
    if (nums[i] === 1) currOnes++
    nums.push(nums[i])
  }
  maxOnes = currOnes

  for (let i = ones; i < nums.length; i++) {
    if (nums[i] === 1) currOnes++
    if (nums[i - ones] === 1) currOnes--
    maxOnes = Math.max(maxOnes, currOnes)
  }

  return ones - maxOnes
}
