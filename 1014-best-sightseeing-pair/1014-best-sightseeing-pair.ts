function maxScoreSightseeingPair(values: number[]): number {
  let res = values[0] + values[1] - 1
  let val = Math.max(values[0], values[1] + 1)
  for (let i = 2; i < values.length; i++) {
    res = Math.max(res, val + values[i] - i)
    val = Math.max(val, values[i] + i)
  }
  return res
}
