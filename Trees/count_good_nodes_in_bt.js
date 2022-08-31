/*
    base case
        - if node is null return 0


    look at node
        create a count


    how do i keep track of the previous node's value
        - passing it into the function parameters
        
        prevVal = null

            3
        3
      4  2 
      
      root = 3
      prevVal = -Infinity
      count = 1
      
      left = 2
      right = 0
      
      return count + left + right // 3
      
                1
            2       3
        4
*/

var goodNodes = function (root, prevVal = root.val) {
  if (!root) return 0;

  let count = 0;
  if (root.val >= prevVal) {
    count += 1;
  }

  let left = goodNodes(root.left, root.val);
  let right = goodNodes(root.right, root.val);

  return count + left + right;
};
