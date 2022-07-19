/*
  holding array
  
  set currNode to equal head
  iterate through linked list while currNode !== null
    push value into array
    set currNode to next node
    
  time complexity - O(n)
  space complexity - O(n) where n is the length of the linked
  list
  
  1 -> 2 -> 3 -> 4
  result: [] [1] [1,2] [1,2,3] [1,2,3,4]
  currNode val: 1 2 3 4 null
  next Node val: 2 3 4 null
*/
const linkedListValues = (head, resultArr = []) => {
  let values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (currNode, values) => {
  if (currNode === null) return values;
  values.push(currNode.val);
  fillValues(currNode.next, values);
};
