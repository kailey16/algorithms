// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// think about empty array
// and array which includes 0. ex) [0, 0]

// Solution O(n^2)
var productExceptSelf = function(nums) {
    if (nums.length === 0) return []
    if (nums.length === 1) return [0]

    let output = []
    for (let i = 0; i < nums.length; i++) {
        let multiplied = 1
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                multiplied *= nums[j]
            }
        }
        output.push(multiplied)
    }
    return output
};


// Solution O(n), space complexity O(n)
var productExceptSelf = function(nums) {
    let length = nums.length
    let L = []
    let R = []
    let answer = []
    
    L[0] = 1
    for (let i = 1; i < length; i++) {
        L[i] = L[i-1] * nums[i-1]
    }
    
    R[length-1] = 1
    for (let i = length-2; i >=0; i--) {
        R[i] = R[i+1] * nums[i+1]
    }
    
    for (let i = 0; i < length; i++) {
        answer[i] = L[i] * R[i]
    }
    
    return answer
}
    

// Solution O(n), space complexity O(1)
var productExceptSelf = function(nums) {
  let length = nums.length
  let answer = []
  answer[0] = 1
  for (let i = 1; i < length; i++) {
      answer[i] = answer[i-1] * nums[i-1]
  }
  
  let R = 1
  for (let j = length - 1; j >= 0; j--) {
      answer[j] = answer[j] * R
      R *= nums[j]
  }
  
  return answer   
}