/**
 *
 * @param {} board
 * @param {} word
 * @returns
 *
 * 4/6/22
 * good ideas but wrong implementation
 */
var exist = function (board, word) {
  /*
        may not be used more than once
            hasSeen = new Set()
            key = [row, col]
            
        iterate through the grid[row][col]
            - find the first letter in the word
                - upon finding 
                    - update haveSeen
                    - bfs(row, col)
                    - if bfs true
                        return true
        
        if iterated through whole grid
            return false
        
        bfs
            - queue = []            
            - return true or false
            
            
        ideas of the bfs
            - keep track of the currString 
                - currStr = "A" passed to bfs
                - if letter next letter in word is found in bfs
                    - update the currString
                    - if queue is empty
                        - if currString == word 
                            return true
            
            - if we dont keep track
                - iterate through the queue
                    - if value of tuple === word at i (define word at i) 
                        - update and move to next character of word at i
                    - update hasSeen()
                    
            definiton of word at i
            let currLetterIndex = 0
            
                 
    */

  let hasSeen = new Set();
  let currLetterIdx = 0;
  let result = false;

  let bfs = (r, c) => {
    let queue = [[r, c]];

    while (queue.length > 0) {
      console.log("queue: ", queue);
      console.log("hasSeen: ", hasSeen);
      let [row, col] = queue.shift();

      // above
      if (
        board[row - 1] !== undefined &&
        board[row - 1][col] === word[currLetterIdx + 1] &&
        !hasSeen.has([row - 1, col])
      ) {
        // push tuple into queue
        queue.push([row - 1, col]);
        // add it to has seen
        hasSeen.add([row - 1, col]);
      }

      // below
      if (
        board[row + 1] !== undefined &&
        board[row + 1][col] === word[currLetterIdx + 1] &&
        !hasSeen.has([row + 1, col])
      ) {
        // push tuple into queue
        queue.push([row + 1, col]);
        // add it to has seen
        hasSeen.add([row + 1, col]);
      }

      // left
      if (
        board[col - 1] !== undefined &&
        board[row][col - 1] === word[currLetterIdx + 1] &&
        !hasSeen.has([row, col - 1])
      ) {
        // push tuple into queue
        queue.push([row, col - 1]);
        // add it to has seen
        hasSeen.add([row, col - 1]);
      }

      // right
      if (
        board[col + 1] !== undefined &&
        board[row][col + 1] === word[currLetterIdx + 1] &&
        !hasSeen.has([row, col + 1])
      ) {
        // push tuple into queue
        queue.push([row, col + 1]);
        // add it to has seen
        hasSeen.add([row, col + 1]);
      }

      currLetterIdx += 1;
    }
    console.log("word length: ", word.length);

    return currLetterIdx === word.length ? true : false;
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === word[currLetterIdx]) {
        result = bfs(r, c);
      }

      if (result) return true;
      currLetterIdx = 0;
    }
  }

  return result;
};
