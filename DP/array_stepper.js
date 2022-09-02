/*
  iterate through the array
  nums[0]
  
  4
  1 + 1 + 1 + 1
  1 + 1 + 2
  2 + 2
  1 + 3
  
  [2, 4, 2, 0, 0, 1]
   
   
  i: 0
  currEle: 2
    i = 1 
    1 < 4
      i +
*/

const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length - 1) return true;

  const maxStep = nums[i];
  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};
