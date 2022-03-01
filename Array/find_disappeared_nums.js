const findDisappearedNums = (nums) => {
  // brute force

  let numsLength = nums.length;
  let flags = new Array(numsLength).fill(false);
  let result = [];

  for (let i = 0; i < numLength; i++) {
    flags[nums[i] - 1] = true;
  }

  for (let j = 0; j < flags.length; j++) {
    if (flags[j] === false) result.push(j + 1);
  }

  return result;
};
