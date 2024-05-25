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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inorderHashMap = new Map<number, number>()
  inorder.forEach((e, i) => {
    inorderHashMap.set(e, i)
  })

  const build = (
    preorderIndex: number,
    preorderSize: number,
    inorderStart: number,
    inorderEnd: number,
  ): TreeNode | null => {
    if (preorderIndex === preorderSize) {
      return null
    }
    const root = new TreeNode(preorder[preorderIndex])
    const inorderIndex = inorderHashMap.get(root.val)
    const leftSize = inorderIndex - inorderStart
    const rightSize = inorderEnd - inorderIndex

    root.left = build(
      preorderIndex + 1,
      preorderIndex + 1 + leftSize,
      inorderStart,
      inorderIndex - 1,
    )
    root.right = build(
      preorderIndex + 1 + leftSize,
      preorderIndex + 1 + leftSize + rightSize,
      inorderIndex + 1,
      inorderEnd,
    )
    return root
  }

  return build(0, preorder.length, 0, inorder.length - 1)
}
