// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Solution
var countPrimes = function(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
      if (isprime(i)) {
          count++
      }
  }
  
  function isprime(num) {
      let factors = []
      for (let i = 1; i < num + 1; i++) {
          if (num % i == 0) {
              factors.push(i)
          }
      }
      
      if (factors.length == 2) {
          return true
      } else { return false }
  }
  
  return count
};




var countPrimes = function(n) {
  if(n <= 2) return 0;
  
  // first create an array with the same length of n filled with all 'true's
  let arr = []
  for(let i = 0; i < n; i++) {
      arr.push(true)
  }
  
  // implement the Sieve of Eratosthenes algo here (link is provided below)
  // at each iteration, if an element is true (which initially they all are), flip all the multiples of that number to false
  
  for(let i = 2;  i <= Math.floor(Math.sqrt(n)); i++) {
      if(arr[i]) {
          for(let j = i; j * i < arr.length; j++ ) {
              arr[i * j] = false
          }
      }
  }
  
  // only count the remaining elements that are still true
  
  let counter = 0;    
  for(let i = 2; i < arr.length; i ++) {
     if(arr[i]) counter ++
  }
return counter
};