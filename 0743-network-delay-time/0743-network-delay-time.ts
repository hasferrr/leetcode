function networkDelayTime(times: number[][], n: number, k: number): number {
  // Adjacency list
  const adj = new Map<number, ([number, number])[]>()

  for (const [u, v, w] of times) {
    if (!adj.has(u)) {
      adj.set(u, [])
    }
    adj.get(u).push([v, w])
  }

  // MinHeap of [node, weight]
  const minHeap = new MinPriorityQueue({ priority: (n) => n[1] })
  minHeap.enqueue([k, 0])

  // Map of { node: number of path }
  // const shortestPath = new Map<number, number>()
  const shortestPath = new Set<number>()
  let maxShortestPath = -1

  while (!minHeap.isEmpty()) {
    const { element: [node, weight] } = minHeap.dequeue()

    if (shortestPath.has(node)) {
      continue
    }

    shortestPath.add(node)
    maxShortestPath = Math.max(maxShortestPath, weight)

    const neighborList = adj.get(node)

    if (!neighborList) {
      continue
    }

    for (const [nodeN, weightN] of neighborList) {
      minHeap.enqueue([nodeN, weightN + weight]);
    }
  }

  if (shortestPath.size === n && maxShortestPath !== -1) {
    return maxShortestPath
  }
  return -1
}
