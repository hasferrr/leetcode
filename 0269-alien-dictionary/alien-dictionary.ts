class Solution {
  /**
   * @param {string[]} words
   * @returns {string}
   */
  foreignDictionary(words: string[]): string {
    const adj: Map<string, Set<string>> = new Map()

    for (const w of words) {
      for (const c of w) {
        if (!adj.has(c)) {
          adj.set(c, new Set())
        }
      }
    }

    function checkWords(w1: string, w2: string): boolean {
      let i = 0
      let j = 0
      while (true) {
        if (j === w2.length && i < w1.length) {
          return false
        }
        if (i === w1.length) {
          return true
        }
        const c1 = w1[i]
        const c2 = w2[j]
        if (c1 === c2) {
          i++
          j++
          continue
        }
        if (adj.get(c1)!.has(c2)) {
          return false
        }
        adj.get(c2)!.add(c1)
        return true
      }
    }

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (!checkWords(words[i], words[j])) {
          return ""
        }
      }
    }

    const result: string[] = []
    const visited = new Set<string>()

    function dfs(char: string): void {
      if (visited.has(char)) {
        return
      }
      visited.add(char)
      const neighbor = adj.get(char)!
      for (const charN of neighbor) {
        dfs(charN)
      }
      result.push(char)
    }

    for (const [char] of adj) {
      dfs(char)
    }

    return result.join('')
  }
}
