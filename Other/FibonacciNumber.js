// O(2^n)
const fib = function(N) {
  if (N === 0) { return 0 }
  if (N === 1) { return 1 }

  return fib(N-1) + fib(N-2)
}


// O(2n)
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

var fib = function(N) {
  const memo = {}
  if (N == 0) return 0
  
  const rec = n => {
      if (n <= 2) { return 1 }
      if (!(n in memo)) { return memo[n] = rec(n-1) + rec(n-2) }
      return memo[n]
  }

  return rec(N)
};


// O(n)
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}