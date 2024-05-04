class MinStack {
  stack: { val: number, min: number }[]
  constructor() {
    this.stack = []
  }

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val, min: val })
      return
    }
    this.stack.push({
      val,
      min: Math.min(val, this.stack[this.stack.length - 1].min)
    })
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1].val
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min
  }
}
