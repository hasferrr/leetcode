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

function minimumNode(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  if (root.left) return minimumNode(root.left)
  return root
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root

  if (key > root.val) {
    root.right = deleteNode(root.right, key)

  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)

  } else {
    if (!root.left) return root.right
    if (!root.right) return root.left
    
    const minNode = minimumNode(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  }
  return root
}
