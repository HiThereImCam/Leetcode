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
