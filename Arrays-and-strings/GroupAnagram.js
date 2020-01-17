// Given an array of strings, group anagrams together.

// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// go through each string and sort it and group together

// Solution O(n)
var groupAnagrams = function(strs) {
  let groups = {};
  for (let i = 0; i < strs.length; i++) {
      let sortedStr = strs[i].split("").sort().join("")
      if (groups[sortedStr]) {
          groups[sortedStr].push(strs[i])
      } else {
          groups[sortedStr] = [strs[i]]
      }
  }
  
//   let groupsArray = [];
//   for (let key in groups) {
//       groupsArray.push(groups[key])
//   }
//   return groupsArray
    return Object.values(groups)
};