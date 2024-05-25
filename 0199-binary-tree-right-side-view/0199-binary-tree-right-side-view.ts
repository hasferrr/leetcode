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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const qLen = queue.length
    let isAdded = false
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift()
      if (!isAdded) {
        result.push(node.val)
        isAdded = true
      }
      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
    }
  }
  return result
}
