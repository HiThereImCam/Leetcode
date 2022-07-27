/*
    constraints
        - must always solve first problem
        - after solving the first problem
            - must solve either i+1 or i+2
        - keep solving problems until
            max(points value) - min(points value) === threshhold
        - if threshold cannot be met, they must solve all problems 
    edge cases
        - 

    threshold = 4
    count = 0
    min = arr[0]
    
    iterate through array
        is the current i - min >= threshold?
            yes 
                return count
        
        is i + 1 - min >= threshold ?
            yes
                return count
        else
            i += 2
            count = 1 
            
        make sure you don't go out of bounds
            if you go out i + 2 goes out of bounds
                then return length of array

 */

/* 

    points [1 2 3]
    threshold = 2 
    length = 3
    
    i = 0 2 
    count = 0 1
    min = 1
    arr[i] = 1 3
    arr[i] - min = 0 2 
    

*/
function minNum(threshold, points) {
  let i = 0;
  let count = 1;
  let min = points[0];

  while (i < points.length) {
    if (points[i] - min >= threshold) {
      return count;
    } else if (points[i + 1] - min >= threshold) {
      count += 1;
      return count;
    } else {
      if (!(i += 2 > points.length)) {
        i += 2;
        count += 1;
      } else {
        break;
      }
    }
  }

  return points.length;
}
