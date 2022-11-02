const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0;
  let queue = [root];

  while (queue.length > 0) {
    let currNode = queue.shift();
    sum += currNode.val;

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return sum;
};

const treeSumRecursively = (root) => {
  if (!root) return 0;

  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);

  return root.val + leftSum + rightSum;
};


// part 2
const treeSumRecursively2 = (root) => {
  if (!root) return 0;

  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);

  return root.val + leftSum + rightSum;
};
