/*
    key is that height of root node is 0
    therefore, null node is -1 


*/
const howHigh = (node) => {
  /*
            1
          2   3
        4  5 6 7
               8
    */
  if (!node) return -1; // height of one node is 0

  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};
