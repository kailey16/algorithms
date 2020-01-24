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
  const lefts = ["{", "[", "("]
  const l = string.length

  if (l % 2 !== 0) { return false }
  
  let stack = []
  for (let i = 0; i < l; i++) {
      if (lefts.includes(string[i])) {
          stack.push(string[i])
      } else {
          if (string[i] !== characters[stack.pop()]) {
              return false
          }
      }
  }
  return stack.length === 0 ? true : false
};