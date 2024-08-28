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

function maxPathSum(root: TreeNode | null): number {
  const maxSum = (root: TreeNode | null): {
    connected: number, unconnected: number
  } => {
    if (!root) return {
      connected: -Infinity,
      unconnected: -Infinity,
    }
    const left = maxSum(root.left)
    const right = maxSum(root.right)
    return {
      connected: Math.max(
        root.val,
        root.val + left.connected,
        root.val + right.connected,
      ),
      unconnected: Math.max(
        left.unconnected,
        right.unconnected,
        left.connected,
        right.connected,
        root.val + left.connected + right.connected,
      ),
    }
  }
  const res = maxSum(root)
  return Math.max(res.connected, res.unconnected)
}
