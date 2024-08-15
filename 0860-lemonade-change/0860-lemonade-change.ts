function lemonadeChange(bills: number[]): boolean {
  const change = {
    5: 0,
    10: 0,
  }

  for (const b of bills) {
    if (b === 5) {
      change[5]++
      continue
    }

    if (b === 10) {
      if (change[5] === 0) return false
      change[5]--
      change[10]++
      continue
    }

    // if b === 20
    // pick 10+5
    if (change[10] > 0 && change[5] > 0) {
      change[5]--
      change[10]--
      continue
    }

    // pick 5+5+5
    if (change[5] < 3) return false
    change[5]--
    change[5]--
    change[5]--
  }

  return true
}
