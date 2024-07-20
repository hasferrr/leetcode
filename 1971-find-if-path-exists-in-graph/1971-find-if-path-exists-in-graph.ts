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
    let p = this.parent.get(n)
    if (n !== p) {
      p = this.find(p)
    }
    this.parent.set(n, p)
    return p
  }

  union(n1: number, n2: number): void {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) {
      return
    }

    if (this.height.get(p1) < this.height.get(p2)) {
      this.parent.set(p1, p2)
    } else if (this.height.get(p1) > this.height.get(p2)) {
      this.parent.set(p2, p1)
    } else {
      this.parent.set(p2, p1)
      this.height.set(p1, this.height.get(p1) + 1)
    }
  }
}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const uf = new UnionFind(n)
  for (const [from, to] of edges) {
    uf.union(from, to)
  }
  return uf.find(source) === uf.find(destination)
}



function validPath_dfs(n: number, edges: number[][], source: number, destination: number): boolean {
  const graph = new Map<number, Set<number>>()
  for (let i = 0; i < n; i++) {
    graph.set(i, new Set())
  }
  for (const [from, to] of edges) {
    graph.get(from)!.add(to)
    graph.get(to)!.add(from)
  }

  const visited = new Set<number>()

  const dfs = (s: number): boolean => {
    if (s === destination) {
      return true
    }
    if (visited.has(s)) {
      return false
    }
    visited.add(s)
    const children: Set<number> = graph.get(s)!
    let result = false
    for (const child of children) {
      if (dfs(child)) return true
    }
    return result
  }

  return dfs(source)
}
