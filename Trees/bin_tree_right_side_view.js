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
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let currNode = queue.shift();
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }

    result.push(currNode.val);
  }

  return result;
};

/*
    create a queue
    
    [1] -> [2,3]
            iterate through this
                if i = length - 1
                    count += 1
                because what if there is a left node that is not
                hidden behind right node
                
*/

var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i += 1) {
      let node = queue.shift();
      if (i === length - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
