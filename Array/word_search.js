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

/**
 * 10/6/2022
 */

const traverseGrid2 = (board, row, col, set, currIdx, word) => {
  if (currIdx === word.length) return true;

  // check ob first
  let pos = row + "," + col;
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== word[currIdx] ||
    set.has(pos)
  ) {
    return false;
  }
  set.add(pos);

  let found =
    traverseGrid2(board, row, col - 1, set, currIdx + 1, word) ||
    traverseGrid2(board, row, col + 1, set, currIdx + 1, word) ||
    traverseGrid2(board, row - 1, col, set, currIdx + 1, word) ||
    traverseGrid2(board, row + 1, col, set, currIdx + 1, word);

  set.delete(pos);
  return found;
};

var exist = function (board, word) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      if (
        board[row][col] === word[0] &&
        traverseGrid2(board, row, col, new Set(), 0, word) === true
      ) {
        return true;
      }
    }
  }

  return false;
};

/*
    - iterate through the grid
        - check if the current letter in the grid is equal to the first
          char in the string
            - traverse through the grid via a helper function
                - if this helper function returns true
                    - return true
    - return false because we have iterated through the whole grid                


    helper function
        - what parameters does this helper function take?
            - grid, row, col, Set, word, idx
                - Set controls if we have seen a character before then do not go to that character
                - word/idx controls what character in the string we're looking for
        - what is our basecases?
            - if OB || current character in grid !== current character in string ||
                 we have seen the character already
                - return false
            - if idx === word.length meaning we have found the whole word
                - return true
                 
        - tricky part
            - what happens if the current element is valid but leads to a dead end?
                - we won't know til the recursive calls come back
                - if the recursive calls come back negative
                    - delete the positions in the set
                    - do I want to delete whether or not the value 
        
*/

const traverseGrid3 = (board, row, col, set, word, idx) => {
  if (idx === word.length) return true;

  let pos = row + "," + col;
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    set.has(pos) ||
    board[row][col] !== word[idx]
  )
    return false;

  set.add(pos);

  // traverse through the grid
  let result =
    traverseGrid3(board, row, col - 1, set, word, idx + 1) ||
    traverseGrid3(board, row, col + 1, set, word, idx + 1) ||
    traverseGrid3(board, row - 1, col, set, word, idx + 1) ||
    traverseGrid3(board, row + 1, col, set, word, idx + 1);

  set.delete(pos);
  return result;
};

var exist = function (board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (
        board[row][col] === word[0] &&
        traverseGrid3(board, row, col, new Set(), word, 0)
      ) {
        return true;
      }
    }
  }

  return false;
};
