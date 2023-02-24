// map is an unordered collection of key-value pairs.
// both keys and values can be of any data type

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
console.log(map.has("c"));
map.delete("c");
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key} ${value}`);
}
map.clear();
