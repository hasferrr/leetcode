function numIslands(grid: string[][]): number {
  const LENGTH_ROW = grid.length
  const LENGTH_COL = grid[0].length

  let row = 0
  let col = 0

  let islands = 0

  while (true) {
    if (grid[row][col] === '1') {
      neighbourVisit(row, col)
      islands++
    }
    col++
    if (col === LENGTH_COL) {
      col = 0
      row++
    }
    if (row === LENGTH_ROW) return islands
  }

  function neighbourVisit(row: number, col: number): void {
    if (row < 0 || col < 0 || row === LENGTH_ROW || col === LENGTH_COL) {
      return
    }
    if (grid[row][col] === 'v' || grid[row][col] === '0') {
      return
    }
    grid[row][col] = 'v'
    neighbourVisit(row, col + 1)
    neighbourVisit(row, col - 1)
    neighbourVisit(row + 1, col)
    neighbourVisit(row - 1, col)
  }
}
