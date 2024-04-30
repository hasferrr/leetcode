/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let nums0 = new Set(nums)
  let num = 1
  while (nums0.has(num)) {
    num++
  }
  return num
};