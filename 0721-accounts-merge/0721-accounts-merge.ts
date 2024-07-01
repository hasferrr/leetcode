class UnionFind {
  parent: Map<number, number>
  rank: Map<number, number>
  constructor(n) {
    this.parent = new Map()
    this.rank = new Map()

    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
      this.rank.set(i, 0)
    }
  }

  find(n: number) {
    if (n === this.parent.get(n)) {
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

function accountsMerge(accounts: string[][]): string[][] {
  const uf = new UnionFind(accounts.length)

  // Map every email to accounts[] index
  const emailMapToIndex = new Map<string, number>()

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j]
      if (emailMapToIndex.has(email)) {
        uf.union(i, emailMapToIndex.get(email))
        continue
      }
      emailMapToIndex.set(email, i)
    }
  }

  // Create merged map of index -> email[]
  const mergedEmail = new Map<number, string[]>()

  for (const [email, i] of emailMapToIndex.entries()) {
    const leader = uf.find(i)
    if (!mergedEmail.has(leader)) {
      mergedEmail.set(leader, [])
    }
    const emailList = mergedEmail.get(leader)
    emailList.push(email)
  }

  // Sort emails and return the required result
  const result = []

  for (const [i, emailList] of mergedEmail.entries()) {
    emailList.sort()
    const acc = []
    const name = accounts[i][0]
    acc.push(name)
    for (const e of emailList) {
      acc.push(e)
    }
    result.push(acc)
  }

  return result
}
