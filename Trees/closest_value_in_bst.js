function findClosestValueInBst(tree, target) {
  if (tree.value === target) return tree.value;

  return bfs(tree, target, tree.value);
}

function bfs(tree, target, closestValue) {
  let queue = [];
  let difference;
  if (closestValue < target) {
    queue.push(tree.right);
  } else {
    queue.push(tree.left);
  }

  while (queue.length != 0) {
    let node = queue.shift();
    difference = Math.abs(target - closestValue);

    if (node === null) return closestValue;

    if (Math.abs(target - node.value) < difference) {
      closestValue = node.value;
    }

    if (node.value < target) {
      queue.push(node.right);
    } else {
      queue.push(node.left);
    }
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
