function swimInWater(grid: number[][]): number {
  const minHeap = new MinPriorityQueue({
    priority: (item: { 
      dest: [number, number]
      weight: number
    }) => item.weight
  })
  minHeap.enqueue({
    dest: [0, 0],
    weight: grid[0][0],
  })

  const shortest: number[][] = new Array(grid.length)
  for (let i = 0; i < shortest.length; i++) {
    shortest[i] = new Array(grid[0].length).fill(Infinity)
  }
  const DIRECTIONS = [
    [0,1], [1,0], [0,-1], [-1,0]
  ]

  const isValid = (i, j): boolean => {
    if (
      i < 0 || j < 0
      || i >= grid.length
      || j >= grid[0].length
    ) {
      return false
    }
    return true
  }

  while (
      !minHeap.isEmpty()
      && shortest[shortest.length - 1][shortest[0].length - 1] === Infinity
    ) {
    const item = minHeap.dequeue().element
    if (shortest[item.dest[0]][item.dest[1]] !== Infinity) {
      continue
    }
    shortest[item.dest[0]][item.dest[1]] = item.weight

    for (const [dy, dx] of DIRECTIONS) {
      const newRow = item.dest[0] + dy
      const newCol = item.dest[1] + dx
      if (!isValid(newRow, newCol)) {
        continue
      }
      // const newWeight = item.weight + Math.max(grid[newRow][newCol] - item.weight, 0)
      const newWeight = Math.max(grid[newRow][newCol], item.weight)
      if (newWeight < shortest[newRow][newCol]) {
        minHeap.enqueue({
          dest: [newRow, newCol],
          weight: newWeight,
        })
      }
    }
  }

  return shortest[shortest.length - 1][shortest[0].length - 1]
}
