/*
       5
    -3  3

    currentMin = 5
    left:
      root.left: -3
      currentMin: 5 -3
      
      left: 
        root.left: null
        returns -3
    
    left = -3
    
    right: 
      root.right: 3
      currentMin: -3 -3 
      
      left:
        root.left: null
        returns -3
      
      right: 
        root.right: null
        returns -3 
        
      smallest -> (-3, -3) = -3
      
      
*/
const treeMinValueMine = (root, currentMin = root.val) => {
  if (!root) return currentMin;
  currentMin = Math.min(currentMin, root.val);

  let left = treeMinValue(root.left, currentMin);
  let right = treeMinValue(root.right, currentMin);

  return Math.min(currentMin, left, right);
};

/*
  Alvins sol
*/

const treeMinValueAlv = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);
};
