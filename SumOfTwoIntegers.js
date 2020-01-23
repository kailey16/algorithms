// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

var getSum = function(a, b) {
    let arr = []
    arr.push(a)
    arr.push(b)
    let result = arr.reduce((memo, num) => memo += num, 0)
    return result
};

var getSum = function(a, b) {
  let arr = [a, b]
  let total = 0
  for (let i = 0; i < arr.length; i++) {
      total += arr[i]
  }
  return total
}

// with binarr application
var getSum = function(a, b) {
  let carry;
  
  while(b) {
      carry = a & b;
      a ^= b; // a = a ^ b
      b = carry << 1;
  }
  
  return a;
};