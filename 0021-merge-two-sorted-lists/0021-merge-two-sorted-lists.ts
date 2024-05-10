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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1

  let a: ListNode | null = list1
  let b: ListNode | null = list2

  let r: ListNode | null = null
  let current: ListNode | null = null
  if (a.val < b.val) {
    r = list1
    current = r
    a = a.next
  } else {
    r = list2
    current = r
    b = b.next
  }

  while (a || b) {
    if (!a) {
      current.next = b
      current = current.next
      break
    }

    if (!b) {
      current.next = a
      current = current.next
      break
    }

    if (a.val < b.val) {
      current.next = a
      current = current.next
      a = a.next
    } else {
      current.next = b
      current = current.next
      b = b.next
    }
  }
  return r
}
