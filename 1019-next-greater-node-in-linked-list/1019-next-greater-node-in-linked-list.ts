/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nextLargerNodes(head: ListNode | null): number[] {
  const result = []
  const stack = []
  const indexList = []
  let i = 0
  while (head) {
    result.push(0)
    while (stack.length && head.val > stack[stack.length - 1]) {
      stack.pop()
      result[indexList.pop()!] = head.val
    }
    stack.push(head.val)
    indexList.push(i)
    head = head.next
    i += 1
  }
  return result
}
