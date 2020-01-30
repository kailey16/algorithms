// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// Solution, doesn't work for the case S = "aa", T = "aa"
var minWindow = function(s, t) {
  const chars = t.split("").sort()
  let check = []
  let result = []
  
  for (let i = 0; i < s.length; i++) {
      if (chars.includes(s[i])) {
        check[s[i]] = i

        let vals = Object.values(check)
        if (vals.length == chars.length) {
          let index = vals.sort((a,b) => a - b)
          let string = s.slice(index[0], index[index.length-1] + 1)
          result.push(string)
        }
      }
  }
  
  if (result.length > 0) {
      return result.sort((a,b) => a.length - b.length)[0]
  } else { return "" }
};




function minWindow(s, t) {
  let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);

  let count = t.length;   // remaining matching count

  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;

    while (count === 0) {   // valid
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }

      if (map[s[l++]]++ === 0) count++; // make it invalid
    }
  }

  return minLen === Infinity ? '' : s.substr(start, minLen);
}