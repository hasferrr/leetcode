function orangesRotting(grid: number[][]): number {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  const ROWS = grid.length
  const COLS = grid[0].length

  // Queues of [row,col] of 2's for bfs
  const queues = []

  // { key: row, value: Set of cols } representation
  let visited = new Map<number, Set<number>>()
  
  let freshOranges = 0
  let minutes = -1

  let row = 0
  let col = 0

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1) {
        freshOranges++
        continue
      }
      if (grid[row][col] === 2) {
        queues.push([row, col])
      }
    }
  }

  if (!queues.length && !freshOranges) return 0

  // bfs
  while (queues.length) {
    const qLen = queues.length

    for (let i = 0; i < qLen; i++) {
      [row, col] = queues.shift()

      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow
        const newCol = col + dCol

        if (outOfBound(newRow, newCol)) {
          continue
        }

        if (grid[newRow][newCol] === 1 && !inVisited(newRow, newCol)) {
          queues.push([newRow, newCol])
          pushToVisited(newRow, newCol)
          freshOranges--
        }
      }
    }

    minutes++
  }

  return freshOranges === 0 ? minutes : -1

  function pushToVisited(row: number, col: number) {
    if (!visited.has(row)) {
      visited.set(row, new Set())
    }
    visited.get(row).add(col)
  }

  function inVisited(row: number, col: number): boolean {
    if (!visited.has(row)) {
      return false
    }
    return visited.get(row).has(col)
  }
  
  function outOfBound(row: number, col: number): boolean {
    if (row < 0 || col < 0 || row === ROWS || col === COLS) {
      return true
    }
    return false
  }
}
