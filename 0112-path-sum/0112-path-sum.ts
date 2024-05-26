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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function localHasPathSum(root: TreeNode | null, sum: number): boolean {
    if (!root) {
      return false
    }
    if (!root.left && !root.right) {
      return sum + root.val === targetSum
    }
    return localHasPathSum(root.left, sum + root.val)
    || localHasPathSum(root.right, sum + root.val)
  }
  return localHasPathSum(root, 0)
}
