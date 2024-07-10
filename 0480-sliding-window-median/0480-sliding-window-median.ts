class MinHeap {
  heap: number[]
  indexMap: Map<number, Set<number>>

  constructor() {
    this.heap = []
    this.indexMap = new Map()
  }

  size() {
    return this.heap.length
  }

  addToIndexMap(n: number, index: number) {
    if (this.indexMap.get(n) === undefined) {
      this.indexMap.set(n, new Set())
    }
    this.indexMap.get(n)!.add(index)
  }

  deleteFromIndexMap(n: number, index: number) {
    this.indexMap.get(n)?.delete(index)
  }

  getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  getChildrenIndex(i: number): { left: number, right: number } {
    return {
      left: 2 * i + 1,
      right: 2 * i + 2,
    }
  }

  swap(i1: number, i2: number) {
    const val1 = this.heap[i1]
    const val2 = this.heap[i2]
    this.deleteFromIndexMap(val1, i1)
    this.deleteFromIndexMap(val2, i2)
    this.addToIndexMap(val1, i2)
    this.addToIndexMap(val2, i1)
    this.heap[i1] = val2
    this.heap[i2] = val1
  }

  insert(n: number) {
    this.heap.push(n)
    this.addToIndexMap(n, this.heap.length - 1)
    this.shiftUp(this.heap.length - 1)
  }

  top(): number {
    return this.heap[0]
  }

  back(): number {
    return this.heap[this.heap.length - 1]
  }

  pop() {
    const lastIndex = this.heap.length - 1
    this.swap(0, lastIndex)
    const top = this.heap.pop()
    this.deleteFromIndexMap(top!, lastIndex)
    this.shiftDown(0)
    return top
  }

  popBack() {
    const lastIndex = this.heap.length - 1
    const back = this.heap.pop()
    this.deleteFromIndexMap(back!, lastIndex)
    return back
  }

  getFirstIndex(n: number): number | undefined {
    const iterator1 = this.indexMap.get(n)?.values()
    if (iterator1 === undefined) return undefined
    return iterator1.next().value
  }

  delete(n: number) {
    const index = this.getFirstIndex(n)
    if (index === undefined) {
      throw `there is no ${n} on the heap`
    }
    this.swap(index, this.heap.length - 1)
    this.popBack()
    this.shiftDown(index)
    this.shiftUp(index)
  }

  shiftUp(i: number) {
    if (i === 0) return
    const p = this.getParentIndex(i)
    if (this.heap[i] < this.heap[p]) {
      this.swap(i, p)
      this.shiftUp(p)
    }
  }

  shiftDown(i: number) {
    const child = this.getChildrenIndex(i)

    if (child.left >= this.heap.length && child.right >= this.heap.length) {
      return
    }

    let c: number

    if (child.right >= this.heap.length) {
      c = child.left
    } else if (child.left >= this.heap.length) {
      c = child.right
    } else if (this.heap[child.right] < this.heap[child.left]) {
      c = child.right
    } else {
      c = child.left
    }

    if (this.heap[c] < this.heap[i]) {
      this.swap(c, i)
      return this.shiftDown(c)
    }
  }
}

class MaxHeap extends MinHeap {
  constructor() {
    super()
  }

  insert(n: number) {
    super.insert(-n)
  }

  top(): number {
    return -super.top()
  }

  back(): number {
    return -super.back()
  }

  pop() {
    return -super.pop()!
  }

  popBack() {
    return -super.popBack()!
  }

  getFirstIndex(n: number) {
    return super.getFirstIndex(-n)
  }
}

// Find Median from Data Stream
// https://leetcode.com/problems/find-median-from-data-stream/description/
class MedianFinder {
  smallMaxHeap: MaxHeap
  largeMinHeap: MinHeap
  constructor() {
    this.smallMaxHeap = new MaxHeap()
    this.largeMinHeap = new MinHeap()
  }

  addNum(num: number): void {
    if (!this.smallMaxHeap.size() && !this.largeMinHeap.size()) {
      this.smallMaxHeap.insert(num)
      return
    }

    if (num <= this.smallMaxHeap.top()) {
      this.smallMaxHeap.insert(num)
    } else {
      this.largeMinHeap.insert(num)
    }

    this.rebalance()
  }

  rebalance() {
    // The max difference size of small and large heaps must be 1
    if (Math.abs(this.smallMaxHeap.size() - this.largeMinHeap.size()) !== 2) {
      return
    }

    // Move the root/top to the other heap
    if (this.smallMaxHeap.size() > this.largeMinHeap.size()) {
      const val = this.smallMaxHeap.pop()!
      this.largeMinHeap.insert(val)
    } else {
      const val = this.largeMinHeap.pop()!
      this.smallMaxHeap.insert(val)
    }
  }

  findMedian(): number {
    if (this.smallMaxHeap.size() === this.largeMinHeap.size()) {
      return (this.smallMaxHeap.top() + this.largeMinHeap.top()) / 2
    }
    if (this.smallMaxHeap.size() > this.largeMinHeap.size()) {
      return this.smallMaxHeap.top()
    }
    return this.largeMinHeap.top()
  }

  removeNum(n: number): void {
    if (this.smallMaxHeap.top() === n) {
      this.smallMaxHeap.pop()
    } else if (this.largeMinHeap.top() === n) {
      this.largeMinHeap.pop()
    } else if (n < this.smallMaxHeap.top()) {
      this.smallMaxHeap.delete(n)
    } else {
      this.largeMinHeap.delete(n)
    }
    this.rebalance()
  }
}

function medianSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const twoHeaps = new MedianFinder()

  for (let i = 0; i < k; i++) {
    twoHeaps.addNum(nums[i])
  }
  result.push(twoHeaps.findMedian())

  for (let i = k; i < nums.length; i++) {
    twoHeaps.removeNum(nums[i - k])
    twoHeaps.addNum(nums[i])
    result.push(twoHeaps.findMedian())
  }
  return result
}

// EXAMPLE: nums = [1,3,-1,-3,5,3,6,7], k = 3
// main()
// - For loop k times, insert to the heap
// - delete(1)
// - insert(-3)
// - delete(3)
//     if (3 not the priority aka not on the top/root of the heap)
//        -apply to correct heap
//        -get the index (3) on that heap
//        -swap to end array (heap)
//        -pop()
//        -reorder down the swapped number
//     else (3 on the top/root)
//        -just heap.pop() it
//     -After that, rebalance the tree!
// - insert(5)
// - delete(-1)
// - insert(3)
// - delete(-3)
// - insert(6)
