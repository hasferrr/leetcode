/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class Node<T> {
  value: T
  next: Node<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class MyQueue<T> {
  private head: Node<T> | null = null
  private tail: Node<T> | null = null
  private size: number = 0
  push(value: T): void {
    const newNode = new Node(value)
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = this.tail = newNode
    }
    this.size++
  }
  shift(): T | null {
    if (!this.head) return null
    const value = this.head.value
    this.head = this.head.next
    if (!this.head) {
      this.tail = null
    }
    this.size--
    return value
  }
  get length(): number {
    return this.size
  }
}


/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const result: (number | null)[] = []
  const queue = new MyQueue<TreeNode | null>()
  queue.push(root)
  while (queue.length) {
    const qLen = queue.length
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift()
      if (!node) {
        result.push(null)
        continue
      }
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return result.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = data.split(',') as (string | '')[]
  if (arr[0] === '') {
    return null
  }
  const root = new TreeNode(Number(arr[0]))
  const queue = new MyQueue<TreeNode>()
  queue.push(root)
  let index = 1
  while (index < arr.length) {
    const node = queue.shift()
    if (arr[index] !== '') {
      node.left = new TreeNode(Number(arr[index]))
      queue.push(node.left)
    }
    index++
    if (arr[index] !== '') {
      node.right = new TreeNode(Number(arr[index]))
      queue.push(node.right)
    }
    index++
  }
  return root
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */