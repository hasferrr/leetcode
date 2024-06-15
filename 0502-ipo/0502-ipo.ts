interface ProfitAndCapital {
  profit: number,
  capital: number,
}

/**
* Zero indexed heap
* Used for heapsort the profit and capital
* The top of the heap is the most minimum Capital
*/
class Heap {
  heap: ProfitAndCapital[]

  constructor(profits: number[], capital: number[]) {
    const len = profits.length

    this.heap = Array(len)

    for (let i = len - 1; i >= 0; i--) {
      this.heap[i] = {
        profit: profits[i],
        capital: capital[i],
      }
      this.shiftDown(i)
    }
  }

  heapSort() {
    const sorted: ProfitAndCapital[] = []
    while (true) {
      const top = this.pop()
      if (!top) break
      sorted.push(top)
    }
    return sorted
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

  pop() {
    this.swap(0, this.heap.length - 1)
    const top = this.heap.pop()
    this.shiftDown(0)
    return top
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
    } else if (this.heap[child.right].capital < this.heap[child.left].capital) {
      c = child.right
    } else {
      c = child.left
    }

    if (this.heap[c].capital < this.heap[i].capital) {
      this.swap(c, i)
      return this.shiftDown(c)
    }
  }
}

class MaxHeap {
  heap: number[]

  constructor() {
    this.heap = []
  }

  get length() {
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

  pop() {
    this.swap(0, this.heap.length - 1)
    const top = this.heap.pop()
    this.shiftDown(0)
    return top
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

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  const projects: ProfitAndCapital[] = new Heap(profits, capital).heapSort()
  const profitMaxHeap = new MaxHeap()

  let i = 0
  while (k > 0) {
    // Insert profit to maxHeap while w >= its project's capital
    while (i < projects.length && w >= projects[i].capital) {
      profitMaxHeap.insert(projects[i].profit)
      i++
    }

    if (!profitMaxHeap.length) {
      break
    }

    // Consume a project
    const profit = profitMaxHeap.pop()
    w += profit
    k--
  }

  return w
}
