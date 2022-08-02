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
