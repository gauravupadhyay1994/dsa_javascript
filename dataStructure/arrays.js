const arr = [1, 2, 3, "Gaurav"];

arr.push("Ankit");
arr.unshift("Harsha");
// console.log(arr);s
arr.pop();
arr.shift();
// for (const lol of arr) {
//   console.log(lol);
// }

// Example 1: square all elements of an array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 2: convert an array of objects to an array of strings
const people = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Bob", age: 35 },
];
const names = people.map((person) => person.name);
// console.log(names); // Output: ['John', 'Mary', 'Bob']

// Example 1: concatenate two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray1 = array1.concat(array2);
// console.log("new array 1:", newArray1); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: concatenate three arrays

const array3 = [7, 8, 9];
const newArray = array1.concat(array2, array3);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7

// Example 1: sum all numbers in an array
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((acc, cur) => acc + cur, 0);
// console.log(sum); // Output: 15

// Example 2: find the maximum value in an array of objects
const peopleData = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Bob", age: 35 },
];
const maxAge = peopleData.reduce(
  (acc, cur) => (cur.age > acc ? cur.age : acc),
  0
);
// console.log(maxAge); // Output: 35

// Example 1: filter out even numbers from an array
const numbersFilter = [1, 2, 3, 4, 5];
const oddNumbers = numbersFilter.filter((num) => num % 2 !== 0);
// console.log(oddNumbers); // Output: [1, 3, 5]

// Example 2: filter out people under 30 years old from an array of objects
const peopleFilter = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Bob", age: 35 },
];
const over30 = peopleFilter.filter((person) => person.age >= 30);
// console.log(over30); // Output: [{ name: 'Mary', age: 30 }, { name: 'Bob', age: 35 }]

// Example 1: remove elements from an array
const numbersSplice = [1, 2, 3, 4, 5];
const removed = numbersSplice.splice(2, 2); // remove two elements starting from index 2
// console.log(numbers); // Output: [1, 2, 5]
// console.log(removed); // Output: [3, 4]

// Example 2: replace elements in an array
const numbersSplice2 = [1, 2, 3, 4, 5];
const replaced = numbersSplice2.splice(2, 2, "a", "b"); // replace two elements starting from index 2 with 'a' and 'b'
// console.log(numbersSplice2); // Output: [1, 2, 'a', 'b', 5]
// console.log(replaced); // Output: [3, 4]

//The slice() method returns a new array containing a portion of the original array.

// Example 1: get a subset of an array
const numbersArr = [1, 2, 3, 4, 5];
const subset = numbersArr.slice(2, 4); // get elements from index 2 to index 4 (exclusive)
// console.log(subset); // Output: [3, 4]

// Example 2: create a copy of an array
const original = [1, 2, 3, 4, 5];
const copy = original.slice(); // create a copy of the original array
// console.log(copy); // Output: [1, 2, 3, 4, 5]
