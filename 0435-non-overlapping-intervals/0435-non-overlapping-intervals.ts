// Sort by end
function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1])
  let result = 0
  let prev = [-Infinity, -Infinity]
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      result++
      continue
    }
    prev = intervals[i]
  }
  return result
}


// Sort by start, then end
function eraseOverlapIntervals_v1(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  let result = 0
  let prev = [-Infinity, -Infinity]
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      if (prev[1] > intervals[i][1]) {
        prev = intervals[i]
      }
      result++
      continue
    }
    prev = intervals[i]
  }
  return result
}
