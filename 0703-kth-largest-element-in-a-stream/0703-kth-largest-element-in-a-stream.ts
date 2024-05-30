class KthLargest {
  heap: number[]
  k: number
  constructor(k: number, nums: number[]) {
    // 1-Based Indexing Min Heap
    this.heap = Array(1)
    this.k = k
    for (const n of nums) {
      this.add(n)
    }
  }

  insert(val: number): void {
    this.heap.push(val)
    let currentIndex = this.heap.length - 1
    this.reorderUp(currentIndex)
  }

  reorderUp(i: number): void {
    const parentIndex = Math.floor(i / 2)
    if (i === 1) {
      return
    }
    if (this.heap[i] < this.heap[parentIndex]) {
      this.swap(i, parentIndex)
      this.reorderUp(parentIndex)
    }
  }

  swap(i1: number, i2: number): void {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  add(val: number): number {
    if (this.heap.length - 1 < this.k) {
      this.insert(val)
      return this.heap[1]
    }
    if (val > this.heap[1]) {
      this.heap[1] = val
      this.reorderDown(1)
    }
    return this.heap[1]
  }

  reorderDown(i: number): void {
    const hasLeftChild = 2 * i < this.heap.length
    const hasRightChild = 2 * i + 1 < this.heap.length
    if (!hasLeftChild && !hasRightChild) {
      return
    }
    let childIndex
    if (!hasRightChild) {
      childIndex = 2 * i
    } else {
      const left = this.heap[2 * i]
      const right = this.heap[2 * i + 1]
      childIndex = left < right
        ? 2 * i
        : 2 * i + 1
    }
    if (this.heap[i] > this.heap[childIndex]) {
      this.swap(i, childIndex)
      return this.reorderDown(childIndex)
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
