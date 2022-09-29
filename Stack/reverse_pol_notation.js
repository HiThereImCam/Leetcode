/*
    2 1 + 3 *
    
    "*"
    "* 3"
    + * 3
    + 1 * 3
    (2 + 1) * 3
    
    
    iterate through tokens
    -->
    put nums into stack

    when operator is encountered, pop nums off the stack and use operator
    
    
*/

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

var evalRPN = function (tokens) {
  let stack = [];

  for (const token of tokens) {
    if (token in OPERATORS) {
      const right = stack.pop();
      const left = stack.pop();

      stack.push(OPERATORS[token](left, right));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};

// 09/1/2022
// got it

// [4, 13, 5, /, +]

// stack = [4, 13, 5]
// right = 5
// left  = 13

// stack = [4]
// val  = 2

// stack = [4, 2]

let OPERANDS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => Math.trunc(a / b),
  "*": (a, b) => a * b,
};

["2", "1", "+", "3", "*"];

function RPNResults(tokens) {
  let stack = [];

  for (let token of tokens) {
    if (token in OPERANDS) {
      let right;
      let left = stack.pop();
      let val = OPERANDS[token](left, right);

      stack.push(val);
    }

    stack.push(Number(token));
  }

  return stack.pop();
}
