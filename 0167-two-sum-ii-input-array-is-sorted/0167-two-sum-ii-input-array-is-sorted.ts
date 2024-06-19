function twoSum(numbers: number[], target: number): number[] {
  let L = 0
  let R = numbers.length - 1
  while (true) {
    const sum = numbers[L] + numbers[R]
    if (sum > target) {
      R--
      continue
    }
    if (sum < target) {
      L++
      continue
    }
    return [L + 1, R + 1]
  }
}
