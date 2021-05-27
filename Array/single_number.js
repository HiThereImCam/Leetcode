/**
 *
 * Given a non-empty array of integers nums,
 * every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

var singleNumber = function (nums) {
  // what do I return if the num length is 2 and the values are the same?
  // does it equal 0?

  if (nums.length === 1) return nums;

  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]] === undefined) {
      numsObj[nums[i]] = 1;
    } else {
      numsObj[nums[i]] = numsObj[nums[i]] + 1;
    }
  }

  for (let propertyVal in numsObj) {
    if (numsObj[propertyVal] === 1) {
      return propertyVal;
    }
  }
};

// most optimal solution uses bitwise XOR

var singleNumber = function (nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

/**
 * Explanation: 
 * 
 * Great solution, Bitwise XOR little trick to understand. But finally got it.
for example [4,1,2,1,2]
4^1 = 4+1 =5
5^2=5+2=7
7^1= 7-1=6(because we already added 1, as per XOR logic it will subtract)
Similarly 6^2 = 6-2 =4 (because we already added 2, now we have to subtract it as per XOR operator)
 * 
 */
