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
