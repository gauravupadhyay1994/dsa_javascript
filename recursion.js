function fibo(n) {
  if (n == 0 || n == 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
function fibo(n) {
  if (n < 2) return n;
  let first = 0;
  let second = 1;
  let sum = 0;
  for (let i = 2; i <= 10; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}

function factorial(n) {
  if (n == 1) return n;
  return n * factorial(n - 1);
}

function towerOfHanoi(n, src, des, mean, steps = 0) {
  if (n == 1) {
    console.log(src, " ", des);
    steps++;
    return steps;
  }
  steps += towerOfHanoi(n - 1, src, mean, des);
  console.log(src, " ", des);
  steps++;
  steps += towerOfHanoi(n - 1, mean, des, src);
  return steps;
}

// console.log(fibo(10));

// console.log(factorial(5));

console.log("Number of steps: ", towerOfHanoi(4, "a", "c", "b"));
