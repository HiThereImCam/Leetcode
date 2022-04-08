var invertTree = function (root) {
  /*
                            4
                        2      7
                        
                
                            4
                        7       2
                     9    8  1    3
                     
        queue = [root] 
        while queue is not empty
            - look at top
            - currNode is node at top
            if currNode has left 
                push into queue
            if currNode has right
                push into queue
            - swap children of currNode(left and right)       
*/

  /*
                        4
                    2      7
                 1    3  6   9  
            if this.right dne it's value null
    */

  let queue = [root];

  while (queue.length > 0) {
    // queue = [2,7]
    let currNode = queue.shift(); // 4 -> 2

    if (currNode !== null) {
      let temp = currNode.left; // 1
      currNode.left = currNode.right; // left = 3
      currNode.right = temp; // right = 1

      queue.push(currNode.left);
      queue.push(currNode.right);

      // queue [7, 1, 3]
      // queue [1,3,6,9]
    }
  }

  return root;
};

/*
  completed and correct 4/7/22
*/

var exist = function (board, word) {
  let dfs = (board, r, c, charIdx, word) => {
    if (charIdx === word.length) return true;

    if (
      r < 0 ||
      r >= board.length ||
      c < 0 ||
      c >= board[r].length ||
      board[r][c] !== word[charIdx]
    ) {
      return false;
    }

    let temp = board[r][c];
    board[r][c] = "";

    let found =
      dfs(board, r + 1, c, charIdx + 1, word) ||
      dfs(board, r - 1, c, charIdx + 1, word) ||
      dfs(board, r, c + 1, charIdx + 1, word) ||
      dfs(board, r, c - 1, charIdx + 1, word);
    board[r][c] = temp;
    return found;
  };

  // iterate through board to find char

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      // if we have found the char and dfs comes back true
      // then return true

      if (board[r][c] === word[0] && dfs(board, r, c, 0, word)) {
        return true;
      }
    }
  }

  return false;
};
