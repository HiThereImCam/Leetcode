// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// [
// 	[ A, E, D, B, A ],
// 	[ V, R, A, L,  T ],
// 	[ P, Q, E, D, N ]
// ]

// “AAE”
// Target = “BALD”
// Target = BAT
// Notes
// 	main driver function
// Iterate through the grid
// if function call returns true return  true

// 	function traverseGrid(grid, pos, visited, target)
// - depth first traversal through the grid at the starting pos
// 	- if value !== current character return false
// 	- Out of bounds checks
// 	- has seen check
// 	- traverse through neighbors
// 		- recursively call through neighbors
// 			- left right up down
// 			- target = “bald”
// 					- target[i +1] where is target in my recursive calls
// 			- traverseGrid(grid, neighborPos, visited, target(i+1)
// 		- return true
// -

// Note:
// 	- or operator examines the whole conditional before it gives a finally boolean
// 	- this can give an error if you’re checking rows
// 		ex:  r = 4
// if( r < 0 ||   // r = 3
// 	    		    r  >= grid.length ||
// 	    		    c < 0 ||
// 	    		    c >= grid[r].length
// } return false

// 	r  >= grid.length is false but you would still check
// 	c  <  0 || c >= grid[r].length
// R would be undefined
// but you’re keying into grid[r].length which would break the function
// therefore should use grid[0] to ensure that you’re keying into a row that exists

// [
// 	[ ‘A’, ‘E’, ‘B’, ‘D’, ‘A’ ],
// 	[ ‘V’, ‘R’, ‘A’, ‘L’,  ‘T’ ],
// 	[ ‘P’, ‘Q’, ‘E’, ‘D’, ‘N’ ]
// ]

// Target = “BALD”
// Target = BAT

const traverseGrid = (grid, r, c, visited, target, charIdx) => {
  if (
    r < 0 || // r = 3
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length
  )
    return false;

  if (grid[r][c] !== target[charIdx]) return false;

  if (grid[r][c] === target[charIdx] && charIdx === target.length - 1)
    return true;

  let pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  // iterate through the neighbors
  // left right up down
  return (
    traverseGrid(grid, r, col - 1, visited, target, charIdx + 1) ||
    traverseGrid(grid, r, col + 1, visited, target, charIdx + 1) ||
    traverseGrid(grid, r - 1, col, visited, target, charIdx + 1) ||
    traverseGrid(grid, r + 1, col, visited, target, charIdx + 1)
  );
};

const wordSearch = (grid, target) => {
  for (let r = 0; r < grid.length; ) {
    for (let c = 0; c < grid[r].length; c++) {
      if (traverseGrid(grid, r, c, new Set(), target, 0) === true) {
        return true;
      }
    }
  }
  return false;
};

// Time complexity - O(3^(m*x))
// Space complexity - O(m x n)
