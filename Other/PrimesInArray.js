// Solution
function primesInArray(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (prime(arr[i])) {
      result.push(arr[i])
    }
  }
  return result

  function prime(num) {
    let factors = []
    for (let i = 1; i < num + 1; i++) {
      if (num % i == 0) {
        factors.push(i)
      }
    }
    return factors.length === 2 ? true : false
  }
}

