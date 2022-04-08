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
