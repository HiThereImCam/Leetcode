/**
 * Given a sorted array nums, remove the duplicates in-place such that
 *  each element appears only once and returns the new length.
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array  in-place with O(1) extra memory.
 */

var removeDuplicates = function (nums) {
  // create an object where key is num[i] and value is 1
  // if seen, remove value

  // how do I do this in place?
  // how do I remove the value?
  // splice() does not return an new array- splice is an O(n) operation

  let checkValObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!checkValObj.hasOwnProperty(nums[i])) {
      checkValObj[nums[i]] = 1;
    } else {
      // how do I remove the element
      nums.splice(nums[i], 1);
    }
  }

  return nums.length;
};

// has() belongs to Map
// hasOwnProperty belongs to Object
// because splice is shrinking the array, it messes up the indexing and i becomes out of sync

// what i dont know what to do- I dont know how to handle the index when the array shrinks

// you dont manipulate the array because it's only asking for the length
// the pattern - count the number of times the values change. that is the new length

// you increment j in the else so that you can move the pointer over

/**
 * 
 * Solution:
 * 
 * var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    let result = 1, i = 0, j = 1;
    
    while(i < nums.length && j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            result += 1;
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    
    return result;
};
 */
