// Given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
  const str = text.toLowerCase().replace(/[^a-z]/g, "")
  const result = []
  const alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  for (let i = 0; i < str.length; i++) {
    result.push(alp.indexOf(str[i])+1)
  }
  
  return result.join(" ")
}


function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)  // i -> case insensitive
    .map( (c) => c.charCodeAt() - 64)  // str.charCodeAt(index)
    .join(' ');
}
