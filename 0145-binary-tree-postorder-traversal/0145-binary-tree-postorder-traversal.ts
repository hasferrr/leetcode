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

function postorderTraversal(root: TreeNode | null): number[] {
  const result = []
  const stack1 = []
  const stack2 = []
  let curr = root
  while (curr || stack1.length) {
    if (curr.left) stack1.push(curr.left)
    if (curr.right) stack1.push(curr.right)
    stack2.push(curr)
    curr = stack1.pop()
  }
  while (stack2.length) {
    result.push(stack2.pop().val)
  }
  return result
}

// function postorderTraversal(root: TreeNode | null): number[] {
//   const result = []
//   const dfs = (root: TreeNode | null): void => {
//     if (!root) return
//     dfs(root.left)
//     dfs(root.right)
//     result.push(root.val)
//   }
//   dfs(root)
//   return result
// }
