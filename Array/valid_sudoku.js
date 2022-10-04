/*
    idea
        - each subgrid has it's own set
            0,0, 0,3 0,8
        - each row would have it's own set
        - each col would have it's own set
        
        
    3 different functions
        - subgrid
        - row
        - col
        
        
    main driver
        - iterate through the grid
            - 
    
    Math.floor()
    
    questions
        - what is going to be the key/value?
            - indices/[5,3,7]
    
    
    iterate through each row/col
        check if row, col, subgrid has value
            if false 
                - meaning it has seen that value before
                    - return false
        
*/

var isValidSudoku = function (board) {
  let row = {};
  let col = {};
  let subBoard = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let currentVal = board[r][c];

      if (currentVal === ".") continue;
      let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!row[r]) {
        row[r] = new Set();
      }

      if (!col[c]) {
        col[c] = new Set();
      }

      if (!subBoard[grid]) {
        subBoard[grid] = new Set();
      }

      if (
        row[r].has(currentVal) ||
        col[c].has(currentVal) ||
        subBoard[grid].has(currentVal)
      ) {
        return false;
      }

      row[r].add(currentVal);
      col[c].add(currentVal);
      subBoard[grid].add(currentVal);
    }
  }

  return true;
};

/*
    Time Complexity = O(9^2)
    Space Complexity = O(9 ^ 2)
*/

// did this again on 8/26/22
// got it

var isValidSudoku2 = function (board) {
  let row = {};
  let col = {};
  let square = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let currVal = board[r][c];

      if (currVal === ".") continue;

      let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!row[r]) {
        row[r] = new Set();
      }
      if (!col[c]) {
        col[c] = new Set();
      }
      if (!square[grid]) {
        square[grid] = new Set();
      }

      if (
        row[r].has(currVal) ||
        col[c].has(currVal) ||
        square[grid].has(currVal)
      ) {
        return false;
      }

      row[r].add(currVal);
      col[c].add(currVal);
      square[grid].add(currVal);
    }
  }
  return true;
};

// 10/04/2022
/*
    returning a boolean

    [
        c0  c1
        [1, 3]          // row 0
        [2, 4]          // row 1
    ]
    
    note:
        - I can set a Set to the row, col to ensure uniqueness
    
    Questions that need to be answered:
        - how can I set a Set to subGrid
            - identify which subGrid
            - Set where the key is going to be Math.floor(r/3) && Math.floor(c/3)
    
    create variables of row, col, grid set to obj
        - their key: idx val is set
    
    iterate through the grid
        -  if !row has set
            - create Set for row
        -  if !col has set
            - create Set for col
        - if !subGrid has set
            - create Set for subGrid
            
        - check if row has val
            - if yes, we know theres a dup. Return false
        - check if col has val
            - if yes, return false
        - check if subGrid has val
            - if yes return false
            
    
    after finishing running through the whole grid
    return true
        

*/

var isValidSudoku = function (board) {
  let row = {};
  let col = {};
  let subBoard = {};

  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[0].length; c += 1) {
      let currEle = board[r][c];

      if (currEle === ".") continue;

      if (!(r in row)) {
        row[r] = new Set();
      }

      if (!(c in col)) {
        col[c] = new Set();
      }

      let subGrid = Math.floor(r / 3) + "," + Math.floor(c / 3);

      if (!(subGrid in subBoard)) {
        subBoard[subGrid] = new Set();
      }

      if (
        row[r].has(currEle) ||
        col[c].has(currEle) ||
        subBoard[subGrid].has(currEle)
      ) {
        return false;
      }

      row[r].add(currEle);
      col[c].add(currEle);
      subBoard[subGrid].add(currEle);
    }
  }

  return true;
};
