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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true

  const isValid = (
    root: TreeNode | null,
    hi: number,
    lo: number,
  ): boolean => {
    if (!root) return true
    if (root.val >= hi || root.val <= lo) {
      return false
    }
    return isValid(root.left, root.val, lo) &&
      isValid(root.right, hi, root.val)
  }

  return isValid(root.left, root.val, -Infinity) &&
    isValid(root.right, Infinity, root.val)
}
