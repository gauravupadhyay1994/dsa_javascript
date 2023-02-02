function find(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return i;
  }
  return -1;
}

const search = (arr, n) => {
  return arr.indexOf(n);
};

// Big O(n)

// Big O(log(n))

const sortedArray = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == val) return mid;
    else if (arr[mid] < val) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

const searchRecursive = (arr, val, start, end) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] == val) return mid;
  else if (arr[mid] < val) return searchRecursive(arr, val, start + 1, end);
  else return searchRecursive(arr, val, start, end - 1);
};

const recursiveSorted = (arr, val) => {
  return searchRecursive(arr, val, 0, arr.length - 1);
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(recursiveSorted(arr, 10));
