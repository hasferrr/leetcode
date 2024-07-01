class UnionFind {
  parent: Map<number, number>
  rank: Map<number, number>
  constructor(n) {
    this.parent = new Map()
    this.rank = new Map()

    for (let i = 1; i <= n; i++) {
      this.parent.set(i, i)
      this.rank.set(i, 0)
    }
  }

  find(n: number): number {
    if (this.parent.get(n) === n) {
      return n
    }
    const p = this.find(this.parent.get(n))
    this.parent.set(n, p)
    return p
  }

  union(n1: number, n2: number): boolean {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) {
      return false
    }

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

function findRedundantConnection(edges: number[][]): number[] {
  const graph = new UnionFind(edges.length)
  let i = 0
  while (true) {
    const [n1, n2] = edges[i]
    if (!graph.union(n1, n2)) {
      return [n1, n2]
    }
    i++
  }
}
