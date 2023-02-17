function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const a = [5, 1, 3, -9, 70];

console.log(mergeSort(a));

//Merge sort has a worst-case time complexity of O(n log n), making it a very efficient sorting algorithm. However, it also has a space complexity of O(n), as it requires creating new arrays to hold the sub-arrays during the sorting process.
