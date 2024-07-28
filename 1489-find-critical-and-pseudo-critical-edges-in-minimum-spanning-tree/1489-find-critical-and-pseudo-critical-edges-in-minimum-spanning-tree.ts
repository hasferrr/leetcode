function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  const adj = new Map<number, Map<number, number>>()
  for (let i = 0; i < n; i++) {
    adj.set(i, new Map())
  }
  for (const [src, dst, weight] of edges) {
    adj.get(src).set(dst, weight)
    adj.get(dst).set(src, weight)
  }

  const mstWeight = primsMst(null)
  const critical = []
  const pseudo = []

  for (let i = 0; i < edges.length; i++) {
    const [src, dst, weight] = edges[i]

    adj.get(src).delete(dst)
    adj.get(dst).delete(src)

    const exclude = primsMst(null)
    if (exclude > mstWeight) {
      critical.push(i)
    } else {
      const forceInclude = primsMst(i)
      if (forceInclude === mstWeight) {
        pseudo.push(i)
      }
    }
    adj.get(src).set(dst, weight)
    adj.get(dst).set(src, weight)
  }

  return [critical, pseudo]

  function primsMst(forceEdge: number | null): number {
    const minHeap = new MinPriorityQueue({
      priority: (item: { dst: number, weight: number, }) => item.weight 
    })

    const visited = new Set<number>()
    let count = 0

    if (forceEdge !== null) {
      // Starts from 2 neighbors of the forced node
      const [src, dst, weight] = edges[forceEdge]
      visited.add(src)
      visited.add(dst)
      count += weight
      const twoNeighbors = [adj.get(src)!, adj.get(dst)!]
      for (const nbMap of twoNeighbors) {
        for (const [neighbor, nWeight] of nbMap) {
          if (visited.has(neighbor)) continue
          minHeap.enqueue({
            dst: neighbor,
            weight: nWeight,
          })
        }
      }
    } else {
      // Starts from 0
      minHeap.enqueue({ dst: 0, weight: 0 })
    }

    // Prim's mst
    while (!minHeap.isEmpty() && visited.size !== n) {
      const item = minHeap.dequeue().element

      if (visited.has(item.dst)) continue

      visited.add(item.dst)
      count += item.weight

      const neighborMap = adj.get(item.dst)!
      for (const [neighbor, nWeight] of neighborMap) {
        if (visited.has(neighbor)) continue
        minHeap.enqueue({
          dst: neighbor,
          weight: nWeight,
        })
      }
    }

    // If the graph become unconnected, return Infinity
    return visited.size === n ? count : Infinity
  }
}
