class TrieNode {
  children: Map<string, TrieNode>
  isWord: boolean
  index: number

  constructor() {
    this.children = new Map<string, TrieNode>()
    this.isWord = false
    this.index = -1
  }
}

class WordFilter {
  root: TrieNode
  maxWordLen: number

  constructor(words: string[]) {
    this.root = new TrieNode()

    for (let i = 0; i < words.length; i++) {
      this.addWord(words[i], i)
    }
  }

  addWord(word0: string, wordIndex: number): void {
    const wordList = []
    for (let i = 0; i < word0.length; i++) {
      wordList.push(word0.slice(i) + '#' + word0)
    }

    for (const word of wordList) {
      let curr = this.root
      for (let c of word) {
        if (!curr.children.has(c)) {
          curr.children.set(c, new TrieNode())
        }
        curr = curr.children.get(c)!
      }
      curr.isWord = true
      curr.index = wordIndex
    }
  }

  f(pref: string, suff: string): number {
    const word = suff + '#' + pref
    let curr = this.root
    for (let c of word) {
      if (!curr.children.has(c)) {
        return -1
      }
      curr = curr.children.get(c)
    }
    return this.getMaxIndex(curr)
  }

  getMaxIndex(curr: TrieNode): number {
    let maxIndex = curr.isWord ? curr.index : -1
    curr.children.forEach((value, key) => {
      maxIndex = Math.max(maxIndex, this.getMaxIndex(value))
    })
    return maxIndex
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
