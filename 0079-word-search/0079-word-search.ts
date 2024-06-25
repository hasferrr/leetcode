function exist(board: string[][], word: string): boolean {
  const ROWS = board.length
  const COLS = board[0].length

  // Represents a map of { wordIndex: { rows: Set(columns) } }
  const notASolution = new Map<number, Map<number, Set<number>>>()
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (board[i][j] === word[0]) {
        const result = dfs(i, j, 1, new Map<number, Set<number>>())
        if (result) {
          return true
        }
      }
    }
  }
  return false

  function dfs(row: number, col: number, wordIndex: number, checked: Map<number, Set<number>>) {
    if (wordIndex === word.length) {
      return true
    }
    if (inTheNotASolution(wordIndex, row, col)) {
      return false
    }
    addToChecked(row, col)
    const next = [
      [1, 0], [0, 1], [-1, 0], [0, -1],
    ]
    for (const n of next) {
      const newRow = row + n[0]
      const newCol = col + n[1]
      if (inTheChecked(newRow, newCol)) {
        continue
      }
      if (!isValid(newRow, newCol)) {
        continue
      }
      if (board[newRow][newCol] !== word[wordIndex]) {
        continue
      }
      if (dfs(newRow, newCol, wordIndex + 1, checked)) {
        return true
      }
    }
    removeFromChecked(row, col)
    return false

    function addToChecked(row: number, col: number) {
      if (!checked.has(row)) {
        checked.set(row, new Set())
      }
      checked.get(row).add(col)
    }

    function removeFromChecked(row: number, col: number) {
      if (!checked.has(row)) {
        return
      }
      checked.get(row).delete(col)
    }

    function inTheChecked(row: number, col: number): boolean {
      if (checked.has(row) && checked.get(row).has(col)) {
        return true
      }
      return false
    }

    function isValid(row: number, col: number): boolean {
      if (row >= ROWS || col >= COLS || row < 0 || col < 0) {
        return false
      }
      return true
    }

    function addToNotASolution(wordIndex: number, row: number, col: number) {
      if (!notASolution.has(row)) {
        notASolution.set(wordIndex, new Map())
      }
      const rowColMap = notASolution.get(wordIndex)
      if (!rowColMap.has(row)) {
        rowColMap.set(row, new Set())
      }
      rowColMap.get(row).add(col)
    }

    function inTheNotASolution(wordIndex: number, row: number, col: number): boolean {
      if (
        notASolution.has(wordIndex)
        && notASolution.get(wordIndex).has(row)
        && notASolution.get(wordIndex).get(row).has(col)) {
        return true
      }
      return false
    }
  }
}
