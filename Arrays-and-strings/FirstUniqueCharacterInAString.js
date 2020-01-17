// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.

// Solution O(n)
var firstUniqChar = function(s) {
  let chars = {}
  for (let i = 0; i < s.length; i++) {
      if (chars[s[i]]) {
          chars[s[i]]++;
      } else {
          chars[s[i]] = 1
      }
  }
  
  for (const key in chars) {
      if (chars[key] === 1) {
          return s.indexOf(key)
      }
  }
  return -1
};