class TrieNode {
  children: Map<string, TrieNode>
  // isWord: boolean
  constructor() {
    this.children = new Map()
    // this.isWord = false
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string) {
    let curr: TrieNode = this.root
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode())
      }
      curr = curr.children.get(c)
    }
    // this.isWord = true
  }
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie = new Trie()
  for (const n of arr1) trie.insert(String(n))
  let result = 0
  const match = (node1: TrieNode, val: string, prefix: number) => {
    result = Math.max(result, prefix + 1)
    if (prefix === val.length) return
    for (const [key1, ch1] of node1.children) {
      if (key1 === val[prefix]) {
        match(ch1, val, prefix + 1)
      }
    }
  }
  for (const n of arr2) {
    match(trie.root, String(n), 0)
  }
  return result - 1
}
