class MyNode {
  key: number
  val: number
  next: MyNode | null
  prev: MyNode | null
  constructor(key: number, val: number, next: MyNode | null, prev: MyNode | null) {
    this.key = key
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  head: MyNode | null
  tail: MyNode | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addToHead(node: MyNode) {
    if (!this.head) {
      this.head = node
      this.tail = node
      this.size = 1
      return
    }
    this.head.prev = node
    node.next = this.head
    node.prev = null
    this.head = node
    this.size++
  }

  updateRecent(node: MyNode) {
    // head
    if (!node.prev) return

    // remove the node from its current position
    node.prev.next = node.next
    if (node.next) {
      node.next.prev = node.prev
    } else {
      // on the tail
      this.tail = node.prev
    }

    node.prev = null
    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  popTail(): MyNode {
    if (!this.head) return
    if (!this.head.next) {
      const node = this.head
      this.head = null
      this.tail = null
      this.size = 0
      return node
    }
    const removed = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    this.size--
    return removed
  }
}

class LRUCache {
  capacity: number
  cache: Map<number, MyNode>
  recent: LinkedList
  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map<number, MyNode>()
    this.recent = new LinkedList()
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (node === undefined) {
      return -1
    }
    this.recent.updateRecent(node)
    return node.val
  }

  put(key: number, value: number): void {
    // add
    if (!this.cache.has(key)) {
      const newNode = new MyNode(key, value, null, null)
      this.cache.set(key, newNode)
      this.recent.addToHead(newNode)

      // remove the least recently used
      if (this.cache.size > this.capacity) {
        const node = this.recent.popTail()
        this.cache.delete(node.key)
      }
      return
    }
    
    // update
    const node = this.cache.get(key)
    node.val = value
    this.recent.updateRecent(node)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */