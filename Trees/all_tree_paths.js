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

/*
7/30

Did again but execution timed out

what i didnt do
  - i didnt trust my base example
              a
            b   c
  
  upon coming back from left and right
  you want to push both [root.val, ...subArray]

  What i did was 
      - push the subarray into path
      - then iterate over path and then push the root.val in 
  
  correction
      - i was pushing root.val into path instead of subPath

*/
const allTreePathsSecond = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  let path = [];
  let left = allTreePaths(root.left);
  for (let subPath of left) {
    path.push(subPath);
  }

  let right = allTreePaths(root.right);
  for (let subPath of right) {
    path.push(subPath);
  }

  for (const subPath of path) {
    path.unshift(root.val); // <----- this is what caused the issue
    // should be subPath.unshift()
  }

  return path;
};
