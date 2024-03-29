/*
  - divide the list into the smallest unit and then compare each
    element with the adjacency list to sort and merge the two 
    adjacent lists.
    
    start -> mid
    mid + 1 -> end
    
    [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
    
    [10, 4, 42, 5, 8] [100, 5, 6, 12, 40]

    [10, 4, 42] [5, 8] 
   
   
   how do i break the array in half? how do i keep iterating?
      - what do I return?
        - I return the sorted array
      - i keep iterating by recursive calls
    
    what do I do with those recursive calls?
      - how do I break down the array down to it's individual element?
        - can keep splitting till the individual element
    
    
    idea
      - sort function
        - it takes in 
          - left half , right half, and the result 
        - assuming that we're at the individual element level
          - compare from leftHalf and rightHalf

*/

const mergeSort = (nums) => {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid);
    let right = nums.slice(mid)
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
    return merge(sortedLeft, sortedRight)
  };
  
  const merge = (left, right) => {
    //console.log("left: ", left, "right: ", right)
    // iterate through left and right
    // dont forget to shift 
    let result = []
    while(left.length > 0 && right.length > 0){
      if(left[0] < right[0]){
        result.push(left.shift(0))
      }else{
        result.push(right.shift(0))
      }
    }
    
    result.push(...left)
    result.push(...right)
    
    return result
  } 

  // part 2
  /*
  basecase
    - the smallest possible 
    - if the length of nums === 1
*/

const mergeSort2 = (nums) => {
  if(nums.length === 1) return nums
  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  
  return joinElements(sortedLeft, sortedRight)
};

const joinElements = (left, right) => {
  let result = []
  
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift()) 
    }else{
      result.push(right.shift())
    }
  }
  
  result.push(...left)
  result.push(...right)
  
  return result
}

// 11/20/2022
/*
  numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
  left = [10, 4, 42, 5, 8] right = [100, 5, 6, 12, 40]
      [10, 4, 42] [5,8]       [100, 5, 6] [12,40]
  [10, 4] [42]     [5] [8]
  [10] [4] [42]  [5] [8]
  
  [10] [4] -> left = [4, 10] right = [42]
           -> left = [4, 10, 42]
  
  
  idea
    - recursion
      - base case
        - when length of subArray === 1 return [currElem]
      - once we've gotten the subArrays down to a single elem
        - we need to start swapping elements in ascending order
      - 
      
  
*/

/*
  we want to look at the front of the array
  because elements will be sorted in increasing order

  push only one at a time because one side may have multiple
  elements that are smaller than the current on the other
*/

const swapElements = (left, right) => {
  let merged = []
  
  while(left.length > 0 &&
        right.length > 0
       ){
    if(left[0] < right[0]){
      merged.push(left.shift())
    }else{
      merged.push(right.shift())
    }
  }
  
  merged.push(...left)
  merged.push(...right)
  
  return merged
}

const mergeSort3 = (nums) => {
  if(nums.length <= 1) return nums
  let mid = Math.floor(nums.length / 2)
  let left = nums.slice(0,mid)
  let right = nums.slice(mid)
  let recurseLeft = mergeSort(left)
  let recurseRight = mergeSort(right)
  
  return swapElements(recurseLeft, recurseRight)
};
