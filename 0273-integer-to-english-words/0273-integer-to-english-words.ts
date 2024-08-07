function numberToWords(num: number): string {
  if (num === 0) return "Zero"

  const NUMBER_MAP = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
  }

  const LARGE_MAP = [, , "Thousand", "Million", "Billion"]

  const result = []

  const handleThree = (part: number): void => {
    const digits = num % 1000
    num = Math.floor(num / 1000)
    const r = handleTwo(digits % 100)
    const l = handleOne(Math.floor(digits / 100))
    if ((r || l) && LARGE_MAP[part]) result.unshift(LARGE_MAP[part])
    if (r) result.unshift(r)
    if (l) result.unshift(l)
  }

  const makeTwoNumberWord = (n: number): string => {
    if (NUMBER_MAP[n] !== undefined) return NUMBER_MAP[n]
    const word = []
    const digit = n % 10
    word.unshift(NUMBER_MAP[digit])
    word.unshift(NUMBER_MAP[n - digit])
    return word.join(" ")
  }

  const handleTwo = (digits: number): string => digits !== 0
    ? makeTwoNumberWord(digits)
    : ""

  const handleOne = (digits: number): string => digits !== 0
    ? `${NUMBER_MAP[digits]} Hundred`
    : ""

  for (let i = 1; num > 0; i++) {
    handleThree(i)
  }

  return result.join(" ")
}

/*
2135280115
2 135 280 115
Two Billion +
(One Hundred) Thirty Five Million +
(Two Hundred) Eighty Thousand +
(One Hundred) Fifteen

100000010
100 000 010
(One Hundred) Million +
Ten
*/
