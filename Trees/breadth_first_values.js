const breadthFirstValues = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let currNode = queue.shift();
    result.push(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  return result;
};
/*
    Note:
        shift() runs in O(n) time
            - therefore technically the runtime should be O(n^n)
            - but JS doesnt have a native queue structure
        
        bfs recursively is very difficult 
  */
