class MyNode {
  val: number
  prev: MyNode
  next: MyNode
  constructor(val: number, prev: MyNode, next: MyNode) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class MyStack {
  head: MyNode
  tail: MyNode
  constructor() {
    this.head = null as unknown as MyNode
    this.tail = this.head
  }

  push(x: number): void {
    const newNode = new MyNode(
      x,
      null as unknown as MyNode,
      null as unknown as MyNode,
    )
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      return
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
  }

  pop(): number {
    if (!this.head) {
      throw new Error('queue is empty')
    }
    if (!this.head.next) {
      const value = this.head.val
      this.head = null as unknown as MyNode
      this.tail = this.head
      return value
    }
    const value = this.tail.val
    this.tail.prev.next = null as unknown as MyNode
    this.tail = this.tail.prev
    return value
  }

  top(): number {
    if (!this.head) {
      throw new Error('queue is empty')
    }
    return this.tail.val
  }

  empty(): boolean {
    return !this.head
  }
}
