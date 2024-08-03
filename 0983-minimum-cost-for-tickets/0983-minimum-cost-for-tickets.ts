function mincostTickets(days: number[], costs: number[]): number {
  const passes = [1, 7, 30]
  const memo = Array(days.length)

  const fn = (i): number => {
    if (i >= days.length) return 0
    if (memo[i] !== undefined) return memo[i]

    let res = Infinity
    for (let j = 0; j < costs.length; j++) {
      const newDay = days[i] + passes[j]
      let newIndex = i
      while (newIndex < days.length && days[newIndex] < newDay) {
        newIndex++
      }
      res = Math.min(res, costs[j] + fn(newIndex))
    }

    memo[i] = res
    return memo[i]
  }
  return fn(0)
}
