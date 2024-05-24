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

function kthSmallest(root: TreeNode | null, k: number): number {
  let ans: number = -1
  const kth = (root: TreeNode | null): void => {
    if (!root) return
    kth(root.left)
    if (k === 0) return
    ans = root.val
    k--
    kth(root.right)
  }
  kth(root)
  return ans
}
