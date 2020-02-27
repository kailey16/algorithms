// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  let divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) { 
      number /= divisor;
    } else {
      divisor++;
    }
  }
  return divisor
}