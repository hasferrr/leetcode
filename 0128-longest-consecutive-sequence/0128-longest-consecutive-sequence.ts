function longestConsecutive(nums: number[]): number {
  const set = new Set<number>()
  for (const n of nums) {
    set.add(n)
  }
  let maxResult = 0
  for (const n of set) {
    if (set.has(n - 1)) {
      continue
    }
    let curr = n + 1
    let currResult = 1
    while (set.has(curr)) {
      currResult++
      curr++
    }
    maxResult = Math.max(maxResult, currResult)
  }
  return maxResult
}


// class UnionFind {
//   parent: Map<number, number>
//   height: Map<number, number>
//   constructor(nums: number[]) {
//     this.parent = new Map()
//     this.height = new Map()

//     for (const n of nums) {
//       this.parent.set(n, n)
//       this.height.set(n, 1)
//     }
//   }

//   find(n: number): number {
//     if (this.parent.get(n) === n) {
//       return n
//     }
//     const root = this.find(this.parent.get(n))
//     this.parent.set(n, root)
//     return root
//   }

//   union(n1: number, n2: number): void {
//     const p1 = this.find(n1)
//     const p2 = this.find(n2)
//     if (p1 === p2) {
//       return
//     }

//     if (this.height.get(p1) > this.height.get(p2)) {
//       this.parent.set(p2, p1)
//       this.height.set(p1, this.height.get(p2) + this.height.get(p1))
//     } else if (this.height.get(p1) < this.height.get(p2)) {
//       this.parent.set(p1, p2)
//       this.height.set(p2, this.height.get(p2) + this.height.get(p1))
//     } else {
//       this.parent.set(p2, p1)
//       this.height.set(p1, this.height.get(p2) + this.height.get(p1))
//     }
//   }
// }

// function longestConsecutive(nums: number[]): number {
//   const uf = new UnionFind(nums)
//   for (const [n] of uf.parent) {
//     if (uf.parent.has(n + 1)) {
//       uf.union(n, n + 1)
//     }
//   }
//   let max = 0
//   for (const [n, h] of uf.height) {
//     max = Math.max(max, h)
//   }
//   return max
// }