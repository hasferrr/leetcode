function maxArea(height: number[]): number {
  let maxArea = -1
  let L = 0
  let R = height.length - 1
  while (L < R) {
    const area = Math.min(height[L], height[R]) * (R - L)
    maxArea = Math.max(maxArea, area)
    if (height[L] > height[R]) {
      R--
    } else {
      L++
    }
  }
  return maxArea
}


// function maxArea(height: number[]): number {
//   let maxArea = -1
//   let L = 0
//   let R = height.length - 1
//   while (L < R) {
//     const area = Math.min(height[L], height[R]) * (R - L)
//     maxArea = Math.max(maxArea, area)
//     if (height[L] > height[R]) {
//       R--
//     } else if (height[L] < height[R]) {
//       L++
//     } else {
//       if (L + 1 >= height.length) {
//         R--
//       } else if (R - 1 < 0) {
//         L++
//       } else {
//         if (height[L + 1] >= height[R - 1]) {
//           R--
//         } else {
//           L++
//         }
//       }
//     }
//   }
//   return maxArea
// }
