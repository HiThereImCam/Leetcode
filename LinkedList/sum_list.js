/*
  sum = 0
  iterate through linked list
    while currNode !== null
     add currNode.val to sum
     set currNode to next node
*/
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};
