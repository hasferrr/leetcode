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

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (root: TreeNode | null, h: number): number | false => {
    if (!root) {
      return h
    }
    const l = dfs(root.left, h + 1)
    if (l === false) {
      return false
    }
    const r = dfs(root.right, h + 1)
    if (r === false) {
      return false
    }

    if (Math.abs(l - r) > 1) {
      return false
    }
    return Math.max(l, r)
  }
  return dfs(root, 1) !== false
}
