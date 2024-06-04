function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] !== 0) return -1

  const LENGTH_ROW = grid.length
  const LENGTH_COL = grid[0].length

  const direction = [
    [0, 1], [1, 0],  [0, -1], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1],
  ]
  
  const queue = [[0, 0]]
  grid[0][0] = -1
  
  let totalPath = 1

  while (queue.length) {
    const qLen = queue.length

    for (let i = 0; i < qLen; i++) {
      const [row, col] = queue.shift()

      if (row === LENGTH_ROW - 1 && col === LENGTH_COL - 1) {
        return totalPath
      }

      for (const [dRow, dCol] of direction) {
        pushToQueue(row + dRow, col + dCol)
      }
    }

    totalPath++
  }

  return -1

  function pushToQueue (row: number, col: number) {
    if (
        row < 0
        || col < 0
        || row === LENGTH_ROW
        || col === LENGTH_COL
        || grid[row][col] !== 0
      ) {
      return
    }
    grid[row][col] = -1
    queue.push([row, col])
  }
}
