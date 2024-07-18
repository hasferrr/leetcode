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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0
  function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    const maxL = 1 + maxDepth(root.left)
    const maxR = 1 + maxDepth(root.right)
    diameter = Math.max(diameter, maxL + maxR - 1)
    return Math.max(maxL, maxR)
  }
  maxDepth(root)
  return diameter - 1
}
