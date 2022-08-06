/*
  count representing the length of the shortest
  visited set
  breadth first traversal
    queue
      - if currNode === C
          return count
      - if left, right, top, bottom is not out of bounds or x
          if not visited
            add to visited push 
            push to queue
      
*/

const checkNeighbor = (grid, row, col) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
    return false;

  if (grid[row][col] === "X") return false;

  return true;
};

const closestCarrot = (grid, startRow, startCol) => {
  let queue = [[startRow, startCol, 0]]; // <-- remember you can use to calc distance
  let visited = new Set();

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    if (grid[row][col] === "C") return dist;

    //     let left = checkNeighbor(grid, row, col - 1)
    //     let right = checkNeighbor(grid, row, col + 1)
    //     let top = checkNeighbor(grid, row - 1, col)
    //     let bottom = checkNeighbor(grid, row + 1, col)

    //     if(left && !visited.has(left)){
    //       visited.add(left)
    //       queue.push(left)
    //     }
    //     if(right && !visted.has(right)){
    //       visited.add(right)
    //       queue.push(right)
    //     }
    //     if(top) queue.push(top)
    //     if(bottom) queue.push(bottom)

    // you can do above programatically
    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + "," + neighborCol;

      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neighborCol && neighborCol < grid[row].length;

      if (
        rowInbounds &&
        colInbounds &&
        !visited.has(neighborPos) &&
        grid[neighborRow][neighborCol] !== "X"
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, dist + 1]);
      }
    }
  }

  return -1;
};

/*
  part 2 8/6
  do again because of deltas
*/

const closestCarrot2 = (grid, startRow, startCol) => {
  let visited = new Set();
  let queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    let [row, col, distance] = queue.shift();
    console.log("row: ", row, "col: ", col);

    if (grid[row][col] === "C") return distance;

    const deltas = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ];

    let pos = row + "," + col;
    visited.add(pos);

    for (const delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      // [0, -1]

      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;

      console.log("neighborRow: ", neighborRow, "neighborCol: ", neighborCol);

      if (
        neighborRow < 0 ||
        neighborRow >= grid.length ||
        neighborCol < 0 ||
        neighborCol >= grid[row].length
      ) {
        console.log("length broke");
        continue;
      }

      if (grid[neighborRow][neighborCol] === "X") {
        console.log("broke at X");
        continue;
      }

      let neighborPos = neighborRow + "," + neighborCol;
      if (visited.has(neighborPos)) {
        console.log("pos broke");
        continue;
      }

      visited.add(neighborPos);
      queue.push([neighborRow, neighborCol, distance + 1]);
    }
  }

  return -1;
};
