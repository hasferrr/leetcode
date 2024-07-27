interface Item {
  dst: number,
  weight: number,
  stop: number,
}

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const adj = new Map<number, [number, number][]>()
  for (let i = 0; i < n; i++) {
    adj.set(i, [])
  }
  for (const [from, to, price] of flights) {
    adj.get(from).push([to, price])
  }

  const minHeap = new PriorityQueue({
    compare: (a: Item, b: Item): number => a.weight - b.weight
  })
  minHeap.enqueue({ dst: src, weight: 0, stop: 0 })

  const shortest = Array(n).fill(Infinity)
  const stops = Array(n).fill(Infinity)

  while (!minHeap.isEmpty()) {
    const data = minHeap.dequeue()
    if (data.dst === dst) {
      return data.weight
    }

    if (data.stop > k) {
      continue
    }

    shortest[data.dst] = data.weight
    stops[data.dst] = data.stop

    for (const [neighbor, price] of adj.get(data.dst)) {
      const newWeight = data.weight + price
      const newStop = data.stop + 1
      if (newWeight < shortest[neighbor] || newStop < stops[neighbor]) {
        minHeap.enqueue({
          dst: neighbor,
          weight: newWeight,
          stop: newStop,
        })
      }
    }
  }

  return shortest[dst] === Infinity ? -1 : shortest[dst]
}
