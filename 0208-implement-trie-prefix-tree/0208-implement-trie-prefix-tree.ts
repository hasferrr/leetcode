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

  insert(word: string): void {
    let curr = this.root
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode())
      }
      curr = curr.children.get(char)
    }
    curr.word = true
  }

  search(word: string): boolean {
    let curr = this.root
    for (const char of word) {
      if (!curr.children.has(char)) {
        return false
      }
      curr = curr.children.get(char)
    }
    return curr.word
  }

  startsWith(prefix: string): boolean {
    let curr = this.root
    for (const char of prefix) {
      if (!curr.children.has(char)) {
        return false
      }
      curr = curr.children.get(char)
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */