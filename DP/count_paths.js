/*
  [
    [O O X]
    [X O X]
    [O O O]
  ]
  
   [
    [O X X]
    [O X X]
    [O O O]
  ]
  
  the count is 
    - every path starting ONLY from the top left to the bottom right
  
  we are not going to be iterating through every position in our main driver
  function
  
  we are going to traverse through every position in our traverseGrid function

  - how do I maintain the count
      -
  - for every position
    - if it is a valid move then 
    
  what do I not understand?
    - how to keep the count
    - what do I do with the valid move positions
 
 Note:


*/

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  let pos = r + "," + c;
  if (pos in memo) return memo[pos];

  if (r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0;

  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

  let downCount = countPaths(grid, r, c + 1, memo);
  let rightCount = countPaths(grid, r + 1, c, memo);

  memo[pos] = downCount + rightCount;
  return memo[pos];
};

// Time Complexity = O(r * c) down from O(2 ^ (r + c))
// Space Complexity = O(r * c)

// when do I add and when do I multiply complexity's
