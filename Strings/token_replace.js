/*
  this might be stack problem
   - where i look for the $
   
  could this be anything else?
    - queue?
      - test 5 wants me to run from front to back
      
  okay so it might be a queue
  
  idea
    - iterate through the queue until i find '$'
      - conditional
        - if '$'
          - could have a flag but feels messy
          - slicing doesn't work because i'd need the idx
          - iterate again til the next $
            - worst case would be O(n^2)

  what if I try to find all of the indices with '$'? 
    - that way i could just slice
  what if I just turn the string into array?
  

*/

const tokenReplace = (s, tokens) => {
  let i = 0;
  let j = 1;
  let result = [];

  while (i < s.length) {
    if (s[i] !== "$") {
      result.push(s[i]);
      i += 1;
      j = i + 1;
    } else if (s[j] !== "$") {
      j += 1;
    } else {
      let word = s.slice(i, j + 1);
      result.push(tokens[word]);
      i = j + 1;
      j = i + 1;
    }
  }

  return result.join("");
};
