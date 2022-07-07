var lowestCommonAncestor = function (root, p, q) {
  /*
                            2
                        0      4
                        
                    return 2 because LCA allows node to be a descendant of itself
        Clarifying questions:
            - how do i handle empty root
            - 
                            2
                        0       4
                            3       5
                    
                    p = 2 q = 5 
                    return 2 
                    2 -> 0 // parent
                    2 -> 5 // grandparent of 5
        
        is p < q? p != q 
        
        return 6 because left = p and right = q
        we have to check left side b/c q will never be on right hand of tree
            - go down a level
            - 2 
                - is 2 equal to p? yes
                - if q > currNode? 
        
        currNode 6 2
        p = 0 
        q = 5
        
        if currNode.value === p || currNode.value == q return currNode
        if p < currNode.val <= q then return currNode
        
        if(p > currNode.val) move to the right
        if(q < currNode.val) move to the left
        
        
        
    */
  let currNode = root;

  while (currNode) {
    if (p.val > currNode.val && q.val > currNode.val) {
      currNode = currNode.right;
    } else if (q.val < currNode.val && p.val < currNode.val) {
      currNode = currNode.left;
    } else {
      return currNode;
    }
  }
};

/**
 * tried this on 6/2/2022
 * did not get it. will try again on 5/3/2022
 *
 */
