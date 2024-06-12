// Time: O(n)
// Space: O(n)
function evalRPN(tokens: string[]): number {
  const operation = new Map([
    ['+', (arg1, arg2) => arg1 + arg2],
    ['-', (arg1, arg2) => arg1 - arg2],
    ['*', (arg1, arg2) => arg1 * arg2],
    ['/', (arg1, arg2) => Math.trunc(arg1 / arg2)],
  ])

  const stack = []

  for (const token of tokens) {
    if (operation.has(token)) {
      const b = stack.pop()
      const a = stack.pop()
      stack.push(operation.get(token)(a, b))
      continue
    }
    stack.push(Number(token))
  }
  return stack[0]
}
