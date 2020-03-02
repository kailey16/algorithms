var hammingWeight = function(n) {
    const str = n.toString(2)
    let count = 0
    for (let i = 0; i < str.length; i++) {
        str[i] == 1 ? count++ : null
    }
    return count
};

var hammingWeight = function(n) {
  const str = n.toString(2)
  return str.replace(/[0]/g, "").length
};


// Solutions using bitwise operators

var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
      count++;
      n &= n - 1;
      // n = n & n-1 (bitwise AND assignment operator) 
  }
  return count;
};


var hammingWeight = function(n) {
    let sum = 0;
    
    while(n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    
    return sum;
};
