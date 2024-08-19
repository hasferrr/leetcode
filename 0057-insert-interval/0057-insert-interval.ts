function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length

  // return [number, boolean]
  // - overlap    : [overlapped index, true]
  // - no overlap : [next index, false]
  const search = (num: number): [number, boolean] => {
    let l = 0
    let r = n - 1
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      const [s, e] = intervals[mid]
      if (num < s) {
        r = mid - 1
      } else if (num > e) {
        l = mid + 1
      } else {
        return [mid, true]
      }
    }
    return [l, false]
  }

  const [i1, i1IsOverlap] = search(newInterval[0])
  const [i2, i2IsOverlap] = search(newInterval[1])

  if (!i1IsOverlap && !i2IsOverlap) {
    return intervals.slice(0, i1)
      .concat([newInterval])
      .concat(intervals.slice(i2, n))
  }

  if (i1IsOverlap && i2IsOverlap) {
    const merged = [intervals[i1][0], intervals[i2][1]]
    return intervals.slice(0, i1)
      .concat([merged])
      .concat(intervals.slice(i2 + 1, n))
  }

  // index1 overlaps, index2 does not
  if (i1IsOverlap) {
    const merged = [intervals[i1][0], newInterval[1]]
    return intervals.slice(0, i1)
      .concat([merged])
      .concat(intervals.slice(i2, n))
  }

  // index1 does not, index2 overlaps
  const merged = [newInterval[0], intervals[i2][1]]
  return intervals.slice(0, i1)
    .concat([merged])
    .concat(intervals.slice(i2 + 1, n))
}

// [[1, 2], [3, 5], [9, 10], [12, 16], [20, 30]]
// 0        1        2         3         4
// [6, 15]
// i1 = 2
// i2 = 3
