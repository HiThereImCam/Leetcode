// BE CAREFUL OF THE SIMPLE CODE MISTAKES
// THERE WERE 5
const findIsland = (grid, row, col, visited) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
    return 0; // ob

  if (grid[row][col] === "W") return 0; // water

  let pos = row + "," + col;
  if (visited.has(pos)) {
    return 0;
  }
  visited.add(pos);

  let left = findIsland(grid, row, col - 1, visited);
  let right = findIsland(grid, row, col + 1, visited);
  let top = findIsland(grid, row - 1, col, visited);
  let bottom = findIsland(grid, row + 1, col, visited);

  return 1 + left + right + top + bottom;
};

const minimumIsland = (grid) => {
  let visited = new Set();
  let minIslandSize = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let islandSize = findIsland(grid, row, col, visited);
      if (islandSize >= 1) {
        minIslandSize = Math.min(minIslandSize, islandSize);
      }
    }
  }

  // console.log("minIslandSize: ", minIslandSize)
  return minIslandSize;
};

/*
  we have to find the island
    - then from there we find the size of the island
    - return size of the island
  
  need to keep count of island
    - set count to infinity
      - once size comes Math.min(count, currCount)
      

  currNode
    - check if 'W'
    - check if 'L'
    

*/

// 08/30/2022s

const traverseGrid = (grid, r, c, visited) => {
  // check OB
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
    return 0;
  }

  if (grid[r][c] === "W") return 0;

  // check current pos
  let pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  // neighbors (up down left right)
  let up = traverseGrid(grid, r - 1, c, visited);
  let down = traverseGrid(grid, r + 1, c, visited);
  let left = traverseGrid(grid, r, c - 1, visited);
  let right = traverseGrid(grid, r, c + 1, visited);

  return 1 + up + down + left + right;
};

const minimumIsland2 = (grid) => {
  let count = Infinity;
  let visited = new Set();

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[r].length; c += 1) {
      let pos = r + "," + c;
      if (grid[r][c] === "L" && !visited.has(pos)) {
        let currCount = traverseGrid(grid, r, c, visited);
        count = Math.min(currCount, count);
      }
    }
  }

  return count;
};
