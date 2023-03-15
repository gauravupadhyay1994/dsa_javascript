var longestPalindrome = function (s) {
  let s = "";
  for (let i = 0; i < s.length; i++) {
    let pos = i;
    let j = s.length - 1;
    while (pos <= j) {
      if (s[pos] !== s[j]) {
        if (pos === j || pos === j - 1) {
        }
        pos = i;
        j--;
      }
      if (s[pos] === s[j]) {
        pos++;
        j--;
      }
    }
  }
};
