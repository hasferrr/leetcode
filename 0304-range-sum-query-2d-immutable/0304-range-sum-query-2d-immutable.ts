class NumMatrix {
  prefixSum: number[][]

  constructor(matrix: number[][]) {
    this.prefixSum = []

    for (let row = 0; row < matrix.length; row++) {
      this.prefixSum.push([])
      for (let col = 0; col < matrix[0].length; col++) {
        this.prefixSum[row].push(
            matrix[row][col]
            + ((col - 1 >= 0) ? this.prefixSum[row][col - 1] : 0)
            + ((row - 1 >= 0) ? this.prefixSum[row - 1][col] : 0)
            - ((col - 1 >= 0 && row - 1 >= 0) ? this.prefixSum[row - 1][col - 1] : 0)
          )
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 === 0 && col1 === 0) {
      return this.prefixSum[row2][col2]
    }
    if (row1 === 0) {
      return this.prefixSum[row2][col2]
        - this.prefixSum[row2][col1 - 1]
    }
    if (col1 === 0) {
      return this.prefixSum[row2][col2]
        - this.prefixSum[row1 - 1][col2]
    }
    return this.prefixSum[row2][col2]
      - this.prefixSum[row2][col1 - 1]
      - this.prefixSum[row1 - 1][col2]
      + this.prefixSum[row1 - 1][col1 - 1]
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
