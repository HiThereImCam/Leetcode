function branchSums(root) {
  let arr = [];
  dfs(root, arr, 0);
  return arr;
}

function dfs(node, arr, runningSum) {
  if (!node) return;

  // update the runningSum
  runningSum += node.value;

  // you dont want to go down the children if they both dont exist
  if (!node.left && !node.right) {
    arr.push(runningSum);
    return;
  }

  dfs(node.left, arr, runningSum);
  dfs(node.right, arr, runningSum);
}
