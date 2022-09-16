/*
    we know
        - values are going to be unique
        - target possibly does not exist
        - it is sorted
        
    nums = [4,5,6,7,0,1,2] target = 0

    checks on either side of the value
        - if nums[i + 1] > target we look left
        - if nums[i - 1] < target look right
        - if nums[i] === target return i


  ex: nums = [4,5,6,7,0,1,2] target = 0
             
             [0 1 2]
             
             nums[i + 1] > target? no
             look left
             
             
  ex: [1 2 3 5] target = 4 
      [3 5 1 2]
      
      look in the middle
      nums[i + 1] > target? no 
      look left
      
      [3 5]
        
      [3]

     [1 3 5 7 9 0] target = 0
*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < nums[right]) {
      // we know that the right side is sorted but it could be the pivoted side
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        // strictly on the left side
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
