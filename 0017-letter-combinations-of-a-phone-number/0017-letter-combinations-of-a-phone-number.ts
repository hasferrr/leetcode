const letterMap = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
])

function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  const result = []
  const dfs = (i: number, comb: string) => {
    if (i === digits.length) {
      result.push(comb)
      return
    }
    const letter = letterMap.get(digits[i])!
    for (let j = 0; j < letter.length; j++) {
      dfs(i + 1, comb + letter[j])
    }
  }
  dfs(0, '')
  return result
}
