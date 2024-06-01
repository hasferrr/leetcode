function kClosest(points: number[][], k: number): number[][] { 
  const toOrigin = (p: number[]) => p[0] ** 2 + p[1] ** 2

  const swap = (i1: number, i2: number) => {
    [points[i1], points[i2]] = [points[i2], points[i1]]
  }

  const shiftUp = (i: number) => {
    if (i === 0) return
    
    const parentIndex = Math.floor((i - 1) / 2)
    if (toOrigin(points[i]) < toOrigin(points[parentIndex])) {
      swap(i, parentIndex)
      return shiftUp(parentIndex)
    }
  }

  const shiftDown = (i: number) => {
    const childL = 2 * i + 1
    const childR = 2 * i + 2

    if (childL >= points.length && childR >= points.length) {
      return
    }

    let childIndex = childL

    if (childR < points.length && toOrigin(points[childL]) > toOrigin(points[childR])) {
      childIndex =  childR
    }

    if (toOrigin(points[i]) > toOrigin(points[childIndex])) {
      swap(i, childIndex)
      return shiftDown(childIndex)
    }
  }

  const heapifyByDistanceToOrigin = () => {
    for (let i = Math.floor((points.length - 1) / 2); i > -1; i--) {
      shiftDown(i)
    }
  }

  const pop = (): number[] => {
    const [x, y] = points[0]
    swap(0, points.length - 1)
    points.pop()
    shiftDown(0)
    return [x, y]
  }

  const main = () => {
    heapifyByDistanceToOrigin()
    const result: number[][] = []
    for (; k > 0; k--) {
      result.push(pop())
    }
    return result
  }

  return main()
}
