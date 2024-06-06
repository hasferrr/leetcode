function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const prerequisitesMap = new Map<number, number[]>()

  for (const [course, pre] of prerequisites) {
    if (!prerequisitesMap.has(pre)) {
      prerequisitesMap.set(pre, [])
    }
    prerequisitesMap.get(pre).push(course)

    if (!prerequisitesMap.has(course)) {
      prerequisitesMap.set(course, [])
    }
  }

  const visited = new Set<number>()

  for (const key of prerequisitesMap.keys()) {
    if (!haveNoCycleDFS(key)) return false
  }

  return true

  function haveNoCycleDFS(key: number): boolean {
    const neighbours = prerequisitesMap.get(key)

    if (visited.has(key)) {
      return false
    }

    if (!neighbours.length) {
      return true
    }

    visited.add(key)

    for (const n of neighbours) {
      if (visited.has(n)) return false
      if (!haveNoCycleDFS(n)) return false
      prerequisitesMap.set(n, [])
    }

    visited.delete(key)
    return true
  }
}
