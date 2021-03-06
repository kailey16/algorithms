// Given a string, find the length of the longest substring without repeating characters.

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Solution O(n)
var lengthOfLongestSubstring = function(str) {
    
  var longestLength = 0
  var tmp = []
  
  for (const char of str) {
      const idx = tmp.indexOf(char);
      if (idx > -1) { 
          tmp = tmp.slice(idx + 1) 
      }
      
      tmp.push(char);  
      
      if (tmp.length > longestLength) { longestLength = tmp.length }
  }
  
  return longestLength;
}