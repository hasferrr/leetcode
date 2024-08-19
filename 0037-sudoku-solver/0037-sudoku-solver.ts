function solveSudoku(board: string[][]): void {
  const MAX = 9
  const ROW_SET = new Map<number, Set<string>>()
  const COL_SET = new Map<number, Set<string>>()
  const BOX_SET = new Map<number, Set<string>>()

  let emptyCount = 0
  for (let i = 0; i < MAX; i++) {
    ROW_SET.set(i, new Set())
    for (let j = 0; j < MAX; j++) {
      const boxIndex = boxHash(i, j)
      if (!COL_SET.has(j)) COL_SET.set(j, new Set())
      if (!BOX_SET.has(boxIndex)) BOX_SET.set(boxIndex, new Set())

      if (board[i][j] === ".") {
        emptyCount++
      } else {
        ROW_SET.get(i)!.add(`${board[i][j]}`)
        COL_SET.get(j)!.add(`${board[i][j]}`)
        BOX_SET.get(boxIndex)!.add(`${board[i][j]}`)
      }
    }
  }

  function boxHash(i: number, j: number) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  // Assume: board is valid, not full, and solvable
  solve()

  function solve(): boolean {
    if (isFull()) return true
    return nextBoard()
  }

  function nextBoard(): boolean {
    const [row, col] = getEmptySpot()
    for (let i = 1; i <= 9; i++) {
      if (!isValid(row, col, `${i}`)) continue
      setBoard(row, col, `${i}`)
      if (solve()) return true
    }
    setBoard(row, col, ".")
    return false
  }

  function setBoard(row: number, col: number, value: string) {
    ROW_SET.get(row)!.delete(board[row][col])
    COL_SET.get(col)!.delete(board[row][col])
    BOX_SET.get(boxHash(row, col))!.delete(board[row][col])

    if (value === ".") {
      emptyCount++
    } else {
      emptyCount--
      ROW_SET.get(row)!.add(value)
      COL_SET.get(col)!.add(value)
      BOX_SET.get(boxHash(row, col))!.add(value)
    }

    board[row][col] = value
  }

  function getEmptySpot(): [number, number] {
    for (let i = 0; i < MAX; i++) {
      for (let j = 0; j < MAX; j++) {
        if (board[i][j] === ".") {
          return [i, j]
        }
      }
    }
    return [-1, -1]
  }

  function isFull(): boolean {
    return emptyCount === 0
  }

  function isValid(row: number, col: number, value: string): boolean {
    return !ROW_SET.get(row)!.has(value)
      && !COL_SET.get(col)!.has(value)
      && !BOX_SET.get(boxHash(row, col))!.has(value)
  }
}
