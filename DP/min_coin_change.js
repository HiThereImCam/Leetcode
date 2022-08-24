const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount < 0) return Infinity;

  if (amount === 0) return 0;

  if (amount in memo) return memo[amount];

  let min = Infinity;
  for (let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    min = Math.min(numCoins, min);
  }
  return (memo[amount] = min);
};

// tried again. couldnt get it
// 08/24

/*
  if amount = 0
    I want to return the count
  
  I want to iterate through the array
  
  simplest case is 
  target 10 [8, 2]
  return 1
  
  how do I keep track of the amount of coins needed?
  if amount === 0, what am I returning?
    - returning 0
      - the minimum amount of coins to make 0 cents is 0 coins
  
  how does the memo come into play?
  what I storing as the key value pair?
*/

const minChange2 = (amount, coins) => {
  // iterate through the coins
  if (amount === 0) let;
  for (let coin of coins) {
    let currentCount = 1 + minChange(amount - coin, coins);
  }
};
