// Given two strings, write a method to decide if one is a permutation of the other
// Questions 1. is the comparison case sensitive?
// 2. does whitespace matter?


// Solution O(n)
function checkPermutation(s1, s2) {

  if (s1.length !== s2.length) { return false }

  let s1Chas = {}

  for (let i = 0; i < s1.length; i++) {
    if (s1Chas[s1[i]]) {
      s1Chas[s1[i]]++
    } else {
    s1Chas[s1[i]] = 1
    }
  }
  
  for (let i = 0; i < s2.length; i++) {
    s1Chas[s2[i]]--
  }

  for (let i in s1Chas) {
    if (s1Chas[i] !== 0) {
      return false
    }
  }

  return true
}


// Solution O(nlogn)
function isPermutation(a, b) {
  if (a.length !== b.length) {
      return false;
  }
  return a.split("").sort().join() === b.split("").sort().join();
}