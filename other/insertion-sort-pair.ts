/**
 * Pair class to store key-value pairs
 */
class Pair {
  key: number
  value: string
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key: number, value: string) {
    this.key = key
    this.value = value
  }
}

/**
 * Given a list of key-value pairs, sort the list by `key` using Insertion Sort.
 * Return a list of lists showing the state of the array after each insertion.
 * If two key-value pairs have the same `key`, maintain their relative order
 * in the sorted list.
 */
class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs: Pair[]): Pair[][] {
    if (!pairs.length) {
      return []
    }

    const listOfPairs: Pair[][] = [[...pairs]]

    // insertion sort
    let i = 1
    let j = i - 1

    while (i !== pairs.length) {

      while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
        // swap value of j to j-1
        const temp = pairs[j]
        pairs[j] = pairs[j + 1]
        pairs[j + 1] = temp
        j--
      }

      listOfPairs.push([...pairs])
      i++
      j = i - 1
    }

    return listOfPairs
  }
}

console.log(new Solution().insertionSort([
  new Pair(5, "apple"),
  new Pair(2, "banana"),
  new Pair(9, "cherry"),
]))

console.log()

console.log(new Solution().insertionSort([
  new Pair(3, "cat"),
  new Pair(3, "bird"),
  new Pair(2, "dog"),
]))
