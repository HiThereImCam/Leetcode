/*
    sort on the first element 
    
    have a result array
        - add first element in the sorted array into the result array
        - compare the next element in the sorted array with the element at the very end of the
          array
          
    what are the conditions to check 
        - if lastElement end in result [start, end] > sortedInt start
            - if lastElement end in result > sortedInt end
                - continue
                - why continue?
                    - because the first interval encapsulates the second interval
            - else
                - replace lastElement end in result with sortedInt end
    
    
    Are there other conditions that I have to check for?
*/

var merge = function (intervals) {
  let sortedInt = intervals.sort((a, b) => a[0] - b[0]);
  let result = [sortedInt[0]];

  let idx = 1;

  while (idx < sortedInt.length) {
    let resultInt = result[result.length - 1];
    let currSortInt = sortedInt[idx];

    if (resultInt[1] >= currSortInt[0]) {
      if (resultInt[1] > currSortInt[1]) {
        idx += 1; // encapsulates
        continue;
      }
      resultInt[1] = currSortInt[1];
    } else {
      result.push(currSortInt);
    }

    idx += 1;
  }

  return result;
};

// 11/29/2022
const combineIntervals = (intervals) => {
  intervals.sort((a,b) => a[0] - b[0])
  
  let result = [intervals[0]]
  
  for(let currInterval of intervals){ 
    let prevInterval = result[result.length - 1] 
    
    if(prevInterval[1] >= currInterval[0]){
      if(prevInterval[1] <= currInterval[1]){
        prevInterval[1] = currInterval[1] // merge together
      }
    }else{
      result.push(currInterval)
    }
  }
  
  return result
};