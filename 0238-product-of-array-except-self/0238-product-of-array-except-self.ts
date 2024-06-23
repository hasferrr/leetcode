function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length)

  let prefix = 1
  let postfix = 1

  result[0] = prefix
  for (let i = 1; i < nums.length; i++) {
    prefix *= nums[i - 1]
    result[i] = prefix
  }

  result[nums.length - 1] *= postfix
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1]
    result[i] *= postfix
  }

  return result
}


// function productExceptSelf(nums: number[]): number[] {
//   const prefix = []
//   for (let i = 0; i < nums.length; i++) {
//     prefix.push(nums[i] * (prefix[i - 1] ?? 1))
//   }

//   const postfix = Array(nums.length)
//   for (let i = nums.length - 1; i >= 0; i--) {
//     postfix[i] = nums[i] * (postfix[i + 1] ?? 1)
//   }

//   const result = []
//   for (let i = 0; i < nums.length; i++) {
//     result.push(
//       (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1)
//     )
//   }

//   return result
// }
