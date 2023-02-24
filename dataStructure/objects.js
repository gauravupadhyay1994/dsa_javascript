// An object is unordered collection of key value pairs. The key must either be a string or
// symbol data type where as the value can be of any data type

//In JavaScript, the Symbol data type is a primitive data type that was introduced in ECMAScript 2015 (ES6). It represents a unique identifier that can be used as a property key in objects.

//Here is an example of creating a Symbol:

const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
// console.log(sym1 === sym2); // Output: false

const obj = {
  name: "Gaurav",
  age: 25,
  sayMyName: function () {
    return this.name;
  },
};

// console.log(obj.sayMyName());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const keys = Object.keys(obj1);
console.log(keys); // Output: ['a', 'b', 'c']

const values = Object.values(obj1);
console.log(values); // Output: [1, 2, 3]

const entries = Object.entries(obj1);
console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
