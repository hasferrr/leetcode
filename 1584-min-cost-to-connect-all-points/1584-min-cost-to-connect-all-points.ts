// Prim's Algorithm for MST
// All nodes will be wighted undirected connected graph

function distance(p1: number[], p2: number[]): number {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
}

function minCostConnectPoints(points: number[][]): number {
  // MinHeap of destination vertex (point) and its edge's wieght
  const minHeap = new MinPriorityQueue({
    priority: (data: {
      dest: number,
      weight: number,
    }) => data.weight
  })
  const visited = new Set<number>()

  let cost = 0

  // Start from index 0, push all adjecent points to heap
  for (let i = 1; i < points.length; i++) {
    minHeap.enqueue({
      dest: i,
      weight: distance(points[0], points[i]),
    })
  }
  visited.add(0)

  while (!minHeap.isEmpty() && visited.size !== points.length) {
    const { dest: curr, weight } = minHeap.dequeue().element

    if (visited.has(curr)) {
      continue
    }
    cost += weight
    visited.add(curr)

    // Push all adjecent points to heap
    for (let i = 0; i < points.length; i++) {
      if (i === curr || visited.has(i)) {
        continue
      }
      minHeap.enqueue({
        dest: i,
        weight: distance(points[curr], points[i]),
      })
    }
  }
  return cost
}
