import { MinPriorityQueue } from '@datastructures-js/priority-queue'

interface NodeAndWeight {
  node: number,
  weight: number,
}

interface Shortest {
  [key: number]: number,
}


/**
 * Dijkstra's Algorithm
 * - n     -> The number of vertices in the graph, each vertex is labeled from 0 to n-1.
 * - edges -> An array of array, each representing a directed edge in the form (u, v, w), where
 *            - u is the source vertex,
 *            - v is the destination vertex, and
 *            - w is the weight of the edge (positive number).
 * - src   -> The source vertex from which to start the algorithm, where (0 <= src < n).
 */
const shortestPath = (n: number, edges: number[][], src: number): Shortest => {
  // Adjacency List
  const adj: { [key: number]: NodeAndWeight[] } = {}

  // Result
  const shortest: Shortest = {}

  for (let i = 0; i < n; i++) {
    adj[i] = []
    shortest[i] = -1
  }
  for (const [u, v, w] of edges) {
    adj[u].push({ node: v, weight: w })
  }

  const minHeap = new MinPriorityQueue<NodeAndWeight>((n) => n.weight)
  minHeap.enqueue({ node: src, weight: 0 })

  while (!minHeap.isEmpty()) {
    const { node, weight } = minHeap.dequeue()

    // Already traversed
    if (shortest[node] !== -1) {
      continue
    }
    shortest[node] = weight

    // Going to for each neighbors
    const neighborList = adj[node]
    for (const n of neighborList) {
      const nodeNeighbor = n.node
      const weightNeighbor = n.weight
      minHeap.enqueue({
        node: nodeNeighbor,
        weight: weight + weightNeighbor,
      })
    }
  }

  return shortest
}



let res: Shortest
res = shortestPath(5, [[0, 1, 10], [0, 2, 3], [1, 3, 2], [2, 1, 4], [2, 3, 8], [2, 4, 2], [3, 4, 5]], 0)
console.log(res) // { 0:0, 1:7, 2:3, 3:9, 4:5 }

res = shortestPath(4, [[0, 1, 5], [0, 2, 7], [1, 2, 2], [1, 3, 6], [2, 3, 4]], 1)
console.log(res) // { 0:-1, 1:0, 2:2, 3:6 }
