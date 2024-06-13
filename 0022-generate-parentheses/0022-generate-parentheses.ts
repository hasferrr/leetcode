function generateParenthesis(n: number): string[] {
  const res = []
  function generate(open: number, close: number, str: string) {
    if (open === n && close === n) {
      res.push(str)
      return
    }
    if (open === n) {
      generate(open, close + 1, str + ")")
      return
    }
    if (close < open) {
      generate(open, close + 1, str + ")")
      generate(open + 1, close, str + "(")
      return
    }
    generate(open + 1, close, str + "(")
  }
  generate(1, 0, "(")
  return res
}
