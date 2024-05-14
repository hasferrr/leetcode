function fib(n: number): number {
  const hashMap = new Map<number, number>()
  hashMap.set(0, 0)
  hashMap.set(1, 1)

  const calculate = (n: number): number => {
    if (hashMap.has(n)) {
      return hashMap.get(n) as number
    }
    hashMap.set(n, fibInner(n))
    return hashMap.get(n) as number
  }

  const fibInner = (n: number): number => {
    return calculate(n - 1) + calculate(n - 2)
  }

  return calculate(n)
}
