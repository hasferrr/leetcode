function regionsBySlashes(grid: string[]): number {
  const matrix = Array.from({ length: grid.length * 3 }, () => Array(grid[0].length * 3))

  const mapChar = {
    " ": [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    "/": [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    "\\": [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const seq = mapChar[grid[i][j]]
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          matrix[i * 3 + k][j * 3 + l] = seq[k][l]
        }
      }
    }
  }

  let count = 0

  const DIRECTIONS = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ]
  const dfs = (i: number, j: number): boolean => {
    if (matrix[i][j] !== 0) return false
    matrix[i][j] = -1
    for (const [dy, dx] of DIRECTIONS) {
      const newRow = i + dy
      const newCol = j + dx
      if (
        newRow < 0
        || newCol < 0
        || newRow === matrix.length
        || newCol === matrix[0].length
        || matrix[newRow][newCol] !== 0) {
        continue
      }
      dfs(newRow, newCol)
    }
    return true
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(i, j)) count++
    }
  }
  return count
}
