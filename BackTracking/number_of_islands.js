// got it wrong
/**
 * @param {character[][]} grid
 * @return {number}
 */

const helperFunction = (grid, row, col) => {
  console.log("row", row);
  console.log("col", col);
  if (!grid[row][col] || grid[row][col] === "2" || grid[row][col] === "0")
    return;

  grid[row][col] = "2";

  // left
  helperFunction(grid, row, col - 1);
  // right
  helperFunction(grid, row, col + 1);
  // up
  helperFunction(grid, row - 1, col);
  //down
  helperFunction(grid, row + 1, col);
};

var numIslands = function (grid) {
  /*
        starting point is [0,0]
        
        check -> up down left right
            - if element is array out of bound || if the value is 2
                - return count + 0
        
        recursive
        edge cases
            - grid[0,1]
                - upon moving to element
                    - change value to 2
            
        time complexity = O mxn 
        space complexity = 0 mxn
        
        
        let count = 0
        
        iterate through row
            iterate through column
                now make recursive call to helper function that will
                receive the grid, the current element
                    count = helperFunction(grid, currEle)
                    
        return count
        helper funciton
            - check for array out of bound || 2 || 0
            - recursive calls (left,right,down, up)
            - update count(?)
            
            return count+1
    
        [
            000
            010
            000
        ]
    */

  /*
        currEle = 2 undefined 2
        row = 0 
        col = 0 -1 1
        count = 0
    */

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let currEle = grid[row][col];
      if (currEle === "1") {
        helperFunction(grid, row, col);
        count++;
      }
    }
  }

  return count;
};
