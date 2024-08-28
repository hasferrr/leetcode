function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const ROWS = grid2.length
  const COLS = grid2[0].length
  const DIRECTIONS = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ]

  const visited: boolean[][] = Array.from({ length: ROWS }, () => Array(COLS))

  const dfs = (row: number, col: number, areas: [number, number][]): [number, number][] => {
    if (grid2[row][col] !== 1) {
      return areas
    }
    if (visited[row][col]) {
      return areas
    }
    visited[row][col] = true
    areas.push([row, col])
    for (const [dy, dx] of DIRECTIONS) {
      const newRow = row + dy
      const newCol = col + dx
      if (newRow >= 0 && newRow < ROWS
        && newCol >= 0 && newCol < COLS) {
        areas = dfs(newRow, newCol, areas)
      }
    }
    return areas
  }

  const isSubIsland = (areas: [number, number][]): boolean => {
    for (const [row, col] of areas) {
      if (grid1[row][col] !== 1) {
        return false
      }
    }
    return true
  }

  let subIsland = 0
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const areas: [number, number][] = dfs(i, j, [])
      if (areas.length === 0) continue
      subIsland += isSubIsland(areas) ? 1 : 0
    }
  }

  return subIsland
}
