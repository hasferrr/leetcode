// import { PriorityQueue } from '@datastructures-js/priority-queue'

function kClosest(points: number[][], k: number): number[][] {
  type Point = [number, number]
  const toOrigin = (p: Point) => p[0]**2 + p[1]**2
  const pointsMinHeap = new PriorityQueue({
    compare: (p1: Point, newP: Point) => toOrigin(newP) < toOrigin(p1) ? 1 : -1
  })
  for (const p of points) {
    pointsMinHeap.enqueue(p)
  }
  const result: Point[] = []
  for (; k > 0; k--) {
    result.push(pointsMinHeap.dequeue())
  }
  return result
}
