class UnionFind {
  parent: Record<number, number>
  rank: Record<number, number>
  unionCount: number
  constructor(n: number) {
    this.parent = {}
    this.rank = {}
    this.unionCount = 0
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
      this.rank[i] = 0
    }
  }
  find(n: number): number {
    const p = this.parent[n]
    if (p === n) return n
    const root = this.find(p)
    this.parent[n] = root
    return root
  }
  union(n1: number, n2: number) {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) return
    if (this.rank[p1] > this.rank[p2]) {
      this.parent[p2] = p1
    } else if (this.rank[p1] < this.rank[p2]) {
      this.parent[p1] = p2
    } else {
      this.parent[p2] = p1
      this.rank[p1]++
    }
    this.unionCount++
  }
}

function removeStones(stones: number[][]): number {
  const uf = new UnionFind(stones.length)
  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        uf.union(i, j)
      }
    }
  }
  return uf.unionCount
}


// DFS
function removeStones_DFS(stones: number[][]): number {
  const adj = new Map<number, number[]>()

  for (let i = 0; i < stones.length; i++) {
    adj.set(i, [])
  }

  for (let i = 0; i < stones.length; i++) {
    const [x, y] = stones[i]
    for (let j = i + 1; j < stones.length; j++) {
      const [jx, jy] = stones[j]
      if (x === jx || y === jy) {
        adj.get(i)!.push(j)
        adj.get(j)!.push(i)
      }
    }
  }

  const visited = new Set<number>()

  const dfs = (i: number): number => {
    if (visited.has(i)) {
      return 0
    }
    visited.add(i)
    let nodes = 1
    for (const j of adj.get(i)!) {
      if (visited.has(j)) {
        continue
      }
      nodes += dfs(j)
    }
    return nodes
  }

  let result = 0
  for (let i = 0; i < stones.length; i++) {
    const count = dfs(i)
    if (count) {
      result += count - 1
    }
  }

  return result
}
