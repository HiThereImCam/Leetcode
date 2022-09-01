/*
    are we guaranteed a node?
        node can be 0
        
    dfs/bfs
    
    dfs
        !root return 0
        
        go left
        go right

        find max between left and right
        return 1 + max
        
        root: 3
        left: 1
        right: 2
        
        return 1 + 2
        returns 3
*/
// var maxDepth = function(root) {
//     if(!root) return 0

//     let left = maxDepth(root.left)
//     let right = maxDepth(root.right)

//     return 1 + Math.max(left, right)
// };

/*
    queue = [[7, 2]]
    currNode: 7


    count: 3 
*/

var maxDepth = function (root) {
  if (!root) return 0;
  let count = 0;
  let queue = [[root, 0]]; // 0 is our current level

  while (queue.length > 0) {
    const [currNode, level] = queue.shift();

    count = Math.max(count, level);
    if (currNode.left) {
      queue.push([currNode.left, level + 1]);
    }
    if (currNode.right) {
      queue.push([currNode.right, level + 1]);
    }
  }
  return count + 1;
};
