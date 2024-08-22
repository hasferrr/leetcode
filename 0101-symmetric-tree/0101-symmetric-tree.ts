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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  const isSameInverted = (
    root1: TreeNode | null,
    root2: TreeNode | null,
  ): boolean => {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    if (root1.val !== root2.val) return false
    return isSameInverted(root1.left, root2.right)
      && isSameInverted(root1.right, root2.left)
  }
  return isSameInverted(root.left, root.right)
}


function isSymmetric_v1(root: TreeNode | null): boolean {
  if (!root) return true
  const isSameTree = (
    root1: TreeNode | null,
    root2: TreeNode | null,
  ): boolean => {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    if (root1.val !== root2.val) return false
    return isSameTree(root1.left, root2.left)
      && isSameTree(root1.right, root2.right)
  }
  const invert = (root: TreeNode | null): TreeNode | null => {
    if (!root) return null
    const temp = root.left
    root.left = invert(root.right)
    root.right = invert(temp)
    return root
  }
  return isSameTree(
    root.left,
    invert(root.right),
  )
}
