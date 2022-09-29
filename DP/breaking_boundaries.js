/*
  constraints
    - 0 < m,n <= 100
    - k > 0
    
  given a grid and a starting point, find if we can hit the boundary 
  in k moves
  
  what am I returning?
    - returning an integer
  
  [
    [0 0 0 ]
    [0 0 0]
    [0 0 0]
  ]
  
  starting col: 1
  starting row: 1
  pos: 1,1
  k = 1
  returning 0

ex: revisiting a path
    [[0 0 0]] starting pos: (0,1) k = 2
    
    while iterating through grid
      - look left
        - keep track of our previous position 
        - keep iterating through positions as long as it doesnt === the previous pos
        



breakingBoundaries(3, 4, 2, 0, 0); // -> 4
moves start at 1?

[
  [0 0 0 0]
  [0 0 0 0]
  [0 0 0 0]
  
]

  pseudo code (depth first traversal)
  
  main driver function
    return the number of different ways
  
  helper function that helps us traverse through the grid
    - takes in 
      - row, col, k, [r,c], moves = 1, prevPos = null  
      - base case would be
        - if r < 0
             r >= row.length
             col < 0
             col >= row[0].length
          return 1
      
        if(pos === prevPos) return 0
        if(moves > k) return 0
        
        
        look left, right, up, down
        if(moves === k){
          - return the sum of left right up down
        }

      
        


k = 2
*/

// [[0 0]]
/*
  [0 0]
  [0 0]
*/

/*
  row = 2
  col = 2
  k = 2
  
  [1,1] = pos
  [null, null] = prevPos
  
  go left
  row = 2
  col = 1
  k = 1
  
  count = 0
         
*/

const findPaths = (m, n, k, r, c, memo) => {
  let key = `${k}, ${r}, ${c}`;

  if (key in memo) return memo[key];

  if (r < 0 || r >= m || c < 0 || c >= n) return 1;

  if (k === 0) return 0;

  let count = 0;
  count =
    findPaths(m, n, k - 1, r, c - 1, memo) +
    findPaths(m, n, k - 1, r, c + 1, memo) +
    findPaths(m, n, k - 1, r - 1, c, memo) +
    findPaths(m, n, k - 1, r + 1, c, memo);

  memo[key] = count;
  return count;
};

const breakingBoundaries = (m, n, k, r, c) => {
  return findPaths(m, n, k, r, c, (memo = {}));
};

// breakingBoundaries(3, 4, 3, 0, 0); // -> 11
