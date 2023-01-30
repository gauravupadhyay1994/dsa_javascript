// this algorithm has O(logn)
function powerOfTwo(n) {
  if (n <= 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 != 0) return false;
    n /= 2;
  }
  return true;
}

// constant time algorithm O(1)
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}

// this function gives power of two in constant time
function powerOfTwo(exponent) {
  return 1 << exponent;
}

console.log(powerOfTwo(16));
