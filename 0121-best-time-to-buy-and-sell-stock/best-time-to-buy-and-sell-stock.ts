function maxProfit(prices: number[]): number {
  let profit = 0
  let current = prices[0]

  for (let j = 1; j < prices.length; j++) {
    if (prices[j] > current) {
      const ppp = prices[j] - current
      if (ppp > profit) {
        profit = ppp
      }
    } else {
      current = prices[j]
    }
  }
  return profit
}