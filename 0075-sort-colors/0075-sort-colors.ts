function sortColors(nums: number[]): void {
  // Bucket sort
  const map = [0, 0, 0]

  let i = 0
  while (i < nums.length) {
    map[nums[i]] = map[nums[i]] + 1
    i++
  }

  i = 0
  let indexNums = 0
  while (i < map.length) {
    let j = 0
    while (j < map[i]) {
      nums[indexNums] = i
      indexNums++
      j++
    }
    i++
  }
}
