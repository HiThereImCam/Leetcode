const treeIncludesIteratively = (root, target) => {
  if (!root) return false;
  let stack = [root];

  while (stack.length > 0) {
    let currNode = stack.pop();
    if (currNode.val === target) return true;
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }

  return false;
};
const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);

  /*
    when do I return false? 
    possible solutions
      - creating helper function
        - the helper function would
    
    
    keys
      - return value from leftTree || value from rightTree 
        - this works because of basecase of
          - if(!root) return false
  
  
  
    true || false true
    false || false false
    */
};
