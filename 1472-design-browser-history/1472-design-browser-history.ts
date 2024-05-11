class MyNode {
  val: string;
  prev: MyNode;
  next: MyNode;
  constructor(val: string, prev: MyNode, next: MyNode) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class BrowserHistory {
  length: number;
  current: MyNode;
  currentIndex: number;
  constructor(homepage: string) {
    this.length = 1
    this.current = new MyNode(
      homepage,
      null as unknown as MyNode,
      null as unknown as MyNode,
    )
    this.currentIndex = 0
  }

  visit(url: string): void {
    this.current.next = new MyNode(
      url,
      this.current,
      null as unknown as MyNode,
    )
    this.current = this.current.next
    this.currentIndex++
    this.length = this.currentIndex + 1
  }

  back(steps: number): string {
    if (steps > this.currentIndex) {
      steps = this.currentIndex
    }
    while (steps) {
      this.current = this.current.prev
      this.currentIndex--
      steps--
    }
    return this.current.val
  }

  forward(steps: number): string {
    const max = this.length - 1
    if (steps > max - this.currentIndex) {
      steps = max - this.currentIndex
    }
    while (steps) {
      this.current = this.current.next
      this.currentIndex++
      steps--
    }
    return this.current.val
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */