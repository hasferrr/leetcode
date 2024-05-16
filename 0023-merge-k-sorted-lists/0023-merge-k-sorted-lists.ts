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
  if (!lists.length) {
    return null
  }

  let sortedListNode: ListNode = lists[0]

  let i = 1
  while (true) {
    if (i === lists.length) {
      return sortedListNode
    }

    let result = null as ListNode | null
    let head = null as ListNode | null
    let numsL: ListNode | null = sortedListNode
    let numsR: ListNode | null = lists[i]

    while (true) {
      if (numsL === null) {
        if (result === null) {
          head = numsR
        } else {
          result.next = numsR
        }
        break
      }
      if (numsR === null) {
        if (result === null) {
          head = numsL
        } else {
          result.next = numsL
        }
        break
      }

      if (numsL.val <= numsR.val) {
        if (result === null) {
          head = new ListNode(numsL.val)
          result = head
        } else {
          result.next = numsL
          result = result.next
        }
        numsL = numsL.next
        continue
      }

      if (result === null) {
        head = new ListNode(numsR.val)
        result = head
      } else {
        result.next = numsR
        result = result.next
      }
      numsR = numsR.next
    }

    if (head) {
      sortedListNode = head
    }
    i++
  }
}