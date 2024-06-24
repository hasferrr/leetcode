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
function pairSum(head: ListNode | null): number {
  const { newHead, middle } = reverseHalf(head)
  let max = -1
  let L = newHead
  let R = middle
  while (R) {
    max = Math.max(max, L.val + R.val)
    L = L.next
    R = R.next
  }
  return max
}

// Reverse the first half in-place
function reverseHalf(head: ListNode | null) {
  let prev = null
  let curr = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev.next
  return { newHead: prev, middle: curr }
}


// TC: O(n)
// SC: O(n)
// function pairSum(head: ListNode | null): number {
//   const arr = []
//   let curr = head
//   while (curr) {
//     arr.push(curr.val)
//     curr = curr.next
//   }
//   let max = -1
//   let L = 0
//   let R = arr.length - 1
//   while (L < R) {
//     max = Math.max(max, arr[L] + arr[R])
//     L++
//     R--
//   }
//   return max
// }
