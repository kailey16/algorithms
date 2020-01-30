// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Solution O(n^2)
var threeSum = function(nums) {
  if (nums.lenght === 0) {return []}
  nums.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {return result}
    let j = i + 1
    let k = nums.length - 1
    if (i > 0 && nums[i] === nums[i-1]) continue;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j+1]) j++;
        while (nums[k] === nums[k-1]) k--;
        j++;
        k--;
      }
    }
  }
  return result
};