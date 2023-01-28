function sum(a, b) {
  console.log(arguments);
  return a + b;
}

const arrowSum = (a, b) => {
  console.log(arguments);
  return a + b;
};
// console.log(sum(10, 20, 30));
console.log(arrowSum(10, 20, 40));
