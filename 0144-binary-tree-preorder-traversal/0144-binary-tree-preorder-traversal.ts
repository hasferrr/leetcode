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

function preorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const stack = []
  let curr = root
  while (curr || stack.length) {
    if (curr) {
      result.push(curr.val)
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop().right
    }
  }
  return result
}

// function preorderTraversal(root: TreeNode | null): number[] {
//   const result = []
//   const dfs = (root: TreeNode | null): void => {
//     if (!root) return
//     result.push(root.val)
//     dfs(root.left)
//     dfs(root.right)
//   }
//   dfs(root)
//   return result
// }
