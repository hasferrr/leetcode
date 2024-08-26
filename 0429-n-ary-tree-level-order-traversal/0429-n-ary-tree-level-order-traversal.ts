/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
  if (!root) return []
  const result: number[][] = []
	const queue: _Node[] = [root]
  while (queue.length) {
    const level: number[] = []
    const qLen = queue.length
    for (let i = 0; i < qLen; i++) {
      const node: _Node = queue.shift()
      level.push(node.val)
      for (const child of node.children) {
        queue.push(child)
      }
    }
    result.push(level)
  }
  return result
}
