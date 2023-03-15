var twoSum = function (nums, target) {
  const a = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        a.push(i);
        a.push(j);
        return a;
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
