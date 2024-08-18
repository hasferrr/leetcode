function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map: Map<number, number> = new Map()
  const items: number[][] = []
  for (const [v, w] of items1) {
    map.set(v, w)
  }
  for (const [v, w] of items2) {
    map.set(v, (map.get(v) ?? 0) + w)
  }
  for (const [v, w] of map) {
    items.push([v, w])
  }
  items.sort((a, b) => a[0] - b[0])
  return items
}
