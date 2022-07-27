/*
              a
            b   c
         
         
         
*/

// remember - dfs uses stack
// bfs uses queue
const depthFirstValues = (root) => {
  if (!root) return [];

  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

const depthFirstValuesIteratively = (root) => {
  if (!root) return [];
  // iteratively
  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    let currNode = stack.pop();
    result.push(currNode.val);
    if (currNode.right) {
      stack.push(currNode.right);
    }
    if (currNode.left) {
      stack.push(currNode.left);
    }
  }

  return result;
};
