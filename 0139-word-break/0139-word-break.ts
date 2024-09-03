class TrieNode {
  isWord: boolean
  children: Map<string, TrieNode>
  constructor() {
    this.isWord = false
    this.children = new Map()
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  add(word: string): void {
    let curr = this.root
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode())
      }
      curr = curr.children.get(c)
    }
    curr.isWord = true
  }

  suffixInTrie(word: string, index: number): number[] {
    let endIndexList: number[] = []
    let curr = this.root

    for (let i = index; i < word.length; i++) {
      const c = word[i]
      if (!curr.children.has(c)) {
        return endIndexList
      }
      curr = curr.children.get(c)
      if (curr.isWord) {
        endIndexList.push(i + 1)
      }
    }

    return endIndexList
  }
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const trie = new Trie()
  for (const word of wordDict) {
    trie.add(word)
  }
  const memo: boolean[] = Array(s.length)
  const helper = (index: number): boolean => {
    if (index === s.length) {
      return true
    }
    if (memo[index] !== undefined) {
      return memo[index]
    }
    const nextIndexList = trie.suffixInTrie(s, index)
    for (const next of nextIndexList) {
      if (helper(next)) {
        memo[next] = true
        return true
      }
    }
    memo[index] = false
    return false
  }
  return helper(0)
}


// wordDict -> DS Trie
//      012345
// s = "applepenapple"
//      ^
//   wordDict =["apple", "pen"]
// TRIE => { a: apple, p -> e -> t }
// e -> b  


// s = "apple  penapple"
// wordDict = ["apple", "pen"]
//
// "appla"
//  01234
// wordDict = ["apple", "pen"]
// i=5
// endIndex=4
