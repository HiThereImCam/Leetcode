/*
  i have options to choose
    - whether or not I want the next element
    
  - the next value that I can choose can only be values > currEle
  
                              4
                  18    20    10    12    15    19
                20  19  ""  12,15,19
                              12
                            15  19
                              
  what is my basecase?
    - 0
    - work towards 0
    
  what do I need
    - count of the maxIncreasingSubseq
    - for every element in the array
    
    current ele: 4
    the rest of arr: [18 20 10 12 15 19]
    

  ideas
    - while iterating through the rest of the array
      - if(currEle > the first element){
          then we make our recursive calls
      }

    numbers = [4, 18, 20, 10, 12, 15, 19];
    
    count: 0
    first: 4
    sliced: [ 18, 20, 10, 12, 15, 19 ]
    currEle: 18 
    
    recursive call
    count: 1
    first: 18
    sliced: [20, 10, 12, 15, 19 ]
    currEle: 20
    
    currCount = 1
    
    recursive call
    count: 0
    first: 19
    sliced: []
    
  if(idx === numbers.length) return 0
  
  let count = 0
  let currentCount = 0
  let first = numbers[0]
  let slicedArr = numbers.slice(idx + 1) // [18, 20, 10, 12, 15, 19]
  
  while(idx < slicedArr.length){
    let currEle = slicedArr[idx] // 18
    if(currEle > first){
      currentCount = currentCount + maxIncreasingSubseq(slicedArr, idx)
    }
    
    idx += 1
  }
  
  count = Math.max(currentCount, count)
  
  console.log('count: ', count)
  return count
*/

const maxIncreasingSubseq = (numbers, idx = 0, prev = -Infinity, memo = {}) => {
  // remember, the key will always be the values that are changing
  // in this case its prev and idx
  let key = idx + "," + prev;
  if (key in memo) return memo[key];

  if (idx === numbers.length) return 0;

  let options = [];
  let currEle = numbers[idx];
  let dontTake = maxIncreasingSubseq(numbers, idx + 1, prev, memo);
  options.push(dontTake);

  if (currEle > prev) {
    let take = 1 + maxIncreasingSubseq(numbers, idx + 1, currEle, memo);
    options.push(take);
  }

  memo[key] = Math.max(...options);
  return memo[key];
};
