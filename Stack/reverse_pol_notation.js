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

// part 3
let OPERANDS3 = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => Math.trunc(a / b),
  "*": (a, b) => a * b,
};

["2", "1", "+", "3", "*"];

function RPNResults3(tokens) {
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


/*

    [2, 1, +, 3, *]
    
    - we can use a stack here
    
    ["4","13","5","/","+"]
                       i   
    stack = [6]
    
    pop off the first 2
    a = 13 b = 5
    Math.trunc(13/5) => 2
    
    pop off the first 2
    a = 4 b = 2
    4 + 2 = 6
    
    returns 6
    
*/

// helper function that evaluates the expression
// const evalExp = (a, b, token) => {
//     if(token === '+'){
//         return a + b
//     }else if(token === '-'){
//         return a - b
//     }else if(token === '/'){
//         return Math.trunc(a/b)
//     }else{
//         return a * b
//     }
// }


//11/25/2022

const OPERANDS4 = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '/': (a,b) => Math.trunc(a/b),
  '*': (a,b) => a * b
}

/*
     ["4","/"] -> invalid
     ["4", "/", "+"] -> invalid
*/

var evalRPN = function(tokens) {
  // const operands = ['+', '-', '*', '/']
  let stack = []
  
  for(let token of tokens){
      if(token in OPERANDS){
          // we have evaluate the expression
          let b = stack.pop()
          let a = stack.pop() 
          
          let result = OPERANDS[token](a,b)
          stack.push(result)
      }else{
          stack.push(parseInt(token))
      }
  }
  
  return stack.pop()
};