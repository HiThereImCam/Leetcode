/**
 * KEYS 
  you need both cases of
    - !root
    - !left && !right
    - COLLECTION ARRAY 
     [[]] -> inner array is the path
          -> outer array is the collection of paths
 */

const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  let path = [];
  let left = allTreePaths(root.left);
  for (let subPath of left) {
    path.push([root.val, ...subPath]);
  }

  let right = allTreePaths(root.right);
  for (let subPath of right) {
    path.push([root.val, ...subPath]);
  }

  return path;
};
