// Kruskal Algorithm
class UnionFind {
  parent: Map<number, number>
  rank: Map<number, number>
  constructor(n: number) {
    this.parent = new Map()
    this.rank = new Map()
    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
      this.rank.set(i, 0)
    }
  }

  find(n: number): number {
    const p = this.parent.get(n)
    if (p === n) {
      return p
    }
    const root = this.find(p)
    this.parent.set(n, root)
    return root
  }

  union(n1: number, n2: number): boolean {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) return false

    if (this.rank.get(p1) > this.rank.get(p2)) {
      this.parent.set(p2, p1)
    } else if (this.rank.get(p1) < this.rank.get(p2)) {
      this.parent.set(p1, p2)
    } else {
      this.parent.set(p2, p1)
      this.rank.set(p1, this.rank.get(p1) + 1)
    }

    return true
  }
}

function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  const weightMst = kruskal(null, null)
  const critical = []
  const pseudo = []

  for (let i = 0; i < edges.length; i++) {
    const exclude = kruskal(i, null)
    if (exclude > weightMst) {
      critical.push(i)
      continue
    }
    const forced = kruskal(null, i)
    if (forced === weightMst) {
      pseudo.push(i)
    }
  }

  return [critical, pseudo]


  function kruskal(skip: number | null, force: number | null): number {
    interface Edge {
      src: number
      dest: number
      weight: number
    }

    const uf = new UnionFind(n)
    const minHeap = new MinPriorityQueue({
      priority: (edge: Edge) => edge.weight
    })

    let weight = 0
    let count = 0

    // heapify
    for (let i = 0; i < edges.length; i++) {
      if (skip === i) continue

      const [src, dest, w] = edges[i]
      if (force === i) {
        uf.union(src, dest)
        weight += w
        count++
      } else {
        minHeap.enqueue({ src, dest, weight: w })
      }
    }

    while (!minHeap.isEmpty() && count < n - 1) {
      const edge: Edge = minHeap.dequeue().element
      if (uf.union(edge.src, edge.dest)) {
        weight += edge.weight
        count++
      }
    }

    return count === n - 1 ? weight : Infinity
  }
}




// Prim's Algorithm
function findCriticalAndPseudoCriticalEdges_prim(n: number, edges: number[][]): number[][] {
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
