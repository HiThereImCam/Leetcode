/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  /*
        two-pointers
            - except that they start at position 0
        
        i, j = 0
        
        let result = []
        iterate through the array via i
            - tempVal = 1 to multiply val to
            iterate through array via j
                if i==j continue
                    -  cannot multiply self
                tempVal = tempVal * nums[j]
            - push tempVal into result
    */

  /*
        nums = [1,2,3,4]
        result = [24,]
        i = 0 1
        j = 0 1 2 3 0 1 2 
        tempVal = 1 2 6 24 1 1 3 12 
        nums[j] = 2 3 4 1 
    */
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let tempVal = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      tempVal = tempVal * nums[j];
    }
    result.push(tempVal);
  }

  return result;
};

// Time complexity = O(n^2) STILL

/*
    the fastest js version

    
    var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};
    nums = [1,2,3,4]
    result = [1] [1,1] [1,1,2] [1,1,2,6]
    productSoFar = 1 1 2 6 24
    result[i] = 1 2 3 4 
    i = 0 1 2 3

    second loop
    result =  [1,1,2,6] [1,1,2,6] [1,1,8,6] [1,12,8,6] [24,12,8,6] 
    productSoFar = 1 4 12 24
    result[j] = 6 2 1 1 
    nums[j] = 4 3 2 1
    j = 3 2 1 0 
*/

// 11/29/2022
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    brute force approach
        - n^2 solution
    
    idea
        - 
     


*/

var productExceptSelf2 = function(nums) {
  let output = new Array(nums.length).fill(1)
  let pre = 1
  let post = 1
  
  for(let i = 0; i < nums.length; i++){
      output[i] = pre
      pre *= nums[i]
  }
  
  for(let j = nums.length - 1; j >= 0; j -= 1){
      output[j] *= post
      post *= nums[j]
  }
  
  return output
};