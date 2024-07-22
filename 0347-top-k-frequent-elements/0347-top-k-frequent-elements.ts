function topKFrequent(nums: number[], k: number): number[] {
  const result = Array(k)
  const map = new Map<number, number>()

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1)
  }

  const temp = []
  for (const [n, count] of map) {
    temp.push([n, count])
  }
  temp.sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    result[i] = temp[i][0]
  }
  return result
}


function topKFrequent_HEAP(nums: number[], k: number): number[] {
  const result = []
  const map = new Map<number, number>()

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1)
  }

  const maxHeap = new MaxPriorityQueue({
    priority: (arr: [number, number]) => arr[1]
  })

  for (const [n, count] of map) {
    maxHeap.enqueue([n, count])
  }
  for (let i = 0; i < k; i++) {
    result.push(maxHeap.dequeue().element[0])
  }

  return result
}