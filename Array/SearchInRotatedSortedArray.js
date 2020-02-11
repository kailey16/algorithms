// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1


// Solution O(n)
var search = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
         return i
     }
  }
  return -1
};


// Solution O(logn)
var search = function(nums, target) {
  if (nums[0] === target) {
    return 0;
  }
  
  let left = 0;
  let right = nums.length-1;
  
  while (right >= left) {
    let mid = Math.floor((left + right) / 2)

    if(nums[mid] === target){
        return mid;
    }

    // left sorted
    if (nums[left] <= nums[mid]) {
      // check if is in the left sorted part
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    // right sorted
    } else {
      // check if is in the right sorted part
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
};