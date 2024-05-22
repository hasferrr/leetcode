/** 
 * Forward declaration of guess API.
 * @param {number} num your guess
 * @return -1 if num is higher than the picked number
 *          1 if num is lower than the picked number
 *          otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let left = 1
  let right = n
  while (left <= right) {
    const numberIGuess = Math.floor((left + right) / 2)
    const result = guess(numberIGuess)

    if (result === -1) { // too high
      right = numberIGuess - 1
      continue
    }
    if (result === 1) { // too low
      left = numberIGuess + 1
      continue
    }
    if (result === 0) {
      return numberIGuess
    }
  }
}
