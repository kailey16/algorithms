var isPalindrome = function(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  let left = 0
  let right = str.length-1
  while (right <= str.length-1 && right >= 0) {
      if (str[left] !== str[right]) { return false }
      left++
      right--
  }
  return true
};