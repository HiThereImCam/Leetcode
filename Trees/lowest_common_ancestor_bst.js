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

/*
  idea
    - keep track of previous parents?
    
  we could create an obj because of O(1) look up and O(1) insertion
  
  {
    a: null       // b/c it's the root
    b: a
    d: b
    e: b
    h: e 
  }
  
  helper function
  we could traverse through the tree in breadth first
    - as we traverse it feels like
      queue = [[node, prev]]
      so starting it would be [[root, null]]
  
  once our obj is filled 
  we can iterate through the obj until we hit null or we hit a common ancestor
  
  
  dfs 
*/

const lowestCommonAncestor = (root, val1, val2) => {
  let path1 = getPath(root, val1);
  let path2 = getPath(root, val2);
  let set = new Set(path2);

  for (let val of path1) {
    if (set.has(val)) {
      return val;
    }
  }
};

const getPath = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  let leftPath = getPath(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }

  let rightPath = getPath(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};
