// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Solution O(n)
var topKFrequent = function(nums, k) {
  let sets = {}
  for (let i = 0; i < nums.length; i++) {
      if (sets[nums[i]]) {
          sets[nums[i]] += 1
      } else {
          sets[nums[i]] = 1
      }
  }
  
  var setsToArr = []
  for (const key in sets) {
      setsToArr.push([key, sets[key]])
  }
  
  setsToArr.sort((a, b) => b[1] - a[1])
  let answer = setsToArr.slice(0, k)
  return answer.map(arr => arr[0])
};