function addArrayValuesToObj(array) {
  let comparisonObj = {};
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    if (!comparisonObj[array[i]]) {
      comparisonObj[array[i]] = count;
    } else {
      comparisonObj[array[i]] += 1;
    }
  }

  return comparisonObj;
}

// account for values that are copies of one another
function twoNumberSum(array, targetSum) {
  let comparisonObj = addArrayValuesToObj(array);

  for (let idx = 0; idx < array.length; idx++) {
    let compliment = targetSum - array[idx];
    let complimentEqualToArrVal = compliment === array[idx];

    if (complimentEqualToArrVal && comparisonObj[compliment] === 2) {
      return [compliment, array[idx]];
    }

    if (!complimentEqualToArrVal && comparisonObj.hasOwnProperty(compliment)) {
      return [compliment, array[idx]];
    }
  }

  return [];
}

/**
 * 4/6/22
 *
 * completed
 */

var twoSum = function (nums, target) {
  /*
        iterate through the array
            - subtract the target from the value at index
                - check if we have seen the subtracted value
                    - if we have, return [index, index of subtracted value]
        
        how to hold the subtracted value
            - object
            - key is the value at index
            - value is index
    */

  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]; // comp = 7

    if (comp in obj) {
      return [i, obj[comp]];
    }

    obj[nums[i]] = i;
  }
};
