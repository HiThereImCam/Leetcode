const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n === 0) return 0;

  let minSquares = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    const square = i * i;
    const numSquares = 1 + summingSquares(n - square, memo);
    minSquares = Math.min(minSquares, numSquares);
  }

  memo[n] = minSquares;
  return minSquares;
};

/*
  count = Infinity
  iterate through the numbers from 1 -> n
    recursive call
    
  base case
    - if(n === 0) return 0
    
  
*/

const summingSquares2 = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;

  let count = Infinity;

  // iterate through the numbers from 1 -> n
  for (let i = 1; i <= n; i += 1) {
    let squared = i * i;
    if (squared <= n) {
      let currCount = 1 + summingSquares(n - squared, memo);
      count = Math.min(count, currCount);
    }
  }

  memo[n] = count;
  return count;
};
