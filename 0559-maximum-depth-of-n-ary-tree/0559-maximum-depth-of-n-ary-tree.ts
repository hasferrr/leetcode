/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function maxDepth(root: _Node | null): number {
  if (!root) return 0
  let depth = 1
  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child) + 1)
  }
  return depth
}
