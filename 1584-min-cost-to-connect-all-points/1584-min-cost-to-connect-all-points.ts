// Kruskal's Algorithm for MST

class UnionFind {
  parent: Map<number, number>
  height: Map<number, number>
  constructor(n: number) {
    this.parent = new Map()
    this.height = new Map()
    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
      this.height.set(i, 0)
    }
  }

  find(n: number): number {
    const p = this.parent.get(n)
    if (n === p) {
      return n
    }
    const root = this.find(p)
    this.parent.set(n, root)
    return root
  }

  union(n1: number, n2: number): boolean {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) return false

    if (this.height.get(p1) > this.height.get(p2)) {
      this.parent.set(p2, p1)
    } else if (this.height.get(p1) < this.height.get(p2)) {
      this.parent.set(p1, p2)
    } else {
      this.parent.set(p2, p1)
      this.height.set(p1, this.height.get(p1) + 1)
    }

    return true
  }
}

function minCostConnectPoints_kruskal(points: number[][]): number {
  const uf = new UnionFind(points.length)
  const minHeap = new MinPriorityQueue({
    priority: (data: {
      src: number,
      dest: number,
      weight: number,
    }) => data.weight
  })

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue
      }
      minHeap.enqueue({
        src: i,
        dest: j,
        weight: distance(points[i], points[j]),
      })
    }
  }

  let count = 0
  let cost = 0

  while (!minHeap.isEmpty() && count + 1 !== points.length) {
    const { src, dest, weight } = minHeap.dequeue().element
    if (!uf.union(src, dest)) {
      continue
    }
    cost += weight
    count++
  }
  return cost
}



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
