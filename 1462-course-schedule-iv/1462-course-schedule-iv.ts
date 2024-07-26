  function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
  // Adjecency list
  const adj = new Map<number, Set<number>>()
  const notPrerequisite = new Map<number, Set<number>>()
  const result: boolean[] = []

  for (let i = 0; i < numCourses; i++) {
    adj.set(i, new Set)
    notPrerequisite.set(i, new Set)
  }
  for (const [first, next] of prerequisites) {
    adj.get(first).add(next)
  }

  const dfs = (first: number, next: number): boolean => {
    if (notPrerequisite.get(first).has(next)) {
      return false
    }
    if (adj.get(first).has(next)) {
      return true
    }
    for (const neighbor of adj.get(first)) {
      if (dfs(neighbor, next) === true) {
        adj.get(first).add(next)
        return true
      }
    }
    notPrerequisite.get(first).add(next)
    return false
  }

  for (const [first, next] of queries) {
    result.push(dfs(first, next))
  }

  return result
}
