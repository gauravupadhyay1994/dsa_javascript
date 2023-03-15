const mergeInterval = function (arr) {
  if (arr.length < 2) return arr;
  arr.sort((a, b) => a[0] - b[0]);
  let i = 0;
  while (i <= arr.length - 2) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i][1] = arr[i + 1][1];
      arr.splice(i + 1, 1);
    }
    i++;
  }
  return arr;
};

let arr = [
  [1, 4],
  [4, 5],
];
console.log(mergeInterval(arr));
