/*
  avoid cycles
    - visited Set
    
  we want the distance
    - breadth first traversal
      - maybe a distance obj or even
      [row, col, distance]
      
  we want to find the first island
    - once we find the first island, 
      we want to store the pos in a set
    - row + ',' + col
    
    iterate over set (maybe iterate over set?)
      - for of
      - we know that every pos in the set can be a starting pos
      - what do we add to the queue?
      - 
      
  things i don't know what to do with
    - what do I do with the values of the set?
        - we can use it just to compare
    - we just use it to compare
      - do I start iterating from the values in the set?
        or from (0,0). Pretty sure it's just the set
    - but if I iterate through the set how does the queue come into
      play?
  
  ANSWER
    - you push every pos into the queue!!!!!
        - destructure string pos
        - const [row, col] = pos.split(',').map(Number)
        
    - queue = [row, col, distance]
    - iterate through queue
      - if "L" and not visited 
        return distance
      
      - otherwise, 
        look up, down, left, right
          - add to queue
      
    
*/

const isOB = (grid, row, col) => {
  if (row < 0 || row >= grid.length || col < 0 || col > grid[row].length)
    return true;

  return false;
};

const traverseIsland = (grid, row, col, visited) => {
  // check OB
  if (isOB(grid, row, col)) return;

  // check if W
  if (grid[row][col] === "W") return;

  let pos = row + "," + col;
  if (visited.has(pos)) return;

  // means we have an 'L'
  visited.add(pos);

  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);

  return visited;
};

const findIsland = (grid, visited) => {
  let possibleIsland;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      possibleIsland = traverseIsland(grid, i, j, visited);
      if (possibleIsland.size > 0) break;
    }
  }

  return possibleIsland;
};

const bestBridge = (grid) => {
  let visited = new Set();
  let mainIsland = findIsland(grid, visited);

  let queue = [];

  for (let pos of mainIsland) {
    // can i destructure pos?
    // const [row, col] = pos.split(',').map(Number) [4,3]
    queue.push([pos, 0]); // [pos, distance]
  }
};

const bestBridgeAlv = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const possibleIsland = traverseIsland(grid, r, c, new Set());
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland;
        break;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    const pos = row + "," + col;
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + "," + neighborCol;
      if (
        isInbounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPos)
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverseIslandAlv = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === "W") return visited;

  const pos = row + "," + col;
  if (visited.has(pos)) return visited;

  visited.add(pos);

  traverseIslandAlv(grid, row - 1, col, visited);
  traverseIslandAlv(grid, row + 1, col, visited);
  traverseIslandAlv(grid, row, col - 1, visited);
  traverseIslandAlv(grid, row, col + 1, visited);

  return visited;
};
