const fiveSort = (nums) => {
  /*
    nums = [4,5,1,3,5,8]
              i       j
    
    iterate through the array
    if(i === 5)
      swap i j
      decrement j 
       
    increment i 
  */
  let i = 0;
  let j = nums.length - 1;

  /*
    nums = [4,5,1,3,5,8]
    i = 0 1 2 3 
    j = 5 4 3
    
    nums = [4,5,1,3,5,8] [4,8,1,3,5,5] 
    nums[i] = 5 8 1
    nums[j] = 8 5 3
    temp = 5
    
    [5,1,5,5,5,5] [1,5,5,5,5,5]
    i = 0 1
    j = 5 4 3 2 1 0
    nums[i] = 5 5
    nums[j] = 5 1 5 
    temp = 5
    
    
  */
  while (i < j) {
    if (nums[i] === 5 && nums[j] !== 5) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j -= 1;
    }
    if (nums[j] === 5) {
      j -= 1;
      continue;
    }
    i += 1;

    /*
      can be cleaner
      while(i < j){
        if(nums[j] === 5){
          j -= 1
        }else if(nums[i] === 5){
          swap method
          [nums[i], nums[j]] = [nums[j], nums[i]]
          i += 1
        }else{
          i += 1
        }
      }
    */
  }
  return nums;
};
