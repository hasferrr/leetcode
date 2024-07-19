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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const check = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (subRoot === null && root === null) {
      return true
    }
    if (subRoot === null || root === null) {
      return false
    }
    if (root.val !== subRoot.val) {
      return false
    }
    return check(root.left, subRoot.left) && check(root.right, subRoot.right)
  }

  const local = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null) {
      return false
    }
    if (check(root, subRoot)) {
      return true
    }
    return local(root.left, subRoot) || local(root.right, subRoot)
  }

  return local(root, subRoot)
}
