class Node {
  val: number[]
  next: Node | null
  constructor(val: number[], next: undefined | Node) {
    this.val = val
    this.next = next ?? null
  }
}

class LinkedList {
  head: Node | null
  constructor() {
    this.head = null
  }
  insert(index: number, val: number[]) {
    let prev = null
    let curr = this.head
    let i = 0
    while (i < index) {
      prev = curr
      curr = curr.next
      i++
    }
    if (!prev) {
      this.head = new Node(val, curr)
    } else {
      prev.next = new Node(val, curr)
    }
  }
  toArray() {
    const res = []
    let curr = this.head
    while (curr) {
      res.push(curr.val)
      curr = curr.next
    }
    return res
  }
}

function reconstructQueue(people: number[][]): number[][] {
  // Sort people
  // people unsorted    = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
  // people sorted      = [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
  people.sort((a, b) => a[0] !== b[0]
    ? b[0] - a[0]
    : a[1] - b[1])

  // For every person, insert it to their k index
  // after insertion    = [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
  const root = new LinkedList()
  for (const p of people) {
    root.insert(p[1], p)
  }
  
  return root.toArray()
}
