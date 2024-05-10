class MyNode {
  val: number
  prev: MyNode
  next: MyNode
  constructor(val, prev, next) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class MyLinkedList {
  head: MyNode
  tail: MyNode
  length: number
  constructor() {
    this.head = null as unknown as MyNode
    this.tail = null as unknown as MyNode
    this.length = 0
  }

  get(index: number): number {
    if (index >= this.length || index < 0) {
      return -1
    }
    if (index === this.length - 1) {
      return this.tail.val
    }

    let i = 0
    let currentNode = this.head
    while (true) {
      if (i === index) {
        return currentNode.val
      }
      i++
      currentNode = currentNode.next
    }
  }

  addAtHead(val: number): void {
    const newNode = new MyNode(val, null, null)
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
  }

  addAtTail(val: number): void {
    const newNode = new MyNode(val, null, null)
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.length || index < 0) {
      return
    }
    if (index === 0 || this.length === 0) {
      return this.addAtHead(val)
    }
    if (index === this.length) {
      return this.addAtTail(val)
    }

    let i = 0
    let currentNode = this.head
    while (i !== index) {
      if (i === index) {
        break
      }
      i++
      currentNode = currentNode.next
    }
    const newNode = new MyNode(val, null, null)
    currentNode.prev.next = newNode
    newNode.prev = currentNode.prev
    newNode.next = currentNode
    currentNode.prev = newNode
    this.length++
  }

  deleteAtIndex(index: number): void {
    if (index >= this.length || index < 0 || this.length === 0) {
      return
    }
    if (this.length === 1) {
      this.head = null as unknown as MyNode
      this.tail = null as unknown as MyNode
      this.length = 0
      return
    }
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null as unknown as MyNode
      this.length--
      return
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev
      this.tail.next = null as unknown as MyNode
      this.length--
      return
    }

    let i = 0
    let currentNode = this.head
    while (i !== index) {
      if (i === index) {
        break
      }
      i++
      currentNode = currentNode.next
    }
    currentNode.prev.next = currentNode.next
    currentNode.next.prev = currentNode.prev
    this.length--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
