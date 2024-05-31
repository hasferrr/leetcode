function lastStoneWeight(stones: number[]): number {
  maxHeapify()

  function maxHeapify() {
    for (let i = Math.floor((stones.length - 1) / 2); i > -1; i--) {
      shiftDown(i)
    }
  }

  function shiftDown(i: number): void {
    const icl = 2 * i + 1
    const icr = 2 * i + 2

    if (icl >= stones.length && icr >= stones.length) {
      return
    }

    let childIndex: number

    if (icr >= stones.length) {
      childIndex = icl
    } else {
      childIndex = stones[icl] > stones[icr] ? icl : icr
    }

    if (stones[i] < stones[childIndex]) {
      swap(i, childIndex)
      return shiftDown(childIndex)
    }
  }

  function shiftUp(i: number): void {
    if (i === 0) {
      return
    }
    const parentIndex = Math.floor((i - 1) / 2)
    if (stones[i] > stones[parentIndex]) {
      swap(i, parentIndex)
      return shiftUp(parentIndex)
    }
  }

  function swap(index1: number, index2: number): void {
    [stones[index1], stones[index2]] = [stones[index2], stones[index1]]
  }

  function pop(): number {
    const max = stones[0]
    swap(0, stones.length - 1)
    stones.pop()
    shiftDown(0)
    return max
  }

  function insert(val: number): void {
    stones.push(val)
    shiftUp(stones.length - 1)
  }

  while (stones.length > 1) {
    const stone1 = pop()
    const stone2 = pop()
    const result = Math.abs(stone1 - stone2)
    if (result !== 0) insert(result)
  }
  return stones.length === 1 ? stones[0] : 0
}
