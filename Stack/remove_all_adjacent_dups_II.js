//   LR
// "abbaccca", k=2
//  LR
// "aaccca"
// "ccca"
// "ca"

/*
  length of string: 0 < n < 40
  k: 2 <= k <= n

  idea
    - sliding window where size of window === k
    - when to stop
      - when size of the current string is < window
      - size === window size but the characters are not equal

  window size = 2 
  letters = 'a'

  window size = 2
  letters = 

  "abbaccca", k=2
   aaabbccc.     
   ij
  
  is letters[j] === letters[i]
    - keep running k times
  str = str.slice(k) "aaabbccc" -> 'abbccc'
  str


  abbaccca
  i j

  count: 0
  if(currEle === nextEle) count = 1
  increment j to move to the next 
  keep doing this until the count === k
  slice from i j


  abbaccca, k = 2
  length: 8
  i: 1
  j: 2
  count: 1
  currEle: b
  nextEle: b

  aaccca
  currEle: a
  nextEle: a
  count 
*/
function simplify(letters, k) {
  let i = 0;
  let j = i + 1;
  let count = 1;
  while (j < letters.length) {
    let currEle = letters[i];
    let nextEle = letters[j];

    if (currEle !== nextEle) {
      i += 1;
      j = i + 1;
      continue;
    }

    if (currEle === nextEle) {
      if (count === k) {
        letters = letters.slice(i, j);
        i = 0;
        j = i + 1;
        count = 1;
      }
      count += 1;
      j += 1;
    }
  }

  console.log("letters: ", letters);

  //return letters
}

// wrong
// below is michael's solution

function simple(letters, k = 2) {
  let countStack = [];
  let letterStack = [];
  let currentCount = 1;
  for (let i = 0; i < letters.length; i++) {
    if (letterStack.length == 0) {
      letterStack.push(letters[i]);
      countStack.push(1);
      continue;
    }

    if (letterStack[letterStack.length - 1] == letters[i]) {
      currentCount = countStack[countStack.length - 1] + 1;
    }

    letterStack.push(letters[i]);
    countStack.push(currentCount);

    console.log(countStack);
    console.log(letterStack);
    // console.log("currentLetter: ", letters[i]);

    if (currentCount === k) {
      console.log("Popping off stacks-------");
      while (currentCount >= 1) {
        letterStack.pop();
        countStack.pop();
        currentCount--;
        // console.log("currentLetter: ", letters[i]);
      }
    }
  }
  console.log("result: ", letterStack.join(""));
}

// part 2 09/13/22
/*

    s = 'eeee' k = 2
    
    charStack = []
    countStack = []
    
    i = 2
    s.length = 4
    k = 2
    
    currChar = e
    

    deeeddd
    
    [dee]
    [11]
    i = 3
    
*/
var removeDuplicates = function (s, k) {
  let charStack = [];
  let countStack = [];

  for (let char of s) {
    if (char !== charStack[charStack.length - 1]) {
      charStack.push(char);
      countStack.push(1);
    } else {
      // means that the char is equivalent to top of stack
      charStack.push(char);
      countStack.push(countStack[countStack.length - 1] + 1);

      // now check if top of stack is === k
      if (countStack[countStack.length - 1] === k) {
        let count = 0;
        while (count < k) {
          charStack.pop();
          countStack.pop();
          count += 1;
        }
      }
    }
  }

  return charStack.join("");
};

// 09/28/2022
/*
    what are we looking for?
        - we are looking for substrings that are of k length and removing them
    
    this falls under stack
        - why?
        - we are keeping track of
            1.) the history of our characters
            2.) the count of our characters
*/

var removeDuplicates = function (s, k) {
  let charStack = [];
  let countStack = [];

  for (let char of s) {
    let topOfCharStack = charStack[charStack.length - 1];

    if (char === topOfCharStack) {
      charStack.push(char);

      let charCount = countStack[countStack.length - 1] + 1;
      countStack.push(charCount);

      if (charCount === k) {
        while (charCount > 0) {
          charStack.pop();
          countStack.pop();
          charCount -= 1;
        }
      }
    } else {
      charStack.push(char);
      countStack.push(1);
    }
  }

  return charStack.join("");
};
