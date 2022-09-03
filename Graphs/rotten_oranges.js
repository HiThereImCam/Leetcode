/*
    return -1 when
        - cell is empty
        - or cell is not adjacent to a rotten node
    
    questions that I have is
        - how do i keep track of minutes
            - depth first traversal
                - keep a count of the minutes
        
        - what are the characteristics of this problem
            - visited set so that we do not run into other cells
            - 
    
        question 
            - what do i need to pass to my helper function?
            - traverseGrid(grid, r, c, visited)
                - do I pass a count?
        
        
        as I traverse through the neighbors
        if current orange is rotten
    
    
        change values from 1 to 2 
            
            
    plan
        iterate through the grid
            if ob return 0
            if empty cell return 0
            if hasSeen return 0
            
    NOT DFS
    IT WAS BREADTH FIRST TRAVERSAL
            
   KEYS
        - keep track of fresh oranges and keep track of rotten oranges
        - fill queue w/ rotten oranges
        - if fresh orange exists even after iterating through the queue
          then we return -1


*/

var orangesRotting = function (grid) {
  let [ROWS, COLS, time, fresh, q] = [grid.length, grid[0].length, 0, 0, []];
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // count fresh oranges and add rotten oranges to queue
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) q.push([i, j]);
    }
  }

  while (q.length > 0 && fresh > 0) {
    let qLen = q.length;

    for (let rot = 0; rot < qLen; rot++) {
      let [row, col] = q.shift();

      for (let dir of dirs) {
        let [r, c] = [row + dir[0], col + dir[1]];

        if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] !== 1)
          continue;

        grid[r][c] = 2;
        fresh--;
        q.push([r, c]);
      }
    }

    time++;
  }

  return fresh > 0 ? -1 : time;
};
