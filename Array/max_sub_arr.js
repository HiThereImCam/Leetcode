let findMaxSubArray = (array) => {
  if (array.length === 0) return 0;

  let result = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    result = Math.max(sum, result);
    sum = sum < 0 ? 0 : sum;
  }
};
