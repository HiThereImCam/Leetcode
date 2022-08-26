/*
  check OB
  visited(?) - memoize the value?
  
  recursive sol
    - iterate through the grid of left path && right path
    - store path in obj
    - return max path via Math.max
  
  simplest: [[1]]
  if r === grid[0].length - 1 && c === grid[r].length - 1
  return 1
  
  key: pos and the count
  
  we want to keep track of a currentCount 
    - maybe set currentCount = -Infinity(?)
    - if()
    
  Time Complexity - O(2^(n + m))
  
  
  currVal: 1
  right = 17
    currVal 3
      right = 14
      
  
  Time Complexity - O(r * c)
  Space Complexity - O(r * c)
       
*/

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  // check OB
  if (r === grid.length || c === grid[0].length) return 0;

  // check memo
  let pos = r + "," + c;
  if (pos in memo) return memo[pos];

  let currVal = grid[r][c];
  let right = currVal + maxPathSum(grid, r + 1, c, memo);
  let down = currVal + maxPathSum(grid, r, c + 1, memo);

  let max = Math.max(right, down);

  memo[pos] = max;
  return memo[pos];
};
