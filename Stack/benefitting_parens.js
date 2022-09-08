/*
  why is this a stack problem?
  
  what i can do is-
    if I do have a stack, check if the stack is empty
      - if empty, push val onto stack
  
  if the currVal and the top of the stack are opposites of each other,
  pop off the stack
  
  )(
  
  would be false?
  yes
  
*/

const befittingBrackets = (str) => {
  let stack = [];
  let parens = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let ele of str) {
    if (ele in parens) {
      stack.push(ele);
    } else {
      if (stack.length > 0 && parens[stack[stack.length - 1]] === ele) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
};
