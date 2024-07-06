class SegmentTree {
  left: SegmentTree | null
  right: SegmentTree | null
  start: number
  end: number
  booked: boolean
  constructor(start: number, end: number) {
    this.left = null
    this.right = null
    this.start = start
    this.end = end
    this.booked = false
  }

  update(upStart: number, upEnd: number): void {
    if (this.start === this.end) {
      this.booked = true
      return
    }

    if (this.start >= upStart && this.end <= upEnd) {
      this.booked = true
      this.left = null
      this.right = null
      return
    }

    const mid = Math.floor((this.start + this.end) / 2)

    if (upEnd <= mid) {
      if (!this.left) {
        this.left = new SegmentTree(this.start, mid)
      }
      this.left.update(upStart, upEnd)
    } else if (upStart > mid) {
      if (!this.right) {
        this.right = new SegmentTree(mid + 1, this.end)
      }
      this.right.update(upStart, upEnd)
    } else {
      if (!this.left) {
        this.left = new SegmentTree(this.start, mid)
      }
      if (!this.right) {
        this.right = new SegmentTree(mid + 1, this.end)
      }
      this.left.update(upStart, mid)
      this.right.update(mid + 1, upEnd)
    }

    this.booked = (this.left ? this.left.booked : false)
      && (this.right ? this.right.booked : false)
  }

  queryIsBooked(queryStart: number, queryEnd: number): boolean {
    if (this.booked) {
      return true
    }
    if (this.start === this.end) {
      return this.booked
    }

    const mid = Math.floor((this.start + this.end) / 2)

    if (queryEnd <= mid) {
      return this.left ? this.left.queryIsBooked(queryStart, queryEnd) : false
    } else if (queryStart > mid) {
      return this.right ? this.right.queryIsBooked(queryStart, queryEnd) : false
    } else {
      return (this.left ? this.left.queryIsBooked(queryStart, mid) : false)
        || (this.right ? this.right.queryIsBooked(mid + 1, queryEnd) : false)
    }
  }
}

class MyCalendar {
  root: SegmentTree
  constructor() {
    this.root = new SegmentTree(0, 10**9)
  }

  book(start: number, end: number): boolean {
    if (this.root.queryIsBooked(start, end - 1)) {
      return false
    }
    this.root.update(start, end - 1)
    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */