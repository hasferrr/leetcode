function longestPalindrome(s: string): string {
  const visited = new Set<number>()
  const result: [number, number] = [0, -Infinity]

  const countPalindrome = (l: number, r: number, queue: number[]): void => {
    if (r === s.length || l < 0) return
    queue.push(l)
    queue.push(r)
    if (s[l] === s[r]) {
      if (r - l > result[1] - result[0]) {
        result[0] = l
        result[1] = r
      }
      return countPalindrome(l - 1, r + 1, queue)
    }
    for (const i of queue) {
      findPalindrome(i)
    }
  }

  const findPalindrome = (i: number): void => {
    if (visited.has(i)) return
    visited.add(i)
    if (i === s.length || i < 0) return
    countPalindrome(i, i, [])
    if (i - 1 >= 0 && s[i - 1] === s[i]) countPalindrome(i - 1, i, [])
    if (i + 1 < s.length && s[i + 1] === s[i]) countPalindrome(i, i + 1, [])
  }

  findPalindrome(Math.floor(s.length / 2))
  return s.slice(result[0], result[1] + 1)
}
