/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
  const result = []
  const helper = (root: _Node | null) => {
    if (!root) return
    for (const node of root.children) {
      helper(node)
    }
    result.push(root.val)
  }
  helper(root)
  return result
}
