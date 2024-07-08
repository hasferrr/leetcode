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

class BSTIterator {
  stack: TreeNode[]
  curr: TreeNode | null
  root: TreeNode | null
  constructor(root: TreeNode | null) {
    this.stack = []
    this.curr = root
    this.root = root
  }

  next(): number {
    if (this.hasNext()) {
      while (this.curr) {
        this.stack.push(this.curr)
        this.curr = this.curr.left
      }
      const node = this.stack.pop()
      this.curr = node.right
      return node.val
    }
    return -1
  }

  hasNext(): boolean {
    return !!this.curr || !!this.stack.length
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */