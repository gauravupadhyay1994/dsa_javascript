function bubble(arr) {
  const len = arr.length;
  let notSwapped;
  do {
    notSwapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (a[i] > a[i + 1]) {
        notSwapped = true;
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
      }
    }
  } while (notSwapped);
  return arr;
}

// BigO= O(n^2)

const a = [5, 1, 3, -9, 70];
console.log(bubble(a));
