/*
    constraints given
        - must be unique indices
    constraints thought of 
        - not guaranteed to have unique values
*/

const pairSum = (numbers, targetSum) => {
  /*
    am I guaranteed unique ele's?
      if not unique 
        can just continue
    
    store all numbers in obj
      where key = num && val = index
    
    check the compliment
    iterate through the obj
      - compliment = targetSum - obj[val]
      if(obj[compliment]){
        return [obj[val], obj[compliment]]
      }
  */
  //   let numsObj = {}

  //   for(const numIdx in numbers){
  //     if(numsObj[numbers[numIdx]]){
  //       continue
  //     }else{
  //       numsObj[numbers[numIdx]] = numIdx
  //     }
  //   }

  /*
    numObj = {
      '3': 0,
      '2': 1,
      '5': 2,
      '4': 3,
      '1': 4
    }
    
    targetSum = 8
    key = 3
    compliment = 5
    return [0, 2]
  */

  // console.log("")
  // for(const key in numsObj){
  //   let compliment = targetSum - key
  //   if(numsObj[compliment]){
  //     return [Number.parseInt(numsObj[key]), Number.parseInt(numsObj[compliment])]
  //   }
  // }

  /*
    [2, 4, 4] 8
    i = 0 1
    compliment = 6 4
    j = 0 1 0 1 2
    numbers[j] = 2 4 4 2 4
    [1,2]
  */
  // iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    let compliment = targetSum - numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      if (compliment === numbers[j]) {
        return [i, j];
      }
    }
  }
};
