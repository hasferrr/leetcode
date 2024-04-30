/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const prev = new Map();
  let current = 0;

  while (nums.length !== 0) {
    const search = target - nums[0];
    if (prev.has(search)) {
      return [prev.get(search), current]
    }
    prev.set(nums[0], current);
    current++;
    nums = nums.slice(1);
  }
};