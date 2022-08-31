/*
  amount 3
  [1, 2, 3] 
  1 + 1 + 1 
  1 + 2 
  3
  
  count = 0
  coins[i] = 1 
  amount = 2
    count = 1
    coins[i] = 2
    
*/
const countingChange = (amount, coins) => {
  if (amount < 0) return 0;
  if (amount === 0) return 1;

  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    count += countingChange(amount - coins[i], coins);
  }

  return count;
};
/**
 *
 * Alvin sol
 */

const countingChangeAlv = (amount, coins, i = 0, memo = {}) => {
  const key = amount + "," + i;
  if (key in memo) return memo[key];

  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  const coin = coins[i];

  let count = 0;
  for (let qty = 0; qty * coin <= amount; qty += 1) {
    const remainder = amount - coin * qty;
    count += countingChange(remainder, coins, i + 1, memo);
  }

  memo[key] = count;
  return count;
};
