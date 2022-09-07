// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

/*                i
	nums = [-2,1,-3,4,-1,2,1,-5,4]
  
  -2 + 1 = -1
  [-2, 1] 
  [-2, 1, -3] = -4 
  
  simplest case: [1]
  
  base case:
  	- if (arr.length === 1) return arr[0]
    											arr: [-2]
                          arr: [-2, 1]
    											currVal: -2
  
  result = [4]
  sum = 4
  currentSum = [4]
  
	
  i: 0
  totalSum: -Infinity
  arr[i]:  -2
  currentSum: -2 +
  									recursiveCall
                    	i = 1
                      arr[i] = 1
                      totalSum = -2
                      currentSum = 1 + (-Infinity)
                      
*/

const maxSubArray = (arr, i = 0, totalSum = -Infinity) => {
  if (arr[i] < totalSum) return -Infinity;
  if (i === arr.length - 1) return arr[i];

  while (i < arr.length) {
    if (arr[i] > totalSum) {
      let currentSum = arr[i] + largestSum(arr, i + 1, arr[i]);
      totalSum = Math.max(totalSum, currentSum);
    } else {
      totalSum = arr[i];
    }
  }

  return totalSum;
};

// this is what I got

var maxSubArraySOL = function (nums) {
  let curr = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(max, curr);
  }
  return max;
};
