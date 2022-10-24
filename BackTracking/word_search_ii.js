const findWords = (board, words) => {
  let result = [];

  const buildTrie = () => {
    const root = {};
    for (const word of words) {
      let currNode = root;
      for (const char of word) {
        if (currNode[char] == null) currNode[char] = {}; // set the node
        // move the pointer over to the current char instead of root
        currNode = currNode[char];
      }
      currNode.word = word;
    }

    return root;
  };

  const searchBoard = (row, col, node, visited) => {
    if (node.word != null) {
      result.push(node.word);
      node.word = null;
    }

    let pos = row + "," + col;
    // check OB
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0] ||
      visited.has(pos)
    )
      return;

    if (node[board[row][col]] == null) return;

    // how do i iterate through the trie
    // add pos to visited
    visited.add(pos);
    let currChar = board[row][col];
    // traverse grid

    searchBoard(row, col - 1, node[currChar], visited);
    searchBoard(row, col + 1, node[currChar], visited);
    searchBoard(row - 1, col, node[currChar], visited);
    searchBoard(row + 1, col, node[currChar], visited);

    visited.delete(pos);
  };

  const root = buildTrie();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      searchBoard(row, col, root, new Set());
    }
  }

  return result;
};

// part 2
var findWords2 = function (board, words) {
  let result = [];

  /*
      a trie has
          - a root
          - children
          - a property that indicates the end of the word
  */
  const buildTrie = () => {
    let root = {};

    for (let word of words) {
      let currNode = root;
      for (let char of word) {
        if (!currNode[char]) currNode[char] = {};

        // update node
        currNode = currNode[char];
      }
      currNode.word = word;
    }

    return root;
  };

  const traverseBoard = (row, col, currNode) => {
    if (currNode.word !== null && currNode.word !== undefined) {
      result.push(currNode.word);
      currNode.word = null;
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return;

    if (currNode[board[row][col]] == undefined) return;
    if (board[row][col] === "#") return;

    let currChar = board[row][col];
    board[row][col] = "#";

    traverseBoard(row, col - 1, currNode[currChar]);
    traverseBoard(row, col + 1, currNode[currChar]);
    traverseBoard(row - 1, col, currNode[currChar]);
    traverseBoard(row + 1, col, currNode[currChar]);

    board[row][col] = currChar;
  };

  let root = buildTrie();
  // console.dir(root, {depth: null})

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      traverseBoard(row, col, root);
    }
  }

  return result;
};
