function insertionSort(arr) {
  const len = arr.length;
  let elementToInsert;
  for (let i = 1; i < len; i++) {
    elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && elementToInsert < a[j]) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = elementToInsert;
  }
  return arr;
}

// The time complexity of the insertion sort algorithm is O(n^2) in the worst case

// Both insertion sort and bubble sort have a time complexity of O(n^2) in the worst case, where n is the number of elements in the input array. However, in practice, insertion sort is usually faster than bubble sort for several reasons:

// Insertion sort has a better average-case time complexity than bubble sort. In the average case, insertion sort has a time complexity of O(n^2), but bubble sort has a time complexity of O(n^2) as well, and performs more swaps than insertion sort.

// Insertion sort is more efficient when the input array is partially sorted. In this case, insertion sort can take advantage of the existing order to reduce the number of comparisons and swaps needed.

// Insertion sort has a lower space complexity than bubble sort. Insertion sort sorts the input array in place, without requiring additional memory, while bubble sort typically requires a separate temporary variable for swapping elements.

// Therefore, if you are deciding between insertion sort and bubble sort, it is usually better to choose insertion sort for its better performance characteristics. However, there are many other sorting algorithms with better time complexity than either of these algorithms, such as quicksort or mergesort, which may be even more appropriate depending on the specific use case.

const a = [5, 1, 3, -9, 70];
console.log(insertionSort(a));
