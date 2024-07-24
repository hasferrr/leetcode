class UnionFind {
  parent: Map<number, number>
  height: Map<number, number>

  // Node is from 0 to n-1
  constructor(n: number) {
    this.parent = new Map()
    this.height = new Map()
    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
      this.height.set(i, 0)
    }
  }

  // Find its root
  find(node: number): number {
    const parent = this.parent.get(node)!
    if (node === parent) {
      return node
    }
    // Path compression
    const root = this.find(parent)
    this.parent.set(node, root)
    return root
  }

  // Union two disjoint/unconnected graph
  union(n1: number, n2: number): boolean {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) return false

    // Union by rank/height
    if (this.height.get(p1)! < this.height.get(p2)!) {
      this.parent.set(p1, p2)
    } else if (this.height.get(p1)! > this.height.get(p2)!) {
      this.parent.set(p2, p1)
    } else {
      this.parent.set(p2, p1)
      this.height.set(p1, this.height.get(p1)! + 1)
    }
    return true
  }
}
