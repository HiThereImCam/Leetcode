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
      console.log("CountStack: ", countStack);
      console.log("LetterStack: ", letterStack);
      console.log("currentLetter: ", letters[i]);
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
        console.log(countStack);
        console.log(letterStack);
        letterStack.pop();
        countStack.pop();
        currentCount--;
        // console.log("currentLetter: ", letters[i]);
      }
    }
  }
  console.log("result: ", letterStack.join(""));
}
