function eatBanana(piles: number[], h: number, k: number): boolean {
  for (const pile of piles) {
    let hoursEat = Math.ceil(pile / k)
    h -= hoursEat
    if (h < 0) return false
  }
  return true
}

function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1
  let hi = -1

  // maximum number of piles
  for (const pile of piles) {
    if (pile > hi) hi = pile
  }

  while (true) {
    const mid = Math.floor((lo + hi) / 2)

    // be able to eat bananas within h hours
    if (eatBanana(piles, h, mid)) {

      // is it the minimum?
      if (eatBanana(piles, h, mid - 1) === false) {
        return mid
      }
      
      // too high
      hi = mid - 1
      continue
    }

    // too low (can't eat within h hours)
    lo = mid + 1
  }
}
