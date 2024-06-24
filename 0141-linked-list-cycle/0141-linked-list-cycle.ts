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
function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
}


// TC: O(n)
// SC: O(n)
// function hasCycle(head: ListNode | null): boolean {
//   const set = new Set<ListNode>()
//   let curr = head
//   while (curr) {
//     if (set.has(curr)) {
//       return true
//     }
//     set.add(curr)
//     curr = curr.next
//   }
//   return false
// }
