var maxPathSum = function (root, current = 0) {
  if (!root) return current;
  current += root.val;

  let left = maxPathSum(root.left);
  let right = maxPathSum(root.right);

  return Math.max(left, right);
};

/*
  Above doesnt work because of
  current = -7 

          0
            -1
  if you check left
    - it returns -7
  if you check right
    - it returns -8
    
  technically, it should be -8
  because -1 is the leaf node and 0 is not

  thats why it doesnt wor k
    
 */

// alvins sol

var maxPathSumAlv = (root) => {
  if (!root) return -Infinity; // has left but no right, has right no left
  if (!root.left && !root.right) return root.val; // root node

  let maxSum = Math.max(maxPathSumAlv(root.left), maxPathSumAlv(root.right));

  return root.val + maxSum;
};
