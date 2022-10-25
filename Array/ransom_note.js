/*
    return true if
        - ransomNote can be constructed by
            - using leters from the magazine
    
    note:
        - each letter in the magazine can only be used once in the ransomNote
        
    
    ex:
        ransom note = 'aaaaa'
        magazine = 'aa'
        
        return false because there are not enough letters in the magazine to
        construct the ransom note
        
    idea
        - create object to hold ransom note chars
            - will hold the count of chars
        - iterate through magazine
            - for every character in magazine
                - subtract the count from object that holds the ransom note chars
        - iterate again
            - if any chars count > 0
                return false
                
        return true
*/

/*
      ransom note = 'aaaaa'
        magazine = 'aa'
        
*/

var canConstruct = function (ransomNote, magazine) {
  let ransomCharCount = {};

  for (let char of ransomNote) {
    if (!ransomCharCount[char]) {
      ransomCharCount[char] = 1;
    } else {
      ransomCharCount[char] += 1;
    }
  }

  for (let char of magazine) {
    if (ransomCharCount[char]) {
      ransomCharCount[char] -= 1;
    }
  }

  for (let char in ransomCharCount) {
    if (ransomCharCount[char] > 0) {
      return false;
    }
  }

  return true;
};
