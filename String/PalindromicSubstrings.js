// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Solution
var countSubstrings = function(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length + 1; j++) {
          let subStr = s.substring(i,j)
          if (palindrome(subStr)) {
              count++;
          }
      }
  }
  return count
};

var palindrome = function(string) {
  return string === string.split("").reverse().join("")
}


// Solution O(n)
var countSubstrings = function(s) {
  const checkPalindrome = (start, end, s) => {
      while (start >= 0 && end < s.length && s[start] === s[end]) {
          count++
          start--
          end++
      }
  }
  
  let count = 0
  for (let i = 0; i < s.length; i++) {
      checkPalindrome(i, i, s)        
      checkPalindrome(i, i+1, s)  
  }
  
return count
}
