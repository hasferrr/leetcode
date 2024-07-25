function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // Adjacency list
  const adj = new Map<number, number[]>()

  for (let i = 0; i < numCourses; i++) {
    adj.set(i, [])
  }
  for (const [a, b] of prerequisites) {
    adj.get(a).push(b)
  }

  const result = []

  const visited = new Set<number>()
  const path = new Set<number>()

  // Side effect: push course topologically to result
  // return true if no cycle, false otherwise
  const dfs = (course: number): boolean => {
    // has a cycle?
    if (path.has(course)) {
      return false
    }
    if (visited.has(course)) {
      return true
    }
    path.add(course)
    visited.add(course)
    for (const neighbor of adj.get(course)) {
      if (dfs(neighbor) === false) return false
    }
    result.push(course)
    path.delete(course)
    return true
  }

  for (const [key] of adj) {
    if (dfs(key) === false) return []
  }

  return result
}
