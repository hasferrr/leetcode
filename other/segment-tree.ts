// Segment Tree for Range Maximum Number Query Mutable

class SegmentTree {
  left: SegmentTree | null
  right: SegmentTree | null
  start: number
  end: number
  max: number
  constructor(start: number, end: number, arr: number[]) {
    this.left = null
    this.right = null
    this.start = start
    this.end = end
    this.max = -1
    this.build(start, end, arr)
  }

  // O(n)
  private build(start: number, end: number, arr: number[]) {
    if (this.start === this.end) {
      this.max = arr[start]
      return
    }
    const mid = Math.floor((start + end) / 2)
    this.left = new SegmentTree(start, mid, arr)
    this.right = new SegmentTree(mid + 1, end, arr)
    this.max = Math.max(this.left.max, this.right.max)
  }

  // O(log n)
  update(index: number, value: number) {
    if (this.start === this.end) {
      this.max = value
      return
    }
    const mid = Math.floor((this.start + this.end) / 2)
    if (index <= mid) {
      this.left.update(index, value)
    } else {
      this.right.update(index, value)
    }
    this.max = Math.max(this.left.max, this.right.max)
  }

  // O(log n)
  queryRange(queryStart: number, queryEnd: number): number {
    if (queryStart === this.start && queryEnd === this.end) {
      return this.max
    }
    if (this.start === this.end) {
      return this.max
    }
    const mid = Math.floor((this.start + this.end) / 2)
    if (queryEnd <= mid) {
      return this.left.queryRange(queryStart, queryEnd)
    } else if (queryStart > mid) {
      return this.right.queryRange(queryStart, queryEnd)
    } else {
      return Math.max(
        this.left.queryRange(queryStart, mid),
        this.right.queryRange(mid + 1, queryEnd),
      )
    }
  }
}

// Examples

const arr = [4,65,6,4444,6,82,2,61,7,43,6,8,900,3,5,20,47,65,16,38,17]
const len = arr.length

const TREE = new SegmentTree(0, len - 1, arr)

console.log('all:', TREE.queryRange(0, len - 1)) // 4444
console.log('4-6:', TREE.queryRange(4, 6))       // 82

TREE.update(3, 0)
console.log('all:', TREE.queryRange(0, len - 1)) // 900
