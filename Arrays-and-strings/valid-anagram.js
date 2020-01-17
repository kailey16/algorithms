// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Solution O(n)
var isAnagram = function(s, t) {
    
  if (s.length !== t.length) {
      return false
  }
  
  var cha = {}
  for (let i = 0; i < s.length; i++) {
      if (cha[s[i]]) {
          cha[s[i]] += 1
      } else {
          cha[s[i]] = 1
      }
  }
  
  for (let i = 0; i < t.length; i++) {
      if (cha[t[i]]) {
          cha[t[i]] -= 1
          if (cha[t[i]] < 0) {
              return false
          }
      } else { return false }
  }
  return true
  
};