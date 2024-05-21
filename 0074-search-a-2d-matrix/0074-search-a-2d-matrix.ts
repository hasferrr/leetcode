function binarySearch(nums: number[], target: number): boolean {
  let left = 0
  let right = nums.length - 1
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
      continue
    }
    if (target > nums[mid]) {
      left = mid + 1
      continue
    }
    return true
  }
  return false
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0
  let right = matrix.length - 1

  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    const midMatrix = matrix[mid]

    if (target < midMatrix[0]) {
      right = mid - 1
      continue
    }

    if (target > midMatrix[midMatrix.length - 1]) {
      left = mid + 1
      continue
    }

    if (midMatrix[0] === target) return true
    if (midMatrix[midMatrix.length - 1] === target) return true

    return binarySearch(midMatrix, target)
  }
  return false
}
