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
    return this.searchSlice(word, this.root)
  }

  searchSlice(word: string, root: TrieNode): boolean {
    let curr = root

    for (let i = 0; i < word.length; i++) {
      const char = word[i]

      if (char === '.') {
        let result = false
        const mapIterator = curr.children[Symbol.iterator]()

        for (const item of mapIterator) {
          if (result) {
            break
          }
          const key = item[0]
          const newWord = `${key}${word.slice(i + 1)}`
          result = result || this.searchSlice(newWord, curr)
        }

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