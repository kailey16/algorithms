const fib = function(N) {
  if (N === 0) { return 0 }
  if (N === 1) { return 1 }

  return fib(N-1) + fib(N-2)
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
