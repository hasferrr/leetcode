function calPoints(operations: string[]): number {
  let stack: number[] = []
  let result = 0

  let i = 0
  while (i < operations.length) {
    const element = operations[i]
    if (element === 'D') {
      // double of the previous score
      const double = stack[stack.length - 1] * 2
      stack.push(double)
    } else if (element === 'C') {
      // Invalidate the previous score
      stack.pop()
    } else if (element === '+') {
      // sum of the previous two scores
      const first = stack[stack.length - 1]
      const second = stack[stack.length - 2]
      stack.push(first + second)
    } else {
      // it is a number
      stack.push(parseInt(element))
    }
    i++
  }

  stack.forEach((element) => result += element)
  return result
}