class TrieNode {
  children: Map<string, TrieNode>
  word: boolean
  constructor() {
    this.children = new Map<string, TrieNode>()
    this.word = false
  }
}

class WordDictionary {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
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
    return this.searchCustom(word, 0, word[0], this.root)
  }

  searchCustom(word: string, currentIndex: number, firstLetter: string, root: TrieNode): boolean {
    let curr = root

    if (firstLetter === '.') {
      let result = false
      curr.children.forEach((_, key: string) => {
        result = result || this.searchCustom(word, currentIndex, key, curr)
      })
      return result
    }
    if (!curr.children.has(firstLetter)) {
      return false
    }
    curr = curr.children.get(firstLetter)

    currentIndex++

    for (let i = currentIndex; i < word.length; i++) {
      const char = word[i]
      if (char === '.') {
        let result = false
        curr.children.forEach((_, key: string) => {
          result = result || this.searchCustom(word, i, key, curr)
        })
        return result
      }
      if (!curr.children.has(char)) {
        return false
      }
      curr = curr.children.get(char)
    }

    return curr.word
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */