// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// "()[]{}" "{[]}" true
// "(]" "([)]" false

var isValid = function(string) {
  const characters = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  const l = string.length

  if (l % 2 !== 0) {
    return false
  } else if (string[l-1] === characters[string[0]]) {
    if (l > 2) {
      for (i=1; i < l/2; i++) {
        return string[l-1-i] === characters[string[i]] ? true : false
      }
    }
    return true
  } else if (string[1] === characters[string[0]]) {
    if (l > 2) {
      for (i=2; i < l-1; i += 2) {
        return string[i+1] === characters[string[i]] ? true : false
      }
    }
    return true
  } else { return false }
};