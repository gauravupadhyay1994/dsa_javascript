function fiboSum(n) {
  let first = 0;
  let second = 1;
  let sum = first + second;
  for (let i = 2; i < n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}

function fiboR(n) {
  if (n == 2 || n == 3) {
    return 1;
  }

  return fiboR(n - 1) + fiboR(n - 2);
}

console.log(fiboR(10));
