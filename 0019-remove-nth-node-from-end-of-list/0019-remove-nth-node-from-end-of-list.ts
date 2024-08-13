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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) return null

  let r = head
  for (let i = 0; i < n; i++) {
    r = r.next
  }

  let prev = null
  let l = head
  while (r) {
    prev = l
    l = l.next
    r = r.next
  }
  if (!prev) return head.next
  prev.next = l?.next || null
  return head
}


// 2 passes loop
function removeNthFromEnd_2pass(head: ListNode | null, n: number): ListNode | null {
  let len = 0
  let curr = head
  while (curr) {
    curr = curr.next
    len++
  }

  if (len === 1) return null
  if (n === len) return head.next

  const delIndex = len - n
  let prev = null
  curr = head
  let i = 0
  while (i < delIndex) {
    prev = curr
    curr = curr.next
    i++
  }
  
  prev.next = curr?.next || null
  return head
}
