const repeat = (str, n) => {
  let result = "";

  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};

const decompressBraces = (s) => {
  const numberChars = "123456789";
  const stack = [];

  for (let char of s) {
    if (numberChars.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === "}") {
        // popping subroutine
        let segment = "";
        while (typeof stack[stack.length - 1] !== "number") {
          let poppedVal = stack.pop();
          segment = poppedVal + segment; // 'a' + '' = 'a'
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if (char !== "{") {
        // alpha character
        stack.push(char);
      }
    }
  }

  return stack.join("");
};
