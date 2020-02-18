function isPrime (n) {
  if (n < 2) return false;

  var q = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= q; i++) {
      if (n % i == 0) {
        return false;
      }
  }
  return true;
}