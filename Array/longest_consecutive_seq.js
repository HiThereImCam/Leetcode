/**
 original idea wrong
Notes:
    
    let newMap = new Map()
    key/value(?)
        {
            100,
            
}
    
    let  result = 0
    let  tempResult = 

[100, 101, 4,5,6]
    
Temp = 0 1 2 3
result  = 0

iterate through nums 
        - check if set has the value of n - 1
            - update tempResult
        - check if set has the value of n + 1
            - update tempResult 
        - add curr val to map
        update  result to account for currVal

if  tempResult > result set result to tempResult

 */

/**
 *
 * completed and correct
 */

// var longestConsecutive = function (nums) {
//   let set = new Set();

//   nums.forEach((num) => set.add(num));

//   /*
//         iterate through the array
//             check if value is starting point ( meaning it does not have left neighbor )
//                 if true
//                     check if n+1 exists
//                     keep iterating til n+1 does not exist
//                     update tempResult

//             if tempResult > result, result = tempResult
//     */

//   let tempResult = 0;
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let leftNeighbor = nums[i] - 1;
//     let currVal = nums[i];
//     if (!set.has(leftNeighbor)) {
//       let rightNeighbor = currVal + 1;
//       tempResult += 1;
//       while (set.has(rightNeighbor)) {
//         rightNeighbor += 1;
//         tempResult += 1;
//       }
//     }

//     if (tempResult > result) result = tempResult;
//     // reset tempResult
//     tempResult = 0;
//   }

//   return result;
// };

/**
 * touched on 04/26/22
 * time taken 26 minutes and 9 seconds
 */

var longestConsecutive = function (nums) {
  let set = new Set();

  // add elements to set
  nums.forEach((num) => set.add(num));

  let count = 0;

  /*
        nums = [100,4,200,1,3,2]

        set = {100, 4, 200, 1, 3, 2}
        
        count: 0
        
        i: 0 1 2 3 
        nums[i]: 100 4 200 1
        
        currEle: 100 4 200 1 2 3 4 3 2 
        runningCount: 1 1 2 3 4 
    */

  for (let i = 0; i < nums.length; i++) {
    let currEle = nums[i];
    if (!set.has(currEle - 1)) {
      let runningCount = 1;
      while (set.has(currEle + 1)) {
        runningCount += 1;
        currEle += 1;
      }
      count = Math.max(count, runningCount);
    }
  }

  return count;
};
