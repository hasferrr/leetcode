function maxProduct(nums: number[]): number {
  let globalMax = nums[0]
  let currMax = nums[0]
  let currMin = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const tempMax = currMax
    currMax = Math.max(currMax * nums[i], currMin * nums[i], nums[i])
    currMin = Math.min(tempMax * nums[i], currMin * nums[i], nums[i])
    globalMax = Math.max(globalMax, currMax)
  }
  return globalMax
}


// Memoization
function maxProduct_memo(nums: number[]): number {
  const memoT: Map<number, number>[] = Array(nums.length)
  const memoF: Map<number, number>[] = Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    memoT[i] = new Map()
    memoF[i] = new Map()
  }
  const prod = (i: number, sum: number, flag: boolean): number => {
    if (i === nums.length) {
      if (!flag) return -Infinity
      return sum
    }
    if (flag && memoT[i].has(sum)) return memoT[i].get(sum)
    if (!flag && memoF[i].has(sum)) return memoF[i].get(sum)
    const memo = flag ? memoT : memoF
    memo[i].set(sum, Math.max(
      prod(i + 1, sum * nums[i], true),
      flag ? sum : prod(i + 1, sum, false),
    ))
    return memo[i].get(sum)
  }
  return prod(0, 1, false)
}


// BF
function maxProduct_bf(nums: number[]): number {
  const prod = (i: number, sum: number, flag: boolean) => {
    if (i === nums.length) {
      if (!flag) return -Infinity
      return sum
    }
    return Math.max(
      prod(i + 1, sum * nums[i], true),
      flag ? sum : prod(i + 1, sum, false),
    )
  }
  return prod(0, 1, false)
}
