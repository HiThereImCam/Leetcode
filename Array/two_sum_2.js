var twoSum = function (numbers, target) {
  /*
        given that the array is sorted
            2 pointers
                - left/right pointers
                
                is target === left + right?
                    return
                is target - (left + right) < 0
                    decrement right
                    cont
                is target - (left + right) > 0
                    increment left
                    cont 
        
        [1, 2, 5, 7, 10, 11] target 9
        
        right = 11 10 7
        left = 1 2
        sum = 12 11 8 9
        
    */

  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    let left = numbers[i];
    let right = numbers[j];
    if (target === left + right) {
      return [i + 1, j + 1];
    }

    if (target - (left + right) < 0) {
      j -= 1;
      continue;
    }
    if (target - (left + right) > 0) {
      i += 1;
      continue;
    }
  }
};

/*
    key here is 2 pointer because of sorted array
    
*/

// 09/02/22
/*
    [2 7 11 15]
     i j 
    
    
    [2 3 4] target 6
     i   j 
     
     [7 8 9] target = 17
        i j
    
     [-4, -3, -1] target = -2 
     
     is Math.abs(i) > target?
        - move i up
     is Math.abs(j) > target
        - move j down
    
    [-4 -3 -1] target = -2 
    
    nums[i] = -3
    nums[j] = -1
    
    returns [2, 3]
*/

var twoSum2 = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i <= Math.floor(numbers.length / 2)) {
    //if(Math.abs(target) - Math.abs(numbers[i]) === numbers[j]) return [i + 1, j + 1]
    if (Math.abs(numbers[i]) > target) {
      let diff = Math.abs(numbers[i]) - Math.abs(target);
      if (diff === numbers[j]) return [i + 1, j + 1];
      i += 1;
      continue;
    } else {
      if (Math.abs(target) - Math.abs(numbers[i]) === numbers[j])
        return [i + 1, j + 1];
      j -= 1;
      continue;
    }
  }
};
