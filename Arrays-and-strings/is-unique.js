// is the string has all unique characters?
// 1. for example: "apple" - false, "search" - true

function isUnique(string) {
  const characters = []
  for (let i = 0; i < string.length; i++) {
    if (characters.includes(string[i])) {
      return false
    }
    characters.push(string[i])
  }
  return true
}