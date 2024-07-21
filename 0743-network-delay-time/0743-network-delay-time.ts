function networkDelayTime(times: number[][], n: number, k: number): number {
  const adj = new Map<number, [number, number][]>()

  for (const [u, v, w] of times) {
    if (!adj.has(u)) {
      adj.set(u, [])
    }
    adj.get(u).push([v, w])
  }

  // MinHeap of [node, weight]
  const minHeap = new MinPriorityQueue({ priority: (n) => n[1] })
  minHeap.enqueue([k, 0])

  const shortestPath = new Set<number>()
  let max = -1

  while (!minHeap.isEmpty()) {
    const [node, weight] = minHeap.dequeue().element

    if (shortestPath.has(node)) {
      continue
    }

    shortestPath.add(node)
    max = Math.max(max, weight)

    const neighborList = adj.get(node)
    if (!neighborList) {
      continue
    }

    for (const [nodeN, weightN] of neighborList) {
      if (shortestPath.has(nodeN)) {
        continue
      }
      minHeap.enqueue([nodeN, weightN + weight])
      if (shortestPath.size === n) {
        return max
      }
    }
  }

  if (shortestPath.size === n) {
    return max
  }
  return -1
}
