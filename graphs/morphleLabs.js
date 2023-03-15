function outputString(arr) {
  const output = [];

  function innerFunctionToStorOutput(curr, index) {
    if (index === arr.length) {
      output.push(curr);
      return;
    }

    for (let i = 0; i < arr[index].length; i++) {
      innerFunctionToStorOutput(curr + arr[index][i], index + 1);
    }
  }

  innerFunctionToStorOutput("", 0);

  return output;
}

//yashesh@morphle.in

const arr = ["ab", "cd", "xy"];
console.log(outputString(arr));
