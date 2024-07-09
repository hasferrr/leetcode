class Heap {
  heap: number[]

  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
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
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  insert(n: number) {
    this.heap.push(n)
    this.shiftUp(this.heap.length - 1)
  }

  top(): number {
    return this.heap[0]
  }

  pop() {
    this.swap(0, this.heap.length - 1)
    const top = this.heap.pop()
    this.shiftDown(0)
    return top
  }

  shiftUp(i: number) { }

  shiftDown(i: number) { }
}

class MaxHeap extends Heap {
  constructor() {
    super()
  }

  shiftUp(i: number) {
    if (i === 0) return
    const p = this.getParentIndex(i)
    if (this.heap[i] > this.heap[p]) {
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
    } else if (this.heap[child.right] > this.heap[child.left]) {
      c = child.right
    } else {
      c = child.left
    }

    if (this.heap[c] > this.heap[i]) {
      this.swap(c, i)
      return this.shiftDown(c)
    }
  }
}

class MinHeap extends Heap {
  constructor() {
    super()
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


// Two Heaps!

// Time Complexity:
// - O(log n) for addNum()
// - O(1)     for findMedian()
// Space Complexity:
// - O(n)
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
    
    // All values on the small heap should <= values on the large heap
    if (num <= this.smallMaxHeap.top()) {
      this.smallMaxHeap.insert(num)
    } else {
      this.largeMinHeap.insert(num)
    }

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
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
