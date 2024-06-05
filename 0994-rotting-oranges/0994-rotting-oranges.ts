function orangesRotting(grid: number[][]): number {
  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ]

  const ROWS = grid.length
  const COLS = grid[0].length

  // Collection of [row,col] of 2's
  const queues = []

  // { key: row, value: Set of cols } representation
  let visited = new Map<number, Set<number>>()

  let row = 0
  let col = 0

  // Find an 1's areas that does not horizontally / vertically connected
  // and search for 2's
  while (true) {
    if (grid[row][col] !== 0 && !inVisited(row, col)) {
      const mark = visitNeighbour(row, col, false)
      if (!mark) return -1
    }
    col++
    if (col === COLS) {
      col = 0
      row++
    }
    if (row === ROWS) break
  }

  if (!queues.length && !visited.size) return 0

  // bfs
  visited = new Map<number, Set<number>>()
  let minutes = -1

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
        }
      }
    }

    minutes++
  }

  return minutes

  // dfs
  function visitNeighbour(row: number, col: number, mark: boolean): boolean {
    if (outOfBound(row, col)) {
      return mark
    }

    if (grid[row][col] === 2) {
      mark = true
      queues.push([row, col])
    }

    if (grid[row][col] !== 0 && !inVisited(row, col)) {
      pushToVisited(row, col)
      for (const [dRow, dCol] of directions) {
        mark = visitNeighbour(row + dRow, col + dCol, mark)
      }
    }

    return mark
  }

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
