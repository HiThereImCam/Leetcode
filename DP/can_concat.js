/*
  1 recursive call
    - "one"
    iterate through the current array
      2 recursive call
        oneis
    
    
    how do I know that oneis a string that I want
    does s.include current str?

  currStr = '' -> 'one'
               ->  oneoneone
               ->  oneisnone
*/

const canConcat = (s, words, currStr = "") => {
  if (s === currStr) return true;
  if (currStr.length > s.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (canConcat(s, words, currStr + words[i]) === true) {
      return true;
    }
  }

  return false;
};

// note -

const canConcatAlv = (s, words, memo = {}) => {
  if (s in memo) return memo[s];

  if (s.length === 0) return true;

  for (let word of words) {
    if (s.startsWith(word)) {
      let suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo)) {
        memo[s] = true;
        return true;
      }
    }
  }

  memo[s] = false;
  return false;
};
