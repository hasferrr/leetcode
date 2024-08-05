interface Ocean {
  pacific: boolean
  atlantic: boolean
}

function pacificAtlantic(heights: number[][]): number[][] {
  const ROWS = heights.length
  const COLS = heights[0].length

  const ocean: Ocean[][] = new Array(ROWS)
  for (let i = 0; i < ROWS; i++) {
    ocean[i] = new Array(COLS)
    for (let j = 0; j < COLS; j++) {
      ocean[i][j] = { pacific: false, atlantic: false }
    }
  }

  const DIRECTIONS = [
    [1,0], [0,1], [-1,0], [0,-1]
  ]

  const dfs = (i: number, j: number, type: 'pacific' | 'atlantic'): void => {
    if (ocean[i][j][type]) return
    ocean[i][j][type] = true

    for (const [dy, dx] of DIRECTIONS) {
      const nextI = i + dy
      const nextJ = j + dx
      if (nextI < 0 || nextI === ROWS || nextJ < 0 || nextJ === COLS) continue
      if (heights[nextI][nextJ] >= heights[i][j]) dfs(nextI, nextJ, type)
    }
  }

  for (let i = 0; i < ROWS; i++) {
    dfs(i, 0, 'pacific')
    dfs(i, COLS - 1, 'atlantic')
  }
  for (let j = 0; j < COLS; j++) {
    dfs(0, j, 'pacific')
    dfs(ROWS - 1, j, 'atlantic')
  }

  const result: number[][] = []
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (ocean[i][j].pacific && ocean[i][j].atlantic) {
        result.push([i, j])
      }
    }
  }

  return result
}
