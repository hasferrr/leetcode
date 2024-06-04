function maxAreaOfIsland(grid: number[][]): number {
  const LENGTH_ROW = grid.length
  const LENGTH_COL = grid[0].length
  
  let row = 0
  let col = 0

  let maximumArea = 0

  while (true) {
    if (grid[row][col] === 1) {
      const area = visitIsland(row, col, 0)
      maximumArea = area > maximumArea ? area : maximumArea
    }
    col++
    if (col === LENGTH_COL) {
      col = 0
      row++
    }
    if (row === LENGTH_ROW) return maximumArea
  }

  function visitIsland(row: number, col: number, area: number): number {
    if (row < 0 || col < 0 || row === LENGTH_ROW || col === LENGTH_COL) {
      return area
    }
    if (grid[row][col] === 1) {
      area++
      grid[row][col] = -1
      area = visitIsland(row, col + 1, area)
      area = visitIsland(row, col - 1, area)
      area = visitIsland(row + 1, col, area)
      area = visitIsland(row - 1, col, area)
    }
    return area
  }
}
