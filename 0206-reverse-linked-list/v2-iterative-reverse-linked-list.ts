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

function reverseList(head: ListNode | null): ListNode | null {
  function reverse(
    prev: ListNode | null,
    curr: ListNode | null,
  ): ListNode | null {
    if (curr === null) {
      return prev
    }
    const nextNode = curr.next
    curr.next = prev
    return reverse(curr, nextNode)
  }
  return reverse(null, head)
}
