var minMeetingRooms = function (intervals) {
  const startArr = getSortedArray(intervals, 0);
  const endArr = getSortedArray(intervals, 1);

  let count = 0;
  let finalCount = 0;
  let startIdx = 0;
  let endIdx = 0;

  while (startIdx < startArr.length) {
    if (startArr[startIdx] < endArr[endIdx]) {
      count += 1;
      finalCount = Math.max(count, finalCount);
      startIdx += 1;
    } else {
      count -= 1;
      endIdx += 1;
    }
  }

  return finalCount;
};

/**
 * 10/4/2022
 */

const getSortedArray = (intervals, idx) => {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    result.push(intervals[i][idx]);
  }

  return result.sort();
};

var minMeetingRooms = function (intervals) {
  const startArr = getSortedArray(intervals, 0);
  const endArr = getSortedArray(intervals, 1);

  let count = 0;
  let finalCount = 0;
  let startIdx = 0;
  let endIdx = 0;

  while (startIdx < startArr.length) {
    if (startArr[startIdx] < endArr[endIdx]) {
      count += 1;
      finalCount = Math.max(count, finalCount);
      startIdx += 1;
    } else {
      count -= 1;
      endIdx += 1;
    }
  }

  return finalCount;
};


// 11/25/2022
/*
    question
        - [[5,10], [15,20], [0,30]]
                       i
                       
        - how do we know that this is going 
        - we know that we do not have to add a count to the number meetings rooms
          because the current interval start time > prev intervals end time 
          
        - [[7, 10], [2,4]]
        - [[2,4], [3,10]] => 2
        - [[2,4], [7,10]] => 1
        
    
    [[2,4], [7,10]]
               i
       
    prev = 4
    count = 1
    
    
*/

const sortArr = (arr, idx) => {
  const result = []
  
  for(let val of arr){
      result.push(val[idx])
  }
  
  return result.sort((a,b) => a - b)
}

var minMeetingRooms = function(intervals) {
  const startArr = sortArr(intervals, 0)
  const endArr = sortArr(intervals, 1)
  
  let startIdx = 0
  let endIdx = 0
  let count = 0
  let finalCount = 0
  
  while(startIdx < startArr.length){
      if(startArr[startIdx] < endArr[endIdx]){
          count += 1
          finalCount = Math.max(count, finalCount)
          startIdx += 1
      }else{
          count -= 1
          endIdx += 1
      }
  }
  
  return finalCount
};