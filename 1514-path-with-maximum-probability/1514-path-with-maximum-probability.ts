// Dijkstra's Algorithm - tallest path (not shortest bro)
function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
  const adj = new Map<number, [number, number][]>()

  for (let i = 0; i < n; i++) {
    adj.set(i, [])
  }

  for (let i = 0; i < edges.length; i++) {
    const [src, dest] = edges[i]
    const prob = succProb[i]
    adj.get(src).push([dest, prob])
    adj.get(dest).push([src, prob])
  }
  
  const maxHeap = new MaxPriorityQueue({
    priority: (data: { dest: number, prob: number }) => data.prob
  })
  const visited = new Map<number, number>()

  maxHeap.enqueue({
    dest: start_node,
    prob: 1,
  })

  while (!maxHeap.isEmpty() && !visited.has(end_node)) {
    const { dest, prob } = maxHeap.dequeue().element
    if (visited.has(dest)) {
      continue
    }
    visited.set(dest, prob)

    const neighborList = adj.get(dest)
    for (const [neighbor, probNeighbor] of neighborList) {
      if (visited.has(neighbor)) {
        continue
      }
      maxHeap.enqueue({
        dest: neighbor,
        prob: prob * probNeighbor,
      })
    }
  }

  return visited.has(end_node) ? visited.get(end_node) : 0
}
