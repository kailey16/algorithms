// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



var maxSubArray = function(nums) {
  let maxSum = nums[0]
  for (let i = 0; i < nums.length; i++) {
      for (let j = nums.length; j > i; j--) {
          let subArr = nums.slice(i, j)
          let sum = subArr.reduce((memo, ele) => memo += ele, 0)
          sum > maxSum ? maxSum = sum : null
      }
  }
  return maxSum
};

// Kadane's algorithm O(n)
var maxSubArray = function(nums) {
  if(nums.length < 0) return;
  if(nums.length == 1) return nums[0];
  
  let max = nums[0];
  let prevMax = nums[0];
   
  for(let i = 1; i < nums.length; i++) {
      prevMax = Math.max(nums[i], prevMax + nums[i]);
      max = Math.max(prevMax, max);
  }
  
  return max;
};

// same with above:
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let runningTotal = nums[0]
  
  for (let i = 1; i < nums.length; i++) {

    if (runningTotal + nums[i] > nums[i]) {
        runningTotal += nums[i];
    } else {
        runningTotal = nums[i];
    }
      
    if (runningTotal > maxSum) {
        maxSum = runningTotal;    
    }
  }
  
  return maxSum;
};


