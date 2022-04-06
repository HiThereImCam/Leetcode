var maxPathSum = function (root) {
  /*
        
        variable currentSum = 0
        variable currNode = root
   
        traversal
            - dfs
                - currNode: val
                - [currNode]
                - while stack not empty
                    -
                    - left & right
                          - check currentSum against currNode.val + helper
                        - update currentSum 
                         let helper = helperFnc(currNode.left)
                        - returns the sum of the leftSubTree
                -   helper(left, right, -1000); 
            
                - helper function that helps you go down subTree (keeps track of the subTrees)
                    - arguments left & right of the currentNode
                        - 
                        - helperFnc(left, right, helperCurSum){
                        
                          }
                    
                    - base case: if currentNode is null return the helperCurSum
                    - if helperCurSum += left.val > helperCurSum
                        update helperCurSum 
                    - if helperCurSum += right.val > helperCurSum
                         update helperCurSum 
                    recursive call
    */

  let helperCurSum = helper(root.left, root.right, currentSum);
  let addedSum = helperCurSum + root.val;

  if (addedSum > helperCurSum) {
    return addedSum;
  } else {
    return helperCurSum;
  }
};

/**
 * need to watch video and take notes again
 */
