var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in charMap && charMap[s[i]] >= start) {
      // console.log(charMap[i], " ", charMap[s[i]]);
      start = charMap[s[i]] + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    charMap[s[i]] = i;
  }

  console.log(charMap);
  return maxLength;
};

console.log(lengthOfLongestSubstring("acacdef"));
