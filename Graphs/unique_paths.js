// You are given a n x m matrix where your starting position is on the top left of the grid.
// Given that you can only travel one space to the right OR one space down
// Find how many paths you can take to get to the bottom right of the grid

// [
//     [ O, O, O ],
//     [ O, O, O ],
//     [ O, O, O ]
//    ]

//    [[O]] -> 1

//    At least a 2x2 grid

//    notes
//        -  edges cases
//            - can go too far right and too far down
//        - if node is row.length -1 , col.length -1
//            return  1
//    helper  function recursive call

//    [
//      [ O, O ],
//      [ O, O ]
//    ]

//    right ->
//        right -> OB 0
//        bottom
//               -> 1

//    right = 1
//    bottom  =>
//        right
//            -> 1
//        bottom	-> 0
//    bottom

//    return right + bottom

//    [
//      [ O, O ],
//      [ O, O ]
//    ]

//    0, 0
//        right
//            0, 1
//                right 0
//                bottom  1
//        return  1 + 0
//        right  =  1

//        bottom
//            1, 0
//                right 1
//                bottom 0
//        Bottom = 1

//    return right + bottom = 2

const uniquePaths = (grid) => {
  let numOfPaths = traverseGrid(grid, 0, 0);
  return numOfPaths;
};

const traverseGrid = (grid, row, col) => {
  if (row >= grid.length || col >= grid[row].length) {
  }
  return 0;

  if (row === grid.length - 1 && col === grid[row].length - 1) return 1;

  let right = traverseGrid(grid, row, col + 1); // go right
  let bottom = traverseGrid(grid, row + 1, col); // go down

  return right + bottom;
};

//    [
//     [ O, O, O ],
//     [ O, O, O ],
//     [ O, O, O ]
//    ]

//    2^(n * m)
//    For every recursive call, I am making 2 additional recursive calls which add a 2
//    [
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ],
//      [ O, O, O, O, O, O ]
//    ]

//    [
//      [ O, O ],
//      [ O, O ]
//    ]

//    Queue = [[0,0]] -> [] -> [[1,0]] -> [[1,0][0,1]] -> [[0,1], [1,1]] -> [[1,1]] -> [[1,1], [1,1]] -> [[1,1]] -> [1,1]
//    row = 1
//    col = 1

//    deltaRow = 1 0 1 0 1
//    deltaCol = 0 1 0 1 0

const uniquePathsIterative = (grid) => {
  let count = 0;
  let queue = [[0, 0]];

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    if (row === grid.length - 1 && col === grid[row].length - 1) count += 1;

    const deltas = [
      [1, 0],
      [0, 1],
    ];

    for (const delta of deltas) {
      Const[(deltaRow, deltaCol)] = delta;

      if (grid[row + deltaRow][col + deltaCol]) {
        queue.push([row + deltaRow, col + deltaCol]);
      }
    }
  }
  return count; // 2
};

//    Time complexity O(n*m) where n is outer grid
//                       M is length of row
