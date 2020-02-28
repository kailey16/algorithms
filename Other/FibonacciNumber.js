const fib = function(N) {
  if (N === 0) { return 0 }
  if (N === 1) { return 1 }

  return fib(N-1) + fib(N-2)
}


const fib = function(N) {
  const sequence = {}
  if (N == 0) return 0
  
  const addTwoBefore = N => {
    if (N <= 2) { return 1 }
    if (!(N in sequence)) {
      sequence[N] = addTwoBefore(N-1) + addTwoBefore(N-2)
    return sequence[N]
    }
  }
  
  return addTwoBefore(N)
};