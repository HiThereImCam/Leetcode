var numIslands = function (grid) {
  /*
        island
            - min definition of island
                - is there a "1" surrounded by 0 or undefined?
            - max definition of island
                - sub grid
                    - the size is m x n 
                    - example 1
                        - row 0 has 4 consecutive "1"'s
                        - if we look at the first element in each row
                            - max of 3
                        - max size 4 x 3
                        - anything within this subArray will be considered 1 island
        
        questions
            - keep track of the start + end of island
            
            result = [[[0,0], [0,4],[4,0], [4,4]]]
            
         for every 1
            check top left bottom right
                if there is a 1
                    do the same thing
                        stop when 1 has all neighbors of 0
                        result += 1
                haveSeen obj
        
    */

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let bottom = grid[i + 1][j];
      let top = grid[i - 1][j];
      let left = grid[i][j - 1];
      let right = grid[i][j + 1];
      if (grid[i][j] === "2") {
        continue;
      }
      if (grid[i][j] === "1") {
        // check top left bottom right
        grid[i][j] = "2";
        if (top === "1") {
          top = "2";
        }
        if (bottom === "1") {
          bottom = "2";
        }
        if (left === "1") {
          left = "2";
        }
        if (right === "1") {
          right = "2";
        }
      }
    }
  }
};

/**
 * above solution is wrong but a lot of the pseudocode still works
 *
 * things I need to think about-
 * 1.) while iterate through the grid, invoke bfs function and
 *     increase result by 1
 *
 * 2.) in the bfs function, you had this idea!
 *     ensure that top left right bottom exist
 *         - handle undefined
 *     ensure that it's not inside visited
 *         - add tuple to set
 *
 *
 * 3.) you can have a visited set
 *      - makes things alot cleaner
 */
