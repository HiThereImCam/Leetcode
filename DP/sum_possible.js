/*
  difference var 
  
  initial idea
    - iterate through the array
      - can if value is a multiple via mod
        - then we just return true
      - save the compliment?
        - 8 - 5 = 3
          {
            5: index
          }
    - what is my base case?
    - what don't i understand?
       - I am not sure what my base case is
       - I do not know when to save a value
       - i do not know when to use a saved value
       
    what am i storing in the memo?
      - what is the key/value?
      - {
        amount: true
      }
       
       
    8 [5, 2, 4]
*/

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;

  if (amount in memo) return memo[amount];

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};

sumPossib;
