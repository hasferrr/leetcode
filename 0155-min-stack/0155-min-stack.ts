class MinStack {
  stack: number[]
  mins: number[]
  constructor() {
    this.stack = []
    this.mins = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val)
      return
    }
    if (this.stack.length === 1) {
      this.mins.push(val)
    }
  }

  pop(): void {
    const removed = this.stack.pop()
    if (this.mins[this.mins.length - 1] === removed) {
      this.mins.pop()
      return
    }
    if (this.stack.length === 0) {
      this.mins.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}