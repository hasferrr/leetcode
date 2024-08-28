/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  const LAST = matrix.length - 1

  const swap4 = (i, j) => {
    const _1st = [j, LAST - i]
    const _2nd = [_1st[1], LAST - _1st[0]]
    const _3rd = [_2nd[1], LAST - _2nd[0]]
    {
      [
        matrix[_1st[0]][_1st[1]],
        matrix[_2nd[0]][_2nd[1]],
        matrix[_3rd[0]][_3rd[1]],
        matrix[i][j]
      ] = [
          matrix[i][j],
          matrix[_1st[0]][_1st[1]],
          matrix[_2nd[0]][_2nd[1]],
          matrix[_3rd[0]][_3rd[1]]
        ]
    }
  }

  let start = 0
  let end = LAST
  for (let i = 0; start < end; i++) {
    for (let j = start; j < end; j++) {
      swap4(i, j)
    }
    start++
    end--
  }
}


// mirror horizontal + swap diagonal \
function rotate_math(matrix: number[][]): void {
  const swap = (i1, j1, i2, j2) => {
    [matrix[i1][j1], matrix[i2][j2]] = [matrix[i2][j2], matrix[i1][j1]]
  }
  const last = matrix.length - 1
  const half = Math.floor(matrix.length / 2)

  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < half; j++) {
      swap(i, j, i, last - j)
    }
  }

  // reverse
  let k = 1
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix.length - k; j++) {
      swap(i, j, last - j, last - i)
    }
    k++
  }
}
