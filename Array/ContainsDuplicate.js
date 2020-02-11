// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Solution O(n)
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
      return false
  }
  
  let set = {};
  for (let i = 0; i < nums.length; i++) {
      if (set[nums[i]]) {
          return true
      } else {
          set[nums[i]] = true
      }
  }
  return false
};

// Same O(n), but with Set
var containsDuplicate = function(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

var containsDuplicate = function(nums) {
  const set = new Set(nums);
  
  return set.size !== nums.length;
};