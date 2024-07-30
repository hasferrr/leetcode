function canPartition(nums: number[]): boolean {
  const halfTotal = nums.reduce((acc, n) => acc + n, 0) / 2
  if ((halfTotal * 2) % 2 !== 0) return false

  let dp = new Set<number>()
  dp.add(0)

  for (const n of nums) {
    const newDp = new Set<number>()
    for (const val of dp) {
      if (n + val === halfTotal) return true
      newDp.add(val)
      newDp.add(n + val)
    }
    dp = newDp
  }
  return false
}


// Memoization
function canPartition_memo(nums: number[]): boolean {
  const halfTotal = nums.reduce((acc, n) => acc + n, 0) / 2
  if (halfTotal * 2 % 2 !== 0) return false

  const memo: Set<number>[] = Array(nums.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Set()
  }

  function partition(i: number, sum: number): boolean {
    if (sum === halfTotal) return true
    if (sum > halfTotal) return false
    if (i === nums.length) return false
    if (memo[i].has(sum)) return false

    if (partition(i + 1, sum + nums[i])) return true
    if (partition(i + 1, sum)) return true

    memo[i].add(sum)
    return false
  }

  return partition(0, 0)
}
