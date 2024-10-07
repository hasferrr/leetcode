function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result = Array(nums1.length)
  const map = new Map<number, number>()
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i)
  }
  const stack = []
  for (let i = 0; i < nums2.length; i++) {
    if (!stack.length) {
      if (map.has(nums2[i])) {
        stack.push(nums2[i])
      }
      continue
    }
    while (nums2[i] > stack.at(-1)) {
      const index = map.get(stack.pop()!)!
      result[index] = nums2[i]
    }
    if (map.has(nums2[i])) {
      stack.push(nums2[i])
    }
  }
  while (stack.length) {
    const index = map.get(stack.pop()!)!
    result[index] = -1
  }
  return result
}
