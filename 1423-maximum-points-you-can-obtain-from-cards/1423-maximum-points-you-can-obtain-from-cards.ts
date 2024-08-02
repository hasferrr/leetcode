function maxScore(cardPoints: number[], k: number): number {
  if (k === cardPoints.length) {
    return cardPoints.reduce((acc, n) => acc + n, 0)
  }
  
  const prefixSum = Array(cardPoints.length)

  prefixSum[0] = cardPoints[0]
  for (let i = 1; i < cardPoints.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + cardPoints[i]
  }

  // l = 0
  // r = cardPoints.length - k - 1
  let result = prefixSum[prefixSum.length - 1] - prefixSum[cardPoints.length - k - 1]

  let l = 1
  let r = cardPoints.length - k
  while (r < prefixSum.length) {
    const points = prefixSum[prefixSum.length - 1] - prefixSum[r] + prefixSum[l - 1]
    result = Math.max(result, points)
    l++
    r++
  }

  return result
}
