const merge = function (arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  while (i > 0 && j > 0) {
    if (arr2[j] < arr1[i]) {
      arr2[j], (arr1[i] = arr1[i]), arr2[j];
      j--;
    }
    if (arr2[j] >= arr1[i]) {
      i--;
    }
  }
};
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
merge(arr1, arr2);
console.log("Arr1 ", arr1);
console.log("Arr2 ", arr2);
