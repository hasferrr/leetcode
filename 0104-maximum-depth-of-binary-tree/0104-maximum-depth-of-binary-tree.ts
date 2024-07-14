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

function maxDepth(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, h: number): number => {
    if (!root) return h
    const l = dfs(root.left, h + 1)
    const r = dfs(root.right, h + 1)
    return Math.max(l, r)
  }
  return dfs(root, 0)
}
