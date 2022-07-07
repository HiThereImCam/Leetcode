/*
https://leetcode.com/problems/binary-tree-preorder-traversal/
Given the root of a binary tree, return the preorder traversal of its nodes' values.

                  6
              3      7

          1     4   2   8

          6
        3   5 

preorder root left right

[6 3 1 4 5 2 8]

starting at root
  base case- if !root return
  result = [root]
  check left
    if left exists
    recusively call function passing in left/result
    if right exists
    recursively call function passing in right/result


  return result

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
          6
        3   7 


  node val: 6
  node left: 3
  node right: 5

  result = []


Time complexity: O(N) where N is the number of nodes
Space Complexity: O(N) 

        1
          2
        3


*/
let dfs = (node, result) => {
  if (!node) return [];
  result.push(node.value);

  //go left
  dfs(node.left, result);
  dfs(node.right, result);

  return result;
};

/*
        1
          2
        3

  queue= []
  currentNode = 1 null 2  
  left = null 
  right = 2 null
  result = [1 2 3]

      3
  1       4
0   2

3 1 0 2 4

  stack= [4 2 ]
  currentNode = 1 0 
  left = 0 null
  right = 2  null
  result = [3 1 0 2 4]

*/

let dfsIteratively = (node, result) => {
  let stack = [node];

  while (stack.length > 0) {
    // pop off current node in queue
    let currentNode = stack.pop();

    if (currentNode) {
      result.push(currentNode.val);
      // go right
      stack.push(currentNode.right);
      stack.push(currentNode.left);
    }
  }

  return result;
};

var preorderTraversal = function (root) {
  let result = [];
  let traversalArr = dfs(root, result);

  console.log("traversal array: ", traversalArr);
};
