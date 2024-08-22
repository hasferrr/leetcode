class Solution {
  weight: number[]
  prob: number[]

  constructor(w: number[]) {
    this.weight = w

    const sum = this.weight.reduce((acc, wei) => acc + wei, 0)

    this.prob = Array(w.length)
    this.prob[0] = this.weight[0] / sum
    for (let i = 1; i < this.prob.length; i++) {
      this.prob[i] = this.prob[i - 1] + this.weight[i] / sum
    }
  }

  pickIndex(): number {
    const rand = Math.random()
    let left = 0
    let right = this.prob.length - 1

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (rand > this.prob[mid]) {
        left = mid + 1
      } else if (rand < this.prob[mid]) {
        right = mid
      } else {
        return left
      }
    }
    
    return left
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */