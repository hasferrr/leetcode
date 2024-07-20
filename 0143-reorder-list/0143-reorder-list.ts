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
  // Find the middle
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Reverse the second half
  let curr = slow
  let prev = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  
  // Merge
  let left = head
  let right = prev
  while (right !== slow) {
    const nextLeft = left.next
    const nextRight = right.next
    left.next = right
    right.next = nextLeft
    left = nextLeft
    right = nextRight
  }
}


function reorderList_stack(head: ListNode | null): void {
  const stack = []
  let curr = head
  while (curr) {
    stack.push(curr)
    curr = curr.next
  }

  curr = head
  while (true) {
    const last = stack.pop()
    const nextCurr = curr.next
    curr.next = last
    if (curr === last) {
      curr.next = null
      return
    }
    if (last === nextCurr) {
      last.next = null
      return
    }
    last.next = nextCurr
    curr = nextCurr
  }
}
