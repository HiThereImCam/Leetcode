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


// 11/18/2022

/*
  KEEP IN MIND
    - COMPRESSION FORMAT IS 'n{subString}'
  idea
    - possibilities to look for
      - open curly braces because thats the start of a substring
      - stack data stucture to keep track of decompressed string
      - create a variable to keep track of the NUMBER 
      - create a helper function to concatenate the string n 
        number of times
      - 
  
  
  questions that we have to think about 
    - what happens when there are nested substrings
      
  
 ex: 2{q} -> qq
      - iterating through the string
      - i see an open brace
         - crreate a sub string
         
  What I couldn't figure out:
    - how do I handle the compressed string
      - i did have an idea of adding values to the output
        array and then popping them off
    
  Questions:
    - how to handle multiple layers of compression
      - string 
      - number
      
  Answer:
    - I was using the stack wrong
  
  "2{q}3{tu}v"
   at 2 -> stack [2]
   at { -> do nothing
   at q -> stack [2, q]
   at } -> we now pop off stack
*/

const strConcat = (number, str) => {
  let iter = 0
  let newStr = ''
  while(iter < number){
    newStr += str 
    iter += 1
  }
  
  return newStr
}

/*
    "2{q}3{tu}v"
    
    stack = [qq, tututu, v]
    
*/

const decompressBraces3 = (s) => {
  const numbers = '123456789'
  let stack = []
   
  
  
  for(let char of s){
    if(char === '{'){
      continue
    }else{
      if(char === '}'){
        let str = ''
        while(!numbers.includes(stack[stack.length - 1])){
          const popped = stack.pop()
          str = popped + str
        }
        let number = parseInt(stack.pop())
        let decompressed = strConcat(number,str)
        stack.push(decompressed)
      } else{
        stack.push(char)
      } 
      console.log(stack)
    }
  }
  
   // console.log('str: ', stack.join(''))
  return stack.join('')
};
