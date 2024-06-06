/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
  const map = new Map<number, _Node>()
  
  function cloneDfs(node: _Node | null): _Node | null {
    if (!node) {
      return null
    }

    const newNode = new _Node(node.val)
    map.set(node.val, newNode)

    for (const n of node.neighbors) {
      if (map.has(n.val)) {
        newNode.neighbors.push(map.get(n.val))
      } else {
        const newN = cloneDfs(n)
        newNode.neighbors.push(newN)
      }
    }

    return newNode
  }

  return cloneDfs(node)
}
