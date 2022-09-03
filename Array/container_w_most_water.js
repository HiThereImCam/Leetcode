/*
    [1 25 3 12 4] = 4 * 4
    [1 25 3 12 3 7] = 28
     0  1 2  3 4 5
    
    
    keep track of max of height[i]
    
    diff = j - i
    
    
    currentMax = 
    
    i < j 
    
    what happens when j > i
    
    [2 1 7]
     0 1 2
     min val * difference
    
    [1 1 7]
    1 * 2
    2 
    
    when do we increment i? and when do we decrement j

    
*/

var maxArea = function (height) {
  let i = 0; // 1
  let j = height.length - 1;
  let max = 0; // 8

  while (i < j) {
    let diff = j - i; // 7
    let currentMax = Math.min(height[i], height[j]) * diff;
    max = Math.max(currentMax, max);

    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return max;
};
