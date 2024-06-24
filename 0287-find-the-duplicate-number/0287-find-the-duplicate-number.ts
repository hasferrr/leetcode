// Floyd's tortoise and hare algo
// the array values is the value of the node
// and the index of the next node in the array
function findDuplicate(nums: number[]): number {
  let slow = nums[0]
  let fast = nums[0]

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (fast === slow) {
      break
    }
  }

  let slow2 = nums[0]
  while (slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }

  return slow
}


// function findDuplicate(nums: number[]): number {
//   const set = new Set<number>()
//   for (const n of nums) {
//     if (set.has(n)) {
//       return n
//     }
//     set.add(n)
//   }
//   return -1
// }
