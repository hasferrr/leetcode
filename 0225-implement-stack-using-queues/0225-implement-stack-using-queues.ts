class MyStack {
  stack: number[]
  constructor() {
    this.stack = []
  }

  push(x: number): void {
    this.stack.push(x)
  }

  pop(): number {
    let i = 0
    const size = this.stack.length
    while (true) {
      const value = this.stack.shift() as number
      i++
      if (i === size) {
        return value
      }
      this.stack.push(value)
    }
  }

  top(): number {
    const value = this.pop()
    this.stack.push(value)
    return value
  }

  empty(): boolean {
    return !this.stack.length
  }
}


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */