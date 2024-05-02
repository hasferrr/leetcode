function getConcatenation(nums: number[]): number[] {
    const ans = Array(nums.length * 2)
    let i = 0
    while (i < nums.length) {
        ans[i] = nums[i]
        ans[i + nums.length] = nums[i]
        i += 1
    }
    return ans
}