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
