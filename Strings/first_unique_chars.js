/*
    a set can help because keeps the order in which elements are stored
        - can also determine uniqueness

    iterate through the string
        - add values that are unique to set
        
    if set is empty return -1
    else{
        iterate through string again
            if set has character
                return idx + 1
    }


    a b a a
   
    currVal = a
    uniqueChars{
        b
    } 
    
    nonUnique {
        a
    }
*/

function getUniqueCharacter(s) {
  let uniqueChars = new Set();
  let nonUnique = new Set();

  for (let idx = 0; idx < s.length; idx++) {
    let currVal = s[idx];
    if (nonUnique.has(currVal)) {
      continue;
    } else if (uniqueChars.has(currVal)) {
      uniqueChars.delete(currVal);
      nonUnique.add(currVal);
    } else {
      uniqueChars.add(currVal);
    }
  }

  if (uniqueChars.size < 1) return -1;

  for (let j = 0; j < s.length; j++) {
    if (uniqueChars.has(s[j])) {
      return j + 1;
    }
  }
}
