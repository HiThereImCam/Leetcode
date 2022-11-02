/*
    stack 
    iterate through the array 
    
    [75, 74, 73, 72, 71, 76]
      
    currMax = 76
    [75, 74, 73, 72, 71]
    
    pop off stack
        count = 1
    
    [75, 74, 73, 72, 71]
        every value in the stack corresponds to how many days it will
        take to get warmer
        
    [30, 60, 90]
    currMax = 30
    count = 0
    [30]
    
    
    
    [73,74,75,71,69,72,76,73]
    stack = [73]
    result = []
    max = 73
    i = 1
    val = 74
*/

var dailyTemperatures = function (temperatures) {
  let stack = [];
  let max = 0;
  let result = [];

  let i = 0;
  while (i < temperatures.length) {
    let val = temperatures[i];
    if (stack.length < 1) {
      stack.push(val);
      max = val;
    } else if (val > max) {
      while (stack.length > 0) {
        result.push(stack.length);
        stack.pop();
      }
      max = val;
      stack.push(val);
    } else {
      stack.push(val);
    }

    i += 1;
  }

  // if there are values still in stack, iterate through stack and push 0's to result

  for (let el of stack) {
    result.push(0);
  }

  return result;
};

const dailyTemperaturesSol = (temps) => {
  const stack = [];
  const output = new Array(temps.length).fill(0);

  for (let i = 0; i < temps.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1][0] < temps[i]) {
      const [temp, idx] = stack.pop();
      output[idx] = i - idx;
    }

    stack.push([temp[i], i]);
  }

  return outout;
};

// part 2

var dailyTemperatures2 = function (temperatures) {
  let stack = [];
  let max = 0;
  let result = [];

  let i = 0;
  while (i < temperatures.length) {
    let val = temperatures[i];
    if (stack.length < 1) {
      stack.push(val);
      max = val;
    } else if (val > max) {
      while (stack.length > 0) {
        result.push(stack.length);
        stack.pop();
      }
      max = val;
      stack.push(val);
    } else {
      stack.push(val);
    }

    i += 1;
  }

  // if there are values still in stack, iterate through stack and push 0's to result

  for (let el of stack) {
    result.push(0);
  }

  return result;
};
