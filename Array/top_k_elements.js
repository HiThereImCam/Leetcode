/*
    algorithm must be better than n log n
    
    [1, 4, 2, 2, 4, 4, 5] k = 2
    [2,4]
    
    result = []
    
    if we store value in 
    hashMap = { 
        1:1
        2:2
        4:3
        5:1
    }
    
    
            
    iterate through object
        decrement through result array
            - if current value > result value
                - remove first element
                - result = 

                
*/

var topKFrequent = function (nums, k) {
  let map = {};
  let container = new Array(nums.length);
  let result = [];

  // iterate through nums and count
  for (let num of nums) {
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  // use index as count
  for (let key in map) {
    let currVal = map[key];

    if (container[currVal]) {
      container[currVal].push(key);
    } else {
      container[currVal] = [key];
    }
  }

  let i = container.length - 1;

  // find the top k
  while (result.length < k) {
    if (container[i]) {
      for (let ele of container[i]) {
        if (result.length === k) {
          break;
        }

        result.push(ele);
      }
    }

    i -= 1;
  }

  return result;
};
