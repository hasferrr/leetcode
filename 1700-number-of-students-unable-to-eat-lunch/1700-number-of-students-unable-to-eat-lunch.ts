function countStudents(students: number[], sandwiches: number[]): number {
  let mark: number = -1
  let count: number = 0
  while (true) {
    if (students.length === 0) {
      return 0
    }
    if (sandwiches.length === 0) {
      return students.length
    }
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      count = 0
      continue
    }
    mark = students.length
    if (count === mark) {
      return students.length
    }
    //@ts-ignore
    students.push(students.shift())
    count++
  }
}
