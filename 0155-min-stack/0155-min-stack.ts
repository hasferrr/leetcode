class StackNode {
  val: number
  min: number
  next: StackNode
  constructor(val: number, min: number, next: StackNode) {
    this.val = val
    this.min = min
    this.next = next
  }
}

class MinStack {
  stack: StackNode
  constructor() {
    this.stack
  }

  push(val: number): void {
    if (!this.stack) {
      this.stack = new StackNode(val, val, null as unknown as StackNode)
      return
    }
    this.stack = new StackNode(val, Math.min(val, this.stack.min), this.stack)
  }

  pop(): void {
    this.stack = this.stack.next
  }

  top(): number {
    return this.stack.val
  }

  getMin(): number {
    return this.stack.min
  }
}
