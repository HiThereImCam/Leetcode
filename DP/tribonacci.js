let memo = {};
const tribonacci = (n) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  if (n in memo) return memo[n];

  memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  return memo[n];
};

// part 2
function tribonccci2(num, memo = {}) {
  if (num === 0 || num === 1) return 0;
  if (num === 2) return 1;

  if (num in memo) return memo[num];

  memo[num] = tribonacci(num - 3) + tribonacci(num - 2) + tribonacci(num - 1);

  return memo[num];
}
