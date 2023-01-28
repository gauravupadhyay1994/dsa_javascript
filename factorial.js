// basic factorial
function fact(n) {
  let val = 1;
  for (let i = 2; i <= n; i++) {
    val = val * i;
  }
  return val;
}

// factorial using BigInt

function factorialN(n) {
  if (n === 0n || n === 1n) {
    return 1n;
  }
  return n * factorialN(n - 1n);
}

// factorial using array
function factorial(n) {
  let result = [1];
  for (let i = 2; i <= n; i++) {
    result = multiply(result, convertToarray(i));
  }
  return result;
}

function convertToarray(n) {
  let result = [];
  while (n >= 1) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}
function multiply(num1, num2) {
  let result = new Array(num1.length + num2.length).fill(0);
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      result[i + j] += num1[i] * num2[j];
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] %= 10;
    }
  }
  while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
  }
  return result;
}
console.log(factorialN(10n));

// console.log(fact(100));
