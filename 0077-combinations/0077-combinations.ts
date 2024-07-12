function combine(n: number, k: number): number[][] {
  const result: number[][] = []
  const dfs = (comb: number[], i: number) => {
    if (comb.length === k) {
      result.push([...comb])
      return
    }
    if (i > n) {
      return
    }
    for (let j = i; j <= n; j++) {
      comb.push(j)
      dfs(comb, j + 1)
      comb.pop()
    }
  }
  dfs([], 1)
  return result
}
