class MinStack {
  stack: number[]
  mins: number[]
  constructor() {
    this.stack = []
    this.mins = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (!this.mins.length) {
      this.mins.push(val)
      return
    }
    if (val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val)
      return
    }
    this.mins.push(this.mins[this.mins.length - 1])
  }

  pop(): void {
    this.stack.pop()
    this.mins.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}
