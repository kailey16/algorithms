// toCamelCase("the-stealth-warrior") returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") returns "TheStealthWarrior"

function toCamelCase(str) {
  if (str === "") return "";
  
  let re = /[_-]/g
  let arr = str.split(re)
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
  }
  
  return arr.join("")
}

const toCamelCase = str => {
  return str.replace(/[_-][a-zA-Z]/g, e => e[1].toUpperCase());
}