// is the string has all unique characters?
// for example: "apple" - false, "search" - true

// Solution O(n)
function isUnique(string) {
  const characters = {}
  for (let i = 0; i < string.length; i++) {
    if (characters[string[i]]) {
      return false
    }
    characters[string[i]] = true
  }
  return true
}