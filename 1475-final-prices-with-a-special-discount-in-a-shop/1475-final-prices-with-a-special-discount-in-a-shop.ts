function finalPrices(prices: number[]): number[] {
  const result = prices.map((n) => n)
  // array of [price, index][]
  const stack: [number, number][] = []
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= stack.at(-1)[0]) {
      result[stack.pop()![1]] -= prices[i]
    }
    stack.push([prices[i], i])
  }
  return result
}
