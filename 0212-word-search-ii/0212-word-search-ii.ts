class TrieNode {
  children: Map<string, TrieNode>
  word: boolean
  constructor() {
    this.children = new Map<string, TrieNode>()
    this.word = false
  }

  addWord(word: string): void {
    let curr: TrieNode = this
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode())
      }
      curr = curr.children.get(c)
    }
    curr.word = true
  }

  isLeaf(): boolean {
    return this.children.size === 0
  }

  pruneChild(char: string) {
    this.children.delete(char)
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const ROWS = board.length
  const COLS = board[0].length

  const result = []
  const visited = new Map<number, Set<number>>()

  const trie = new TrieNode()
  for (const w of words) {
    trie.addWord(w)
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (result.length === words.length) {
        return result
      }
      dfs(i, j, trie, '')
    }
  }

  return result

  function dfs(row: number, col: number, node: TrieNode, currentWord: string): string | null {
    if (
      row === ROWS
      || col === COLS
      || row < 0
      || col < 0
      || !node.children.has(board[row][col])
      || visited.get(row)?.has(col)
    ) {
      return null
    }

    const char = board[row][col]
    node = node.children.get(char)
    currentWord = currentWord.concat(char)

    if (node.word) {
      result.push(currentWord)
      node.word = false
    }

    if (!visited.has(row)) {
      visited.set(row, new Set<number>())
    }
    visited.get(row).add(col)

    const next = [
      [1, 0], [0, 1], [-1, 0], [0, -1]
    ]

    for (const [dx, dy] of next) {
      const newRow = row + dx
      const newCol = col + dy
      const leafChar = dfs(newRow, newCol, node, currentWord)
      if (leafChar) {
        node.pruneChild(leafChar)
      }
    }

    visited.get(row).delete(col)

    if (node.isLeaf() && !node.word) {
      return char
    }
    return null
  }
}
