function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array(temperatures.length).fill(0)
  const stack: ({ temp: number, i: number })[] = []

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i]

    while (stack.length) {
      const top = stack[stack.length - 1]
      if (temp <= top.temp) {
        break
      }
      res[top.i] = i - top.i
      stack.pop()
    }

    stack.push({ temp, i })
  }

  return res
}
