class TrieNode {
  children: Map<string, TrieNode>
  word: boolean
  constructor() {
    this.children = new Map<string, TrieNode>()
    this.word = false
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
    let curr = this.root
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode())
      }
      curr = curr.children.get(c)
    }
    curr.word = true
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const ROWS = board.length
  const COLS = board[0].length

  const result = []
  const visited = new Map<number, Set<number>>()

  const trie = new Trie()
  for (const w of words) {
    trie.addWord(w)
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (result.length === words.length) {
        return result
      }
      dfs(i, j, trie.root, '')
    }
  }

  return result

  function dfs(row: number, col: number, node: TrieNode, currentWord: string) {
    if (
      row === ROWS
      || col === COLS
      || row < 0
      || col < 0
      || !node.children.has(board[row][col])
      || visited.get(row)?.has(col)
    ) {
      return
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
      [1,0], [0,1], [-1,0], [0,-1]
    ]

    for (const n of next) {
      const newRow = row + n[0]
      const newCol = col + n[1]
      dfs(
        newRow,
        newCol,
        node,
        currentWord,
      )
    }

    visited.get(row).delete(col)
  }
}
