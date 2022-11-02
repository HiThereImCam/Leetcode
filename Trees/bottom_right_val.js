/*
          1
        2  
        
          1
        2  3
        
          1 
        2   3
         4    5
                6
                
           1
        2    3
      1   4
      
      what don't I understand
        - how do I know that I am at a right subtree
            - go right
              - the current node could be the farthest right
              - check left && right
            - go left
                - check for node.right
                  - immediately go right 
                  
        plan
          if !root return 0
          
          
        literally the most right
          - meaning the last node in the tree?
          
*/

const bottomRightValue = (root) => {
  let queue = [root];
  let farthestVal = null;
  while (queue.length > 0) {
    let currNode = queue.shift();

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);

    if (queue.length === 0) farthestVal = currNode.val;
  }

  return farthestVal;
};

/*
    Time - O(n)
    Space - O(n)

    Also
        1
       2
    would return 2 as the farthest right node
    the question is a bit misleading
  */

// part 2
const bottomRightValue2 = (root) => {
  let queue = [root];
  let farthestVal = null;
  while (queue.length > 0) {
    let currNode = queue.shift();

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);

    if (queue.length === 0) farthestVal = currNode.val;
  }

  return farthestVal;
};
