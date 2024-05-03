function isValid(s: string): boolean {
  const stack: string[] = []
  const parentheses = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  let i = 0
  while (i < s.length) {
    // ketika s[i] === kurung buka, push ke stack
    if (!parentheses[s[i]]) {
      stack.push(s[i])
    } else {
      // ketika s[i] === kurung tutup, cek apakah sesuai stack pd element yg paling akhir
      if (parentheses[s[i]] === stack[stack.length - 1]) {
        // jika sesuai maka hapus element yang paling akhir dari stack
        stack.pop()
      } else {
        return false
      }
    }
    i++
  }
  return stack.length === 0
}