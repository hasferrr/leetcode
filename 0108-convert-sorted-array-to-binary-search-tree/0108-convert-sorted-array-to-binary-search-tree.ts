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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function bst(start: number, end: number): TreeNode | null {
    if (start > end) {
      return null
    }
    const mid = Math.floor((start + end) / 2)
    const root = new TreeNode(nums[mid])
    root.left = bst(start, mid - 1)
    root.right = bst(mid + 1, end)
    return root
  }
  return bst(0, nums.length - 1)
}
