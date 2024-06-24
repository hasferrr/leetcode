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

// TC: O(n)
// SC: O(1)
// Floyd's Tortoise and Hare Algorithm
function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      break
    }
  }

  if (!fast || !fast.next) {
    return null
  }

  let slow2 = head
  while (slow !== slow2) {
    slow = slow.next
    slow2 = slow2.next
  }
  return slow
}


// TC: O(n)
// SC: O(n)
// function detectCycle(head: ListNode | null): ListNode | null {
//   const set = new Set<ListNode>()
//   let curr = head
//   while (curr) {
//     if (set.has(curr)) {
//       return curr
//     }
//     set.add(curr)
//     curr = curr.next
//   }
//   return null
// }
