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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2
  if (!l1) return l2

  const head = new ListNode((l1.val + l2.val) % 10)
  let carry = l1.val + l2.val > 9 ? 1 : 0
  let curr = head
  l1 = l1.next
  l2 = l2.next

  while (l1 && l2) {
    const n = l1.val + l2.val + carry
    curr.next = new ListNode(n % 10)
    carry = n > 9 ? 1 : 0
    curr = curr.next
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    const n = l1.val + carry
    curr.next = new ListNode(n % 10)
    carry = n > 9 ? 1 : 0
    curr = curr.next
    l1 = l1.next
  }
  while (l2) {
    const n = l2.val + carry
    curr.next = new ListNode(n % 10)
    carry = n > 9 ? 1 : 0
    curr = curr.next
    l2 = l2.next
  }
  if (carry) {
    curr.next = new ListNode(carry)
  }

  return head
}
