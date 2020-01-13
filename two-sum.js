// Given nums = [2, 7, 11, 15], target = 9
// Because nums[0] + nums[1] = 2 + 7 = 9
// return [0, 1]

var twoSum = function(nums, target) {
  let sets = {};
  for (var i = 0; i < nums.length; i++) {
      if (sets[nums[i]] >= 0) {
          return [sets[nums[i]], i]
      } else {
          sets[target-nums[i]] = i
      }
  }
};
