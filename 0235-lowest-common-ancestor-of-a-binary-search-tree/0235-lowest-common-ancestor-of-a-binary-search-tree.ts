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

type NODE = TreeNode | null

function lowestCommonAncestor(root: NODE, p: NODE, q: NODE): NODE {
  if (!root) return null
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
  return root
}
