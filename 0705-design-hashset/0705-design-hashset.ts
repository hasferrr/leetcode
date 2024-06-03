class MyNode {
  key: number
  next: MyNode | null
  constructor(key: number, next: MyNode | null) {
    this.key = key
    this.next = next
  }
}

class MyHashSet {
  mySet: (MyNode | null)[]
  size: number
  constructor() {
    this.mySet = Array(100).fill(null)
    this.size = 0
  }

  add(key: number): void {
    const index = this.hash(key)
    let node = this.mySet[index]
    let prev = null

    if (!node) {
      this.mySet[index] = new MyNode(key, null)
      this.size++
      this.reHash()
      return
    }

    while (node) {
      if (node.key === key) return
      prev = node
      node = node.next
    }

    const newNode = new MyNode(key, null)
    prev.next = newNode
    this.size++
    this.reHash()
  }

  remove(key: number): void {
    const index = this.hash(key)
    let node = this.mySet[index]
    let prev = null

    if (!node) return

    while (node) {
      if (node.key === key) {
        if (!prev) {
          this.mySet[index] = node.next
        } else {
          prev.next = node.next
        }
        this.size--
        return
      }
      prev = node
      node = node.next
    }
  }

  contains(key: number): boolean {
    const index = this.hash(key)
    let node = this.mySet[index]
    let prev = null

    if (!node) return false

    while (node) {
      if (node.key === key) return true
      prev = node
      node = node.next
    }

    return false
  }

  hash(key: number): number {
    return key % this.mySet.length
  }

  reHash(): void {
    if (this.size < Math.floor(this.mySet.length / 2)) return

    const oldMySet = this.mySet
    this.mySet = Array(oldMySet.length * 2).fill(null)
    this.size = 0

    for (const node of oldMySet) {
      if (!node) continue
      let current = node
      while (current) {
        this.add(current.key)
        current = current.next
      }
    }
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */