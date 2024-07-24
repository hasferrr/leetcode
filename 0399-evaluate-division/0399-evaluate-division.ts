function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  // const adj = new Map<string, [string, number][]>
  const adj = new Map<string, Map<string, number>>

  for (let i = 0; i < equations.length; i++) {
    const [src, dest] = equations[i]
    const weight = values[i]
    if (!adj.has(src)) adj.set(src, new Map())
    if (!adj.has(dest)) adj.set(dest, new Map())
    adj.get(src).set(dest, weight)
    adj.get(dest).set(src, 1 / weight)
  }

  const result: number[] = []

  for (const [src, dest] of queries) {
    if (!adj.has(src) || !adj.has(dest)) {
      result.push(-1)
      continue
    }
    const res = dfs(src, dest, 1, new Set<string>())
    result.push(res)
    if (res !== -1) {
      adj.get(src).set(dest, res)
      adj.get(dest).set(src, 1 / res)
    }
  }
  return result

  function dfs(src: string, dest: string, weightSoFar: number, visited: Set<string>): number {  
    if (src === dest) {
      return weightSoFar
    }
    if (visited.has(src)) {
      return -1
    }
    visited.add(src)

    const neighborMap = adj.get(src)!

    for (const [destN, weightN] of neighborMap) {
      const res = dfs(destN, dest, weightSoFar * weightN, visited)
      if (res !== -1) {
        return res
      }
    }

    return -1
  }
}