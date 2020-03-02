function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"]
  
  const s = str.toLowerCase().replace(/[^a-z]/g, "")
  vowelsCount = s.split("").filter(cha => vowels.includes(cha)).length
  
  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}