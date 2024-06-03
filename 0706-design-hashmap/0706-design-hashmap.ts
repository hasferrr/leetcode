class MyNode {
  key: number
  val: number
  next: MyNode | null
  constructor(key: number, val: number, next: MyNode | null) {
    this.key = key
    this.val = val
    this.next = next
  }
}

class MyHashMap {
  map: (MyNode | null)[]
  size: number
  constructor() {
    this.map = Array(100).fill(null)
    this.size = 0
  }

  put(key: number, value: number): void {
    const index = this.hash(key)
    let node = this.map[index]
    let prev = null

    while (node) {
      if (key === node.key) {
        node.val = value
        return
      }
      prev = node
      node = node.next
    }

    if (!prev) {
      this.map[index] = new MyNode(key, value, null)
    } else {
      prev.next = new MyNode(key, value, null)
    }
    this.size++
  }

  get(key: number): number {
    const index = this.hash(key)
    let node = this.map[index]

    while (node) {
      if (key === node.key) return node.val
      node = node.next
    }

    return -1
  }

  remove(key: number): void {
    const index = this.hash(key)
    let node = this.map[index]
    let prev = null

    while (node) {
      if (key === node.key) {
        if (!prev) {
          this.map[index] = node.next
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

  hash(key: number): number {
    return key % this.map.length
  }

  reHash(key: number) {
    if (this.size < this.map.length) return

    const oldMap = this.map
    this.map = Array(this.map.length * 2).fill(null)
    this.size = 0

    for (const node of oldMap) {
      if (!node) continue
      let current = node
      while (current) {
        this.put(current.key, current.val)
        current = current.next
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */