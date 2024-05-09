class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = this.head
    this.length = 0
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index >= this.length | index < 0) {
      return -1
    }

    if (!this.head) {
      return -1
    }

    let i = 0
    let currentNode = this.head
    while (true) {
      if (i === index) {
        return currentNode.value
      }
      i++
      currentNode = currentNode.next
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    if (this.length === 0) {
      const newNode = new Node(val)
      this.head = newNode
      this.tail = newNode
      this.length++
      return
    }
    this.head = new Node(val, this.head)
    this.length++
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    if (this.length === 0) {
      const newNode = new Node(val)
      this.head = newNode
      this.tail = newNode
      this.length++
      return
    }
    const newNode = new Node(val)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index >= this.length | index < 0) {
      return false
    }

    if (index === 0) {
      this.head = this.head.next
      this.length--
      return true
    }

    let i = 1
    let previousNode = this.head
    let currentNode = this.head.next
    while (true) {
      if (i === index) {
        if (index === this.length - 1) {
          this.tail = previousNode
        }
        previousNode.next = currentNode.next
        this.length--
        return true
      }
      i++
      previousNode = previousNode.next
      currentNode = currentNode.next
    }
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const arr = []

    let i = 0
    let currentNode = this.head
    while (true) {
      if (i === this.length) {
        return arr
      }
      arr.push(currentNode.value)
      i++
      currentNode = currentNode.next
    }
  }
}

let ll

ll = new LinkedList()
ll.get(0) === -1 || console.log('err 1')
const tail = new Node(30)
ll.head = new Node(10, new Node(20, tail))
ll.tail = tail
ll.length = 3 || console.log('err 1.5')
ll.get(0) === 10 || console.log('err 2')
ll.get(1) === 20 || console.log('err 3')
ll.get(2) === 30 || console.log('err 4')


ll = new LinkedList()
ll.insertHead(20)
ll.length === 1 || console.log('head 0')
ll.head.value === 20 || console.log('head 1')
ll.tail.value === 20 || console.log('head 2')
ll.head.next === null || console.log('head 3')
ll.tail.next === null || console.log('head 4')
ll.insertHead(30)
ll.length === 2 || console.log('headv2 0')
ll.head.value === 30 || console.log('headv2 1')
ll.tail.value === 20 || console.log('headv2 2')
ll.head.next.value === 20 || console.log('headv2 3')
ll.head.next.next === null || console.log('headv2 3.5')
ll.tail.next === null || console.log('headv2 4')
ll.insertHead(40)
ll.insertHead(50)
ll.head.value === 50 || console.log('headv3 1')
ll.tail.value === 20 || console.log('headv3 1')


ll = new LinkedList()
ll.insertTail(20)
ll.length === 1 || console.log('insert tail 0')
ll.head.value === 20 || console.log('insert tail 1')
ll.tail.value === 20 || console.log('insert tail 2')
ll.head.next === null || console.log('insert tail 3')
ll.tail.next === null || console.log('insert tail 4')
ll.insertTail(30)
ll.insertTail(40)
ll.insertTail(50)
ll.head.value === 20 || console.log('ins tailv2 1')
ll.head.next.value === 30 || console.log('ins tailv2 2')
ll.head.next.next.value === 40 || console.log('ins tailv2 3')
ll.tail.value === 50 || console.log('ins tailv2 4')
ll.tail.next === null || console.log('ins tailv2 5')


ll.insertTail(60)
ll.insertTail(70)
ll.remove(0) || console.log('remove 0')
ll.length === 5 || console.log('remove len1')
ll.get(0) === 30 || console.log('remove 1')
!ll.remove(-1) || console.log('remove 2')
!ll.remove(99) || console.log('remove 3')
ll.remove(4) || console.log('remove 4')
ll.remove(2) || console.log('remove 5')
//[30,40,60]
ll.length === 3 || console.log('remove len2')
ll.get(0) === 30 || console.log('remove 6')
ll.get(1) === 40 || console.log('remove 7')
ll.get(2) === 60 || console.log('remove 8')
ll.head.value === 30 || console.log('remove h')
ll.tail.value === 60 || console.log('remove t')


console.log(ll.getValues())
ll.insertHead(5)
ll.insertTail(999)
ll.insertTail(1000)
ll.insertHead(3)
console.log(ll.getValues())
