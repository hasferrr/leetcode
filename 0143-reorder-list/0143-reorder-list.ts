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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return

  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let L = 0
  let R = arr.length - 1
  let turn = 'L'
  while (L < R) {
    if (turn === 'L') {
      arr[L].next = arr[R]
      L++
      turn = 'R'
    } else {
      arr[R].next = arr[L]
      R--
      turn = 'L'
    }
  }

  if (turn === 'L') {
    arr[L].next = null
  } else {
    arr[R].next = null
  }
}
