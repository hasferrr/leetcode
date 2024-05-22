/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let left = 1
    let right = n
    while (left <= right) {
      const guess = Math.floor((left + right) / 2)
      const result = isBadVersion(guess)
      if (result) {
        // the first bad version should be on the left or it is
        const resultMin1 = isBadVersion(guess - 1)
        if (resultMin1 === false) {
          return guess
        }
        right = guess - 1
        continue
      }
      // the first bad version should be on the right
      left = guess + 1
    }
  }
}
