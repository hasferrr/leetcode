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
  if (!head || !head.next) {
    return head
  }
  // reverse the next node (recursively, just trust it)
  const reversedNextNode = reverseList(head.next)

  // the next node of the next head (after reversed) now pointing to the head
  head.next.next = head

  // set the next head to null
  head.next = null

  // return the current tail
  return reversedNextNode
}
