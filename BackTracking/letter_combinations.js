var letterCombinations = function (digits) {
  let result = [];
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let backtrace = (index, currStr) => {
    if (currStr.length == digits.length) {
      result.push(currStr);
      return;
    }

    for (let char of map[digits[index]]) {
      backtrace(index + 1, currStr + char);
    }
  };

  if (digits.length > 0) {
    backtrace(0, "");
  }

  return result;
};
