class NumArray {
  prefixSum: number[]

  constructor(nums: number[]) {
    this.prefixSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
      const sum = this.prefixSum[this.prefixSum.length - 1] + nums[i]
      this.prefixSum.push(sum)
    }
  }

  sumRange(left: number, right: number): number {
    return left === 0
      ? this.prefixSum[right]
      : this.prefixSum[right] - this.prefixSum[left - 1]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
