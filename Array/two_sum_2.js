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
