// Segment Tree - O(n log n)

class SegmentTree {
  left: SegmentTree | null
  right: SegmentTree | null
  start: number
  end: number
  count: number
  constructor(start: number, end: number) {
    this.build(start, end)
  }

  private build(start: number, end: number) {
    this.left = null
    this.right = null
    this.start = start
    this.end = end

    if (start === end) {
      this.count = 1
      return
    }

    const mid = Math.floor((start + end) / 2)
    this.left = new SegmentTree(start, mid)
    this.right = new SegmentTree(mid + 1, end)
    this.count = this.left.count + this.right.count
  }

  queryAndUpdate(k: number) {
    if (this.start === this.end) {
      this.count--
      return this.start
    }

    this.count--
    if (this.left.count > k) {
      return this.left.queryAndUpdate(k)
    } else {
      return this.right.queryAndUpdate(k - this.left.count)
    }
  }
}

function reconstructQueue(people: number[][]): number[][] {
  // O(n log n)
  people.sort((a, b) => a[0] !== b[0]
    ? a[0] - b[0]
    : b[1] - a[1])
  console.log(people)

  const result = Array(people.length)

  // O(n)
  const tree = new SegmentTree(0, people.length - 1)

  // O(n log n)
  for (const p of people) {
    const [h, k] = p
    const index = tree.queryAndUpdate(k)
    result[index] = p
  }
  
  return result
}


// Linked List - O(n^2)

// class Node {
//   val: number[]
//   next: Node | null
//   constructor(val: number[], next: undefined | Node) {
//     this.val = val
//     this.next = next ?? null
//   }
// }

// class LinkedList {
//   head: Node | null
//   constructor() {
//     this.head = null
//   }
//   insert(index: number, val: number[]) {
//     let prev = null
//     let curr = this.head
//     let i = 0
//     while (i < index) {
//       prev = curr
//       curr = curr.next
//       i++
//     }
//     if (!prev) {
//       this.head = new Node(val, curr)
//     } else {
//       prev.next = new Node(val, curr)
//     }
//   }
//   toArray() {
//     const res = []
//     let curr = this.head
//     while (curr) {
//       res.push(curr.val)
//       curr = curr.next
//     }
//     return res
//   }
// }

// function reconstructQueue(people: number[][]): number[][] {
//   // Sort people
//   // people unsorted    = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
//   // people sorted      = [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
//   // O(n log n)
//   people.sort((a, b) => a[0] !== b[0]
//     ? b[0] - a[0]
//     : a[1] - b[1])

//   // For every person, insert it to their k index
//   // after insertion    = [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
//   // O(n^2)
//   const root = new LinkedList()
//   for (const p of people) {
//     root.insert(p[1], p)
//   }
  
//   // O(n)
//   return root.toArray()
// }
