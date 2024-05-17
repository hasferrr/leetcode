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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }

  let interval = 1
  while (interval < lists.length) {
    let i = 0
    while (i + interval < lists.length) {
      lists[i] = merge(lists[i], lists[i + interval])
      i += 2 * interval
    }
    interval *= 2
  }

  return lists[0]
}

function merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }
  if (list1.val <= list2.val) {
    list1.next = merge(list1.next, list2)
    return list1
  }
  list2.next = merge(list1, list2.next)
  return list2
}
