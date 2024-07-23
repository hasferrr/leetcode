import { MinPriorityQueue } from '@datastructures-js/priority-queue'

type Edge = [string, string, number]

// Prim's Minimum Spanning Tree
const prim = (edges: Edge[], start: string): Edge[] => {
  const adj = new Map<string, [string, number][]>()

  for (const [src, dest, weight] of edges) {
    if (!adj.has(src)) adj.set(src, [])
    if (!adj.has(dest)) adj.set(dest, [])
    adj.get(src)!.push([dest, weight])
    adj.get(dest)!.push([src, weight])
  }

  const mst: Edge[] = []
  let distance = 0
  const minHeap = new MinPriorityQueue<Edge>((x) => x[2])
  const visited = new Set<string>()

  visited.add(start)
  for (const [neighbor, neighborWeight] of adj.get(start)!) {
    minHeap.enqueue([start, neighbor, neighborWeight])
  }

  while (!minHeap.isEmpty() && visited.size < adj.size) {
    const [src, curr, weight] = minHeap.dequeue()
    if (visited.has(curr)) {
      continue
    }
    mst.push([src, curr, weight])
    distance += weight
    visited.add(curr)

    for (const [neighbor, neighborWeight] of adj.get(curr)!) {
      if (visited.has(neighbor)) {
        continue
      }
      minHeap.enqueue([curr, neighbor, neighborWeight])
    }
  }

  return mst
}


// Example

const graph: Edge[] = [
  ['A', 'B', 4],
  ['A', 'H', 8],
  ['B', 'C', 8],
  ['B', 'H', 11],
  ['C', 'D', 7],
  ['C', 'I', 2],
  ['C', 'F', 4],
  ['D', 'E', 9],
  ['D', 'F', 14],
  ['E', 'F', 10],
  ['F', 'G', 2],
  ['G', 'H', 1],
  ['G', 'I', 6],
  ['H', 'I', 7]
]

const res = prim(graph, 'A')
console.log(res)
