var isSameTree = function (p, q) {
  if (p === q) return true;
  if (p === null && q !== null) {
    return false;
  }
  if (p !== null && q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 08/30/2022
var isSameTree2 = function (p, q) {
  if (p === q) return true;
  if (p === null && q !== null) {
    return false;
  }
  if (p !== null && q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
