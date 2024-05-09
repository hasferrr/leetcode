class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.array = Array(capacity)
    this.capacity = capacity
    this.pointer = 0
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.array[i]
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.array[i] = n
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.capacity === this.pointer) {
      this.resize()
    }
    this.array[this.pointer] = n
    this.pointer = this.pointer + 1
  }

  /**
   * @returns {number}
   */
  popback() {
    this.pointer = this.pointer - 1
    return this.array[this.pointer]
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity = this.capacity * 2
    const oldArray = this.array
    this.array = Array(this.capacity)
    let i = 0
    while (i < this.pointer) {
      this.array[i] = oldArray[i]
      i += 1
    }
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.pointer
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity
  }
}
