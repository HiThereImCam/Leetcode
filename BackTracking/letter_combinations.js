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

/**
 * create backtrace function passing it index and empty string
 *
 * base case- if the current string is the same length as the digit
 * push the currStr into the result array
 *
 * other wise, iterate through the current digits string and map the
 * digits to the characters
 *
 * ex: "23"
 *
 * first pass
 * index - 0
 * digits[index] - "2"
 * char - "a"
 *
 * call backtrace passing it 1 and "a"
 *
 * second pass
 *
 * index - 1
 * digits[index] - "3"
 * char - "d"
 *
 * call backtrace passing it 2 and "d"
 *
 * enter condional
 * result = ["ad"]
 * and return
 *
 */
