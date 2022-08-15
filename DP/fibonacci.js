const cache = {};
const fib = (n) => {
  if (n === 0 || n === 1) return n;

  if (n in cache) return cache[n];

  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
};
