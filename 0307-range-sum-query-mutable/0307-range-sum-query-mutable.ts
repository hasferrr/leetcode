class SegmentTree {
  left: SegmentTree | null
  right: SegmentTree | null
  sum: number
  L: number
  R: number
  constructor(L: number, R: number, nums: number[]) {
    this.left = null
    this.right = null
    this.sum = 0
    this.L = L
    this.R = R
    this.build(L, R, nums)
  }

  // O(n)
  private build(L: number, R: number, nums: number[]) {
    if (L === R) {
      this.sum = nums[L]
      return
    }
    const M = Math.floor((L + R) / 2)
    this.left = new SegmentTree(L, M, nums)
    this.right = new SegmentTree(M + 1, R, nums)
    this.sum = this.left.sum + this.right.sum
  }

  // O(log n)
  update(index: number, val: number): void {
    if (this.L === this.R) {
      this.sum = val
      return
    }

    const M = Math.floor((this.L + this.R) / 2)
    if (index <= M) {
      this.left.update(index, val)
    } else {
      this.right.update(index, val)
    }

    this.sum = this.left.sum + this.right.sum
  }

  // O(log n)
  rangeQuery(L: number, R: number): number {
    if (this.L === L && this.R === R) {
      return this.sum
    }

    const M = Math.floor((this.L + this.R) / 2)
    if (R <= M) {
      return this.left.rangeQuery(L, R)
    } else if (L > M) {
      return this.right.rangeQuery(L, R)
    } else {
      return this.left.rangeQuery(L, M) + this.right.rangeQuery(M + 1, R)
    }
  }
}

class NumArray {
  nums: number[]
  root: SegmentTree
  constructor(nums: number[]) {
    this.nums = nums
    this.root = new SegmentTree(0, nums.length - 1, nums)
  }

  update(index: number, val: number): void {
    this.root.update(index, val)
    this.nums[index] = val
  }

  sumRange(left: number, right: number): number {
    return this.root.rangeQuery(left, right)
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */