/*
  subsequnce
    - back tracking
    
  l u w x u l t
  
  
  
*/

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  let key = i + "," + j;
  if (key in memo) return memo[key];

  if (i === j) return 1; // 'b'
  if (i > j) return 0; // ''

  if (str[i] === str[j]) {
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, i + 1, j, memo), // remove first ele
      maxPalinSubsequence(str, i, j - 1, memo) // remove last ele
    );
  }

  return memo[key];
};
