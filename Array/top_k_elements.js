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

// 8/29

/*
    hashmap
    
    iterate through the array
        does map contain val?
            if yes add 1
            if no add it to map and set val to 1
    
    [1, 1, 1, 2, 2, 3]
    
    {
        1: 3
        2: 3
    }
    
    create a result array of size n where n is the length of the given nums array
        - we can use the index of this as keys
    
    [4, 4] k = 1
        - count = 2
        - mod by length of the array
            - 2 % 2 = 0
    
    1.) when creating the array
        - have 1 more than the size of nums array
    
    [4,4] nums.length = 2
    results length
    
    2 % 3 = 2 
    
    count = [0,0,2] k = 1
             0 1 2
             
    result = [] -> [2]
*/

var topKFrequent2 = function (nums, k) {
  let hashmap = {};
  let count = new Array(nums.length);
  let result = [];

  nums.forEach((num) => {
    if (num in hashmap) {
      hashmap[num] += 1;
    } else {
      hashmap[num] = 1;
    }
  });

  for (num in hashmap) {
    let modIdx = hashmap[num] % count.length;

    if (count[modIdx]) {
      count[modIdx].push(num);
    } else {
      count[modIdx] = [num];
    }
  }

  // iterate through count
  // how do I know if it's a subArray or not

  let i = count.length - 1;
  while (result.length < k) {
    if (count[i]) {
      for (let num of count[i]) {
        if (result.length === k) break;
        result.push(num);
      }
    }
    i -= 1;
  }

  return result;
};
