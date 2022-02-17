class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
value: 10 5
left: 5  2 
right: 15 5 
*/

function validBST(node) {
  if (node === null) return true;

  let value = node.value;
  let leftVal = node.left.value;
  let rightVal = node.right.value;

  if (value < leftVal || value >= rightVal) return false;

  validBST(node.left);
  validBST(node.right);
}

function validateBst(tree) {
  // Write your code here.

  let returnValue = validBST(tree);
  return returnValue === true ? true : false;
}
