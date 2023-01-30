function sieveOfEratosthenes(n) {
  let primes = Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  let result = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//Miller-Rabin primality test
function isPrime(n, k = 10) {
  if (n <= 1 || (n > 2 && n % 2 === 0)) {
    return false;
  }
  let d = n - 1;
  let s = 0;
  while (d % 2 === 0) {
    d /= 2;
    s++;
  }
  for (let i = 0; i < k; i++) {
    let a = Math.floor(Math.random() * (n - 2)) + 2;
    let x = powMod(a, d, n);
    let y = 0;
    for (let j = 0; j < s; j++) {
      y = (x * x) % n;
      if (y === 1 && x !== 1 && x !== n - 1) {
        return false;
      }
      x = y;
    }
    if (y !== 1) {
      return false;
    }
  }
  return true;
}

function powMod(base, exponent, modulus) {
  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    base = (base * base) % modulus;
    exponent = exponent >> 1;
  }
  return result;
}
