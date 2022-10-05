/*
    we could use bfs and go level by level
      - how could we go level by level?
        - [leftNode/rightNode, 'left'/'right', prevNode]
        - iterate through queue
          - if prevNode === null continue // meaning this is first node
          - if 'left'
            - if currNode > prevNode
                return false
          - if 'right'
            - if currNode < prevNode
                return false
                
          if left
            - [currNode.left, left, currNode]
          go right
            - [currNode.right, right, currNode]
    
    we could use dfs
      - left and then right
      - keep track of it's previous

    
    i feel like I need more information
      - recursively, how do I know that I went left
        - options
          - boolean to indicate whether or not algo traversed left || right
          - string to indiciate whether or not algo traversed left || right
          -
    
    what if I had string
      - path = null // on first iteration
      
    when we go left  
      - path = left etc
      
    so I would have (root, prevNode, prevPath) as my arguments
    
    - idea
      - base case
        - if we get down to the edges
          -  return true because every node passes the cases
      - I can check if prevNode and prevPath are not node
    
    question:
      - how do we get past the initial iteraton where:
          - prevPath = null
          - prevNode = null
          
      
*/

const inOrderTraversal = (root, values) => {
  if (root === null) return;
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);

  return values;
};

const sortedEle = (values) => {
  for (let i = 0, j = i + 1; j < values.length - 1; i++, j++) {
    if (values[i] > values[j]) {
      return false;
    }
  }

  return true;
};

const isBinarySearchTree = (root) => {
  const values = [];
  const arrOfEle = inOrderTraversal(root, values);
  return sortedEle(arrOfEle);
};
