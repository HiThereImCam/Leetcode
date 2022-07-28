const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  let left = pathFinder(root.left, target);
  let right = pathFinder(root.right, target);

  if (left === null && right === null) {
    return null;
  } else if (left === null) {
    return [root.val, ...right];
  } else {
    return [root.val, ...left];
  }
};

O(n) - Time;
O(n) - Space;

/* Alvins sol */

const pathFinderAlv = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];

  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
};

/*
    because the target is going to be on oneside of the tree
    if the side is not null, you have found the path

    that is exactly what alvins sol does

 */
