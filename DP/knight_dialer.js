/*
    return answer mod 10^9 + 7
    
    depth first style traversal that helps me get every n combination throughout the grid
    questions
        - what do i need
            - i need a phone grid
                - i need to iterate through the phone grid
            - set keep track of visited elements
                - i need ensure that for each starting element in the array
                  i have a new instance of set 
            - I need a helper function (traverseGrid)
            - I'll need a count in my helper function
            
    ultimately we are returning a count
    
    helper function
        - arguments 
            - grid, row, col, set, n
        - what are my base cases?
             - OB
                - return 0
             - if we have seen the current pos
                - return 0
             - if the char is not a number i.e '*' && '#'
                - return 0
            - if our n = 1
                - return 1
                
        - other functionality
            - add our current pos to set
            - create a count
            - traverse through the neighbors
                - 8 ddifferent ways
        return count
    
*/

const GRID = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

const traverseGrid = (grid, r, c, n, memo) => {
  let key = n + "," + r + "," + c;
  if (key in memo) return memo[key];
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === "*" ||
    grid[r][c] === "#"
  )
    return 0;

  if (n === 1) return 1;

  let count = 0;
  const deltas = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
  ];

  for (let delta of deltas) {
    const [deltaR, deltaC] = delta;
    let newR = deltaR + r;
    let newC = deltaC + c;

    count +=
      traverseGrid(grid, newR, newC, n - 1, memo) % (Math.pow(10, 9) + 7);
  }

  memo[key] = count;
  return count;
};

var knightDialer = function (n) {
  let result = 0;

  for (let r = 0; r < GRID.length; r++) {
    for (let c = 0; c < GRID[0].length; c++) {
      if (GRID[r][c] !== "*" || GRID[r][c] !== "#") {
        result += traverseGrid(GRID, r, c, n, (memo = {}));
      }
    }
  }

  return result % (Math.pow(10, 9) + 7);
};
