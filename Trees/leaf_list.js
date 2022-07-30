/*
          []
          result = []
          
          a
          result = [a]
          left 
          right
          
            a
          b  c
          
          root: a
          
          left:
                node: b
                result: [b]
          left: [b] -> passed by reference so result = [b]
          
          right:
                node: b
                result: [b,c]
          
          right: result = [b,c]
          
          return [b,c]
          
          
*/

const getLeafNodes = (node, result) => {
  if (!node) return [];
  if (!node.left && !node.right) result.push(node.val);

  getLeafNodes(node.left, result);
  getLeafNodes(node.right, result);

  return result;
};

const leafList = (root) => {
  let result = [];
  return getLeafNodes(root, result);
};
