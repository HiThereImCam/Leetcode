function operands(val) {
  if (val === "./") {
    return 0;
  } else if (val === "../") {
    return -1;
  } else {
    return 1;
  }
}

function fileSystem(arr) {
  let count = 0;
  let obj = {
    "./": 0,
    "../": -1,
  };

  for (let i = 0; i < arr.length; i++) {
    let currOperator = arr[i];
    if (count === 0 && operands(currOperator) === -1) {
      continue;
    }

    count += operands(currOperator);
  }

  return count;
}

var minOperations = function (logs) {
  const opStack = [];

  for (let log of logs) {
    if (log === "../") {
      if (opStack.length > 0) opStack.pop();
    } else if (log !== "./") {
      opStack.push(log);
    }
  }

  return opStack.length;
};
