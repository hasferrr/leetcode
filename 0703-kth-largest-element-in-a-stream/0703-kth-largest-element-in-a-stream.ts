class KthLargest {
  heap: number[]
  k: number
  constructor(k: number, nums: number[]) {
    // 0-Based Indexing Min Heap
    this.heap = []
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

  getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  getChildrenIndex(i: number): [number, number] {
    return [2 * i + 1, 2 * i + 2]
  }

  reorderUp(i: number): void {
    if (i === 0) {
      return
    }
    const parentIndex = this.getParentIndex(i)
    if (this.heap[i] < this.heap[parentIndex]) {
      this.swap(i, parentIndex)
      this.reorderUp(parentIndex)
    }
  }

  swap(i1: number, i2: number): void {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  add(val: number): number {
    if (this.heap.length < this.k) {
      this.insert(val)
      return this.heap[0]
    }
    if (val > this.heap[0]) {
      this.heap[0] = val
      this.reorderDown(0)
    }
    return this.heap[0]
  }

  reorderDown(i: number): void {
    const [l, r] = this.getChildrenIndex(i)
    const hasLeftChild = l < this.heap.length
    const hasRightChild = r < this.heap.length
    if (!hasLeftChild && !hasRightChild) {
      return
    }
    let childIndex
    if (!hasRightChild) {
      childIndex = l
    } else {
      const left = this.heap[l]
      const right = this.heap[r]
      childIndex = left < right ? l : r
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