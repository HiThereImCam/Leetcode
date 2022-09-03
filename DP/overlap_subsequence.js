/*
                dogs daogt
                    i     j
                
                base
                  is i === str1.length || j === str2.length?
                    - return 0
                
                  
                case 
                  - if str1[i] === str2[j]
                      1 + recursive call      

                  
                  ab          aa
                   i           j
                  
                  there can be 2 paths where I check
                  1.) b and increment j
                  2.) a and increment i
                  
                  Math.max(
                    the two recursive calls
                  )
                  
                  dogs      daogt
               i          j
                  
                  
                  aa     ab         
*/

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  let key = i + "," + j;
  if (key in memo) return memo[key];

  if (str1.length === i || str2.length === j) return 0;

  if (str1[i] === str2[j]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(str1, str2, i, j + 1, memo),
      overlapSubsequence(str1, str2, i + 1, j, memo)
    );
  }

  return memo[key];
};

// T(c) = n * m
// down from 2^(n*m)
// for a char in str1 I have to do length of str2 work to find a matching character
