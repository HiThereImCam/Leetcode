const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;

  let include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  let exclude = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(include, exclude);
  return memo[i];
};
