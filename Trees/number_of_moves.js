function isOb(grid, r, c) {
  if (r >= grid.length || r < 0 || c >= grid[0].length || c < 0) {
    return true;
  }
  return false;
}
/*

    [
        [0, 0, 0, 0]
        [0, 0, 0, 0]
    ]
 */

function traverseBoard(grid, visited, row, col, targetRow, targetCol, count) {
  // base case
  if (row === targetRow && targetCol) return count;
  // check OB
  if (isOb(grid, startRow, startCol)) return 0;

  // have we visited?
  let pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  /*
        traverse left 2 down 1 
        traverse right 2 down 1
        traverse left 2 up 1
        traverse right 2 up 1
        
        traverse left 1 down 2
        traverse right 1 down 2
        traverse left 1 up 2 
        traverse right 1 up 2 
     */

  let currCount = Math.min(
    traverseBoard(
      grid,
      visited,
      row + 1,
      col - 2,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row + 1,
      col + 2,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row - 1,
      col - 2,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row - 1,
      col + 2,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row + 2,
      col - 1,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row + 2,
      col + 1,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row - 2,
      col - 1,
      targetRow,
      targetCol,
      count + 1
    ),
    traverseBoard(
      grid,
      visited,
      row - 2,
      col + 1,
      targetRow,
      targetCol,
      count + 1
    )
  );

  // if we have traversed through the grid
  // and we have visited every possible position return -1
  if (currCount <= 0) return -1;
  return currCount;
}

function minMoves(n, startRow, startCol, endRow, endCol) {
  let visited = new Set();
  let grid = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  return traverseBoard(grid, visited, startRow, startCol, endRow, endCol, 0);
}
