function solveNQueens(n: number): string[][] {
  const result: string[][] = []
  
  const board: ('Q' | '.')[][] = Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = Array(n).fill('.')
  }

  const queenCol = new Set<number>()
  const queenPositiveDiag = new Set<number>() // diagonal \
  const queenNegativeDiag = new Set<number>() // diagonal /

  function solve(row: number): void {
    if (row === n) {
      const stringList = []
      for (const rowList of board) {
        stringList.push(rowList.join(''))
      }
      result.push(stringList)
      return
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) {
        continue
      }

      board[row][col] = 'Q'
      queenCol.add(col)
      queenPositiveDiag.add(row - col)
      queenNegativeDiag.add(row + col)

      solve(row + 1)

      board[row][col] = '.'
      queenCol.delete(col)
      queenPositiveDiag.delete(row - col)
      queenNegativeDiag.delete(row + col)
    }
  }

  function isValid(row, col): boolean {
    return !queenCol.has(col)
      && !queenPositiveDiag.has(row - col)
      && !queenNegativeDiag.has(row + col)
  }

  solve(0)
  return result
}
