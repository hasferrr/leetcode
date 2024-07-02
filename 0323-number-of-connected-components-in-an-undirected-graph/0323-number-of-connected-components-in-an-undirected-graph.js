class UnionFind {
  constructor(n) {
    this.parent = new Map()
    this.height = new Map()
    this.connected = n

    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
      this.height.set(i, 0)
    }
  }

  find(n) {
    if (this.parent.get(n) === n) {
      return n
    }
    const root = this.find(this.parent.get(n))
    this.parent.set(n, root)
    return root
  }

  union(n1, n2) {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) {
      return
    }

    if (this.height.get(p1) > this.height.get(p2)) {
      this.parent.set(p2, p1)
    } else if (this.height.get(p1) < this.height.get(p2)) {
      this.parent.set(p1, p2)
    } else {
      this.parent.set(p2, p1)
      this.height.set(p1, this.height.get(p1) + 1)
    }
    this.connected -= 1
  }
}

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const uf = new UnionFind(n)
    for (const [e1, e2] of edges) {
      uf.union(e1, e2)
    }
    return uf.connected
  }
}
